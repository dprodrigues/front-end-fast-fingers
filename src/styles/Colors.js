import { createGlobalStyle } from "styled-components";

const Colors = createGlobalStyle`
    :root {
        --bg-dark: #0F0C16;
        --bg-medium: #1A1527;
        --bg-light: #3D2B6B;

        --font-white: #F9F9F9;

        --color-error: #BB1411;
        --color-success: #52AB50;
    }
`;

export default Colors;
