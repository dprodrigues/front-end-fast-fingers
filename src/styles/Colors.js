import { createGlobalStyle } from "styled-components";
import { lighten, darken } from "polished";

const Colors = createGlobalStyle`
    :root {
        --bg-dark: #0F0C16;
        --bg-medium: #1A1527;

        --bg-light: #3D2B6B;
        --bg-light--hover: ${lighten(0.05, "#3D2B6B")};
        --bg-light--active: ${darken(0.05, "#3D2B6B")};

        --font-white: #F9F9F9;
        --font-black: #292929;

        --color-error: #BB1411;
        --color-success: #52AB50;
    }
`;

export default Colors;
