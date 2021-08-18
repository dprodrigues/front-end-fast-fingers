import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
    * {
        border: 0;
        box-sizing: border-box;
        font-family: "Rubik", sans-serif;
        margin: 0;
        padding: 0;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section { display: block; }

    body { line-height: 1; }

    ol, ul { list-style: none; }

    blockquote, q { quotes: none; }
    
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

export default Reset;
