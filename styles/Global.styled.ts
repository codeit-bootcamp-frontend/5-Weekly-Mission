import { createGlobalStyle } from "styled-components";

interface GlobalStyleProps {
  isRemoveLayoutPage: boolean;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    @font-face {   
        font-family: 'Pretendard Variable';   
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')     
        format('woff');   
    }
    /* -------Reset styles------- */
   * {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 16px;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        background-color: ${(props) =>
          props.isRemoveLayoutPage ? "#F0F6FF" : "white"};
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a, button {
        border: none;
        cursor: pointer;
        background: none;
    }
    
    a{
        text-decoration: none;
        color: inherit;
    }


    /* -------Color styles------- */
    :root {
        --main-color: #6D6AFE;
        --var-test-red: #FF5B56;
        --var-test-black: #111322;
        --var-test-white: #FFFFFF;
        --var-test-gray: #9FA6B2;
        
        --border-gray: #CCD5E3;
    }

    /* -------zIndex styles------- */
    :root {
        --zindex-basic: 100;
        --zindex-modal: 900;
    }
    
`;

export default GlobalStyle;
