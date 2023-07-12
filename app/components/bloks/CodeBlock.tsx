const storyblokEditable = require("@storyblok/react").storyblokEditable;
const SyntaxHighlighter = require("react-syntax-highlighter").Light;
const js =
  require("react-syntax-highlighter/dist/cjs/languages/hljs/javascript").default;
const shadesOfPurple =
  require("react-syntax-highlighter/dist/cjs/styles/hljs/shades-of-purple").default;

SyntaxHighlighter.registerLanguage("javascript", js);

const CodeBlok = ({ blok }) => {
  const { code } = blok;

  return (
    <div {...storyblokEditable(blok)}>
      <h3>{code.title}</h3>
      <SyntaxHighlighter
        language="javascript"
        style={shadesOfPurple}
        showLineNumbers
      >
        {code.code}
      </SyntaxHighlighter>
    </div>
  );
};

module.exports = CodeBlok;
