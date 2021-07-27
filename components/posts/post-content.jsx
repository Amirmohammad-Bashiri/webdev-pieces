import Image from "next/image";
import dynamic from "next/dynamic";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";

const ReactMarkdown = dynamic(() => import("react-markdown"));

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("bash", bash);

function PostContent({ post }) {
  const renderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
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
          style={materialDark}
          language={language}
          showLineNumbers={true}>
          {codeData}
        </SyntaxHighlighter>
      );
    },
  };

  const markdown = (
    <ReactMarkdown
      className="space-y-5 text-lg prose text-gray-700 2xl:prose-xl dark:prose-dark md:space-y-7 dark:text-gray-200 lg:text-xl"
      components={renderers}>
      {post.content}
    </ReactMarkdown>
  );

  return <article className="container py-12 mx-auto">{markdown}</article>;
}

export default PostContent;
