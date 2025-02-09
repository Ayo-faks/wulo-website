import subprocess
import os

def compress_pdf_with_gs(input_file, output_file):
    """
    Compress PDF using Ghostscript for maximum compression.
    Requires Ghostscript to be installed on the system.
    """
    try:
        subprocess.run([
            'gs',
            '-sDEVICE=pdfwrite',
            '-dCompatibilityLevel=1.4',
            '-dPDFSETTINGS=/screen',
            '-dNOPAUSE',
            '-dQUIET',
            '-dBATCH',
            '-dColorImageDownsampleType=/Bicubic',
            '-dColorImageResolution=150',
            '-dGrayImageDownsampleType=/Bicubic',
            '-dGrayImageResolution=150',
            '-dMonoImageDownsampleType=/Subsample',
            '-dMonoImageResolution=150',
            f'-sOutputFile={output_file}',
            input_file
        ], check=True)

        if os.path.exists(output_file):
            original_size = os.path.getsize(input_file)
            compressed_size = os.path.getsize(output_file)
            reduction = (1 - compressed_size/original_size) * 100
            print(f"PDF compressed successfully!")
            print(f"Original size: {original_size/1024:.2f} KB")
            print(f"Compressed size: {compressed_size/1024:.2f} KB")
            print(f"Reduction: {reduction:.1f}%")

    except subprocess.CalledProcessError as e:
        raise RuntimeError(f"Ghostscript compression failed: {str(e)}")

# Usage
if __name__ == "__main__":
    input_pdf = "/home/ayoola/repos/wulowebsite/slips/merged_payslips.pdf"
    output_pdf = "/home/ayoola/repos/wulowebsite/slips/merged_payslips_compressed.pdf"
    
    compress_pdf_with_gs(input_pdf, output_pdf)
