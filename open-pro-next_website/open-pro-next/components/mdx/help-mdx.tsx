import { useMDXComponent } from 'next-contentlayer/hooks'

const mdxComponents = {}

interface HelpMdxProps {
  code: string
}

export function HelpMdx({ code }: HelpMdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article className="prose text-gray-400 max-w-none prose-lg prose-invert prose-p:leading-normal prose-headings:text-gray-200 prose-a:text-gray-200 prose-a:underline hover:prose-a:no-underline prose-a:font-normal prose-strong:font-medium prose-strong:text-gray-200 prose-blockquote:italic prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-200 prose-blockquote:font-normal prose-blockquote:text-gray-400 prose-ul:list-none prose-ul:pl-0 prose-li:pl-0">
      <Component components={{ ...mdxComponents }} />
    </article>
  )
}
