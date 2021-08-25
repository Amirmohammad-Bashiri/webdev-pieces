import Image from "next/image";
import dynamic from "next/dynamic";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import ReactMarkdown from "react-markdown";

import { extractHeadingId, removeLastWord } from "../../lib/post-util";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("bash", bash);

function PostContent({ post }) {
  const renderers = {
    h1(heading) {
      const headingText = heading.children[0];
      const id = extractHeadingId(headingText);
      const content = id ? removeLastWord(headingText) : heading.children;
      return (
        <div>
          <h1 id={id ? id : undefined}>{content}</h1>
        </div>
      );
    },
    h2(heading) {
      const headingText = heading.children[0];
      const id = extractHeadingId(headingText);
      const content = id ? removeLastWord(headingText) : heading.children;

      return (
        <div>
          <h2 id={id ? id : undefined}>{content}</h2>
        </div>
      );
    },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;

      if (!className) {
        return <code>{children.toString()}</code>;
      }
      const language = className.split("-")[1];

      // Remove the extra new line by removing the \n at the end of the code
      const codeData = children[children.length - 1].slice(0, -1).split();

      return (
        <SyntaxHighlighter
          className="overflow-x-scroll rounded"
          style={dracula}
          language={language}
          showLineNumbers={true}>
          {codeData}
        </SyntaxHighlighter>
      );
    },
  };

  const markdown = (
    <ReactMarkdown
      className="min-w-full space-y-5 text-lg prose text-gray-700 xl:prose-xl dark:prose-dark md:space-y-7 dark:text-gray-200 lg:text-xl"
      components={renderers}>
      {post.content}
    </ReactMarkdown>
  );

  return <article className="py-12">{markdown}</article>;
}

export default PostContent;
