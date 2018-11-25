import styled from 'styled-components'

const HljsStyles = styled.div`
  /* Tomorrow Night Blue Theme */
  /* http://jmblog.github.com/color-themes-for-google-code-highlightjs */
  /* Original theme - https://github.com/chriskempson/tomorrow-theme */
  /* http://jmblog.github.com/color-themes-for-google-code-highlightjs */
  .tomorrow-comment,
  pre .comment,
  pre .title {
    color: #7285b7;
  }

  .tomorrow-red,
  pre .variable,
  pre .attribute,
  pre .tag,
  pre .regexp,
  pre .ruby .constant,
  pre .xml .tag .title,
  pre .xml .pi,
  pre .xml .doctype,
  pre .html .doctype,
  pre .css .id,
  pre .css .class,
  pre .css .pseudo {
    color: #ff9da4;
  }

  .tomorrow-orange,
  pre .number,
  pre .preprocessor,
  pre .built_in,
  pre .literal,
  pre .params,
  pre .constant {
    color: #ffc58f;
  }

  .tomorrow-yellow,
  pre .class,
  pre .ruby .class .title,
  pre .css .rules .attribute {
    color: #ffeead;
  }

  .tomorrow-green,
  pre .string,
  pre .value,
  pre .inheritance,
  pre .header,
  pre .ruby .symbol,
  pre .xml .cdata {
    color: #d1f1a9;
  }

  .tomorrow-aqua,
  pre .css .hexcolor {
    color: #99ffff;
  }

  .tomorrow-blue,
  pre .function,
  pre .python .decorator,
  pre .python .title,
  pre .ruby .function .title,
  pre .ruby .title .keyword,
  pre .perl .sub,
  pre .javascript .title,
  pre .coffeescript .title {
    color: #bbdaff;
  }

  .tomorrow-purple,
  pre .keyword,
  pre .javascript .function {
    color: #ebbbff;
  }

  pre {
    width: 800px;
    max-width: 100%;
    overflow-x: auto;
    background: #002451;
    margin: 20px 0 50px;
    padding: 40px 0;
  }

  pre code {
    color: white;
    display: block;
    font-family: Menlo, Monaco, Consolas, monospace;
    line-height: 1.5;
    padding: 0 30px;
    width: auto;
    min-width: 100%;
  }
`

export default HljsStyles
