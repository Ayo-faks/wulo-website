import { useMDXComponent } from 'next-contentlayer/hooks'
import PostLink from './link'
import PostImage from './image'

const mdxComponents = {
  Link: PostLink,
  Image: PostImage,
}

interface PostMdxProps {
  code: string
}

export function PostMdx({ code }: PostMdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article className="prose text-gray-400 max-w-none prose-lg prose-invert prose-p:leading-normal prose-headings:text-gray-200 prose-a:text-gray-200 prose-a:underline hover:prose-a:no-underline prose-a:font-normal prose-strong:font-medium prose-strong:text-gray-200 prose-blockquote:italic prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-200 prose-blockquote:font-normal prose-blockquote:text-gray-400">
      <Component components={{ ...mdxComponents }} />
    </article>
  )
}
