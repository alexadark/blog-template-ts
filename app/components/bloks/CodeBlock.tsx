// const storyblokEditable = require("@storyblok/react").storyblokEditable;
import { storyblokEditable } from "@storyblok/react";
import type { CodeBlockStoryblok } from "~/types";
// const SyntaxHighlighter = require("react-syntax-highlighter").Light;
// const js =
//   require("react-syntax-highlighter/dist/cjs/languages/hljs/javascript").default;
// const shadesOfPurple =
//   require("react-syntax-highlighter/dist/cjs/styles/hljs/shades-of-purple").default;

// SyntaxHighlighter.registerLanguage("javascript", js);

const CodeBlok = ({ blok }: CodeBlockStoryblok) => {
  const { code } = blok;

  return (
    <div {...storyblokEditable(blok)}>
      <h3>{code.title}</h3>
      {/* <SyntaxHighlighter
        language="javascript"
        style={shadesOfPurple}
        showLineNumbers
      >
        {code.code}
      </SyntaxHighlighter> */}
    </div>
  );
};

// module.exports = CodeBlok;
export default CodeBlok;
