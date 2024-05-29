import { Html, Head, Main, NextScript } from 'next/document';
import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } catch (error) {
      throw error;
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <script
            defer
            src="https://developers.kakao.com/sdk/js/kakao.min.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
