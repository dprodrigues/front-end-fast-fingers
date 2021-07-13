import styled from "styled-components";

const Modal = styled.div`
    background: var(--bg-dark);
    border-radius: 8px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    padding: 64px 84px;

    @media (max-width: 576px) {
        padding: 48px 64px;
        width: 90%;
    }
`;

export default Modal;
