import { createGlobalStyle } from "styled-components";
import Particles from "react-particles-js";

import backgroundImage from "../assets/svg/background.svg";

const BackgroundGlobalStyle = createGlobalStyle`
    html {
        background: var(--bg-medium);
    }

    body {
        background: url(${backgroundImage}) no-repeat right bottom;
        height: 100vh;
    }
`;

const particlesParams = {
    autoPlay: true,
    fpsLimit: 60,
    particles: {
        color: "#fff",
        links: {
            enable: false,
        },
        move: {
            direction: "top",
            outMode: "out",
            speed: 0.5,
        },
        collisions: {
            enable: false,
        },
    },
};

const Background = () => (
    <>
        <BackgroundGlobalStyle />
        <Particles
            style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
            params={particlesParams}
        />
    </>
);

export default Background;
