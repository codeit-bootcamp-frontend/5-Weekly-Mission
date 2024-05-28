import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link rel='stylesheet' href='/global.css' />
                    <link rel='icon' href='/favicon.ico' />
                    <meta property='og:title' content='Linkbrary' />
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <meta
                        property='og:description'
                        content='세상의 모든 정보를 쉽게 저장하고 관리해 보세요'
                    />
                    <meta property='og:image' content='https://ibb.co/cgDjBG1' />
                    <meta property='og:url' content='https://linkbrary-hyejean.netlify.app' />
                    <meta property='og:type' content='website' />
                    <script src='https://developers.kakao.com/sdk/js/kakao.js'></script>
                    <title>Linkbrary</title>
                </Head>
                <body id='root'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
