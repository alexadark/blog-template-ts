// const storyblokEditable = require("@storyblok/react").storyblokEditable;
import { storyblokEditable } from '@storyblok/react'
import type { CodeBlockStoryblok } from '~/types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const CodeBlok = ({ blok }: CodeBlockStoryblok) => {
  const { code } = blok
  return (
    <div {...storyblokEditable(blok)}>
      <h3>{code.title}</h3>
      <SyntaxHighlighter language="javascript" style={docco}>
        {code.code}
      </SyntaxHighlighter>
    </div>
  )
}

// module.exports = CodeBlok;
export default CodeBlok
