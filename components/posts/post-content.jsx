import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import materialLight from "react-syntax-highlighter/dist/cjs/styles/prism/material-light";
import materialDark from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";

import { useTheme } from "../../store/theme-context";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("bash", bash);

function PostContent({ post }) {
  const { theme } = useTheme();

  const syntaxStyle = theme === "light" ? materialLight : materialDark;

  const renderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className="my-20 text-center">
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={800}
              height={400}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];

      return (
        <SyntaxHighlighter
          className="overflow-x-scroll rounded"
          style={syntaxStyle}
          language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className="container py-20 mx-auto">
      <ReactMarkdown
        className="space-y-5 text-lg text-gray-700 md:space-y-7 dark:text-gray-200 lg:text-xl"
        components={renderers}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
