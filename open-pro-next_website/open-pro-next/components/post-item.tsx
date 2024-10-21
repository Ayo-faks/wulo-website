import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/components/post-date'
import PostTags from './post-tags'

export default function PostItem({ ...props }) {
  return (
    <article className="flex flex-col h-full" data-aos="fade-up">
      <header>
        {props.metadata.image &&
          <Link href={`/blog/${props.slug}`} className="block mb-6">
            <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
              <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={props.metadata.image} width={352} height={198} alt={props.metadata.title} />
            </figure>
          </Link>
        }
        {props.metadata.tags &&
          <div className="mb-3">
            <PostTags tags={props.metadata.tags} />
          </div>
        }
        <h3 className="h4 mb-2">
          <Link href={`/blog/${props.slug}`} className="hover:text-gray-100 transition duration-150 ease-in-out">{props.metadata.title}</Link>
        </h3>
      </header>
      <p className="text-lg text-gray-400 grow">{props.metadata.summary}</p>
      <footer className="flex items-center mt-4">
        <Link href="#">
          <img className="rounded-full shrink-0 mr-4" src={props.metadata.authorImg} width={40} height={40} alt={props.metadata.author} />
        </Link>
        <div className="font-medium">
          <Link href="#" className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">{props.metadata.author}</Link>
          <span className="text-gray-700"> - </span>
          <span className="text-gray-500"><PostDate dateString={props.metadata.publishedAt} /></span>
        </div>
      </footer>
    </article>  
  )
}
