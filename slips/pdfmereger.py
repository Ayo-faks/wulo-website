from PyPDF2 import PdfMerger, PdfReader, PdfWriter
import os
from datetime import datetime
import io

def get_file_size_mb(file_path):
    """Get file size in megabytes."""
    return os.path.getsize(file_path) / (1024 * 1024)

def compress_pdf_aggressive(input_file):
    """
    Compress PDF using PyPDF2's built-in compression features.
    """
    reader = PdfReader(input_file)
    writer = PdfWriter()

    # Remove all metadata except basic info
    metadata = {
        '/Title': 'Merged Payslips',
        '/Producer': 'PyPDF2'
    }
    writer.add_metadata(metadata)

    for page in reader.pages:
        # Process each page
        page.compress_content_streams()  # Apply content stream compression
        
        # Reduce resources dictionary
        if '/Resources' in page:
            resources = page['/Resources']
            if '/Font' in resources:
                # Simplify font resources
                for font in resources['/Font'].values():
                    if hasattr(font, '_objects'):
                        font._objects = {}
            
            # Remove unnecessary resource entries
            for key in ['/Properties', '/Shading', '/Pattern', '/ColorSpace']:
                if key in resources:
                    del resources[key]
        
        writer.add_page(page)
    
    # Set compression parameters
    writer._compress = True
    writer.compress_streams = True
    
    output_buffer = io.BytesIO()
    writer.write(output_buffer)
    output_buffer.seek(0)
    return output_buffer

def parse_date_from_filename(filename):
    """Extract date from filename and return a datetime object."""
    month_year = filename.split('_')[0]
    try:
        return datetime.strptime(month_year, '%B %Y')
    except ValueError as e:
        print(f"Error parsing date from {filename}: {e}")
        return None

def merge_pdfs(directory_path, output_filename='merged_payslips.pdf', max_size_mb=2):
    """
    Merge PDF files with compression to ensure size limit.
    """
    try:
        # Get all PDF files in the directory
        pdf_files = [f for f in os.listdir(directory_path) if f.endswith('.pdf')]
        
        if not pdf_files:
            print("No PDF files found in the specified directory.")
            return
        
        # Sort files by date
        dated_files = []
        total_size = 0
        for pdf_file in pdf_files:
            date = parse_date_from_filename(pdf_file)
            if date:
                file_path = os.path.join(directory_path, pdf_file)
                size = get_file_size_mb(file_path)
                total_size += size
                dated_files.append((date, pdf_file, size))
        dated_files.sort()
        
        print(f"Total size of original files: {total_size:.2f}MB")
        print("Compressing PDFs...")
        
        # Process each PDF with compression
        compressed_pdfs = []
        for _, filename, original_size in dated_files:
            file_path = os.path.join(directory_path, filename)
            print(f"Compressing {filename} (Original size: {original_size:.2f}MB)")
            compressed_pdf = compress_pdf_aggressive(file_path)
            compressed_pdfs.append((filename, compressed_pdf))
        
        # Merge compressed PDFs
        merger = PdfMerger()
        temp_output = io.BytesIO()
        
        for filename, compressed_pdf in compressed_pdfs:
            print(f"Adding {filename} to merged file")
            merger.append(compressed_pdf)
        
        # Write to temporary buffer first
        merger.write(temp_output)
        current_size_mb = len(temp_output.getvalue()) / (1024 * 1024)
        
        # Final compression pass
        print(f"\nSize after initial merge: {current_size_mb:.2f}MB")
        print("Applying final compression pass...")
        
        temp_output.seek(0)
        final_output = compress_pdf_aggressive(temp_output)
        
        # Write the final result
        output_path = os.path.join(directory_path, output_filename)
        with open(output_path, 'wb') as f:
            f.write(final_output.getvalue())
        
        final_size = get_file_size_mb(output_path)
        print(f"\nCreated merged PDF: {output_filename}")
        print(f"Final file size: {final_size:.2f}MB")
        print(f"Compression ratio: {(total_size/final_size):.1f}x")
        print(f"\nFiles merged in this order:")
        for _, filename, _ in dated_files:
            print(f"- {filename}")
        
        if final_size > max_size_mb:
            print(f"\nNote: Final size still exceeds {max_size_mb}MB limit.")
            print("Would you like to split the files into two separate PDFs instead?")
            
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        merger.close()
        temp_output.close()
        for _, buffer in compressed_pdfs:
            buffer.close()

if __name__ == "__main__":
    directory_path = "/home/ayoola/repos/wulowebsite/slips"
    merge_pdfs(directory_path, max_size_mb=2)