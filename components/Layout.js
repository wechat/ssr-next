import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default ({ children, title = '' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header />
    { children }
    <Footer />
    <style global jsx>{`
      body,
      html {
          height: 100%;
          -webkit-font-smoothing:antialiased;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }
      button,
      fieldset,
      img {
          border: 0;
          max-width: 100%;
      }
      body {
          -webkit-tap-highlight-color: transparent;
          outline: 0;
          -webkit-user-select: none;
          -webkit-text-size-adjust: 100%;
          width: 100%;
          font-size: 16px;
          line-height: 1;
      }
      article,
      aside,
      blockquote,
      body,
      button,
      code,
      dd,
      div,
      dl,
      dt,
      fieldset,
      figcaption,
      figure,
      footer,
      form,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      header,
      hgroup,
      input,
      legend,
      li,
      menu,
      nav,
      ol,
      p,
      pre,
      section,
      td,
      textarea,
      th,
      ul {
          margin: 0;
          padding: 0;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
          font-weight: 400;
      }
      table {
          border-collapse: collapse;
          border-spacing: 0;
      }
      caption,
      th {
          text-align: left;
      }
      li {
          list-style: none;
      }
      del {
          text-decoration: line-through;
      }
      button,
      input,
      optgroup,
      option,
      select,
      textarea {
          font-family: inherit;
          font-size: inherit;
          font-style: inherit;
          font-weight: inherit;
          outline: 0;
      }
      button {
          -webkit-appearance: none;
          background: 0 0;
      }
      input::-webkit-inner-spin-button,
      input::-webkit-outer-spin-button {
          -webkit-appearance: none!important;
          margin: 0;
      }
      input[type=number] {
          -moz-appearance: textfield;
      }
      a {
          color: #121212;
          text-decoration: none;
      }
      em,
      i {
          font-style: normal;
      }
      ::-webkit-input-placeholder {
          color: #bbb;
      }

      :focus {
        outline: 0;
      }

      ::-webkit-input-placeholder {
        color: #999;
      }

      ol, ul {
        list-style-type: none;
      }
    `}</style>
  </div>
)
