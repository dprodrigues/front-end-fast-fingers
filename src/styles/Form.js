import styled from "styled-components";

import { Link as LinkRRD } from "react-router-dom";

export const Title = styled.h3`
    color: var(--font-white);
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin: 0 0 4px;
    text-align: center;
`;

export const Description = styled.p`
    color: var(--font-white);
    font-size: 16px;
    line-height: 19px;
    margin: 0 0 24px;
    text-align: center;
`;

export const Form = styled.form`
    min-width: 372px;
    width: 100%;

    @media (max-width: 576px) {
        min-width: unset;
    }
`;

export const Label = styled.label`
    color: var(--font-white);
    display: block;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 8px;
    text-transform: uppercase;
`;

export const Input = styled.input`
    background: var(--bg-medium);
    border-radius: 4px;
    color: var(--font-white);
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 16px;
    outline: none;
    padding: 16px;
    width: 100%;
`;

export const ErrorMessage = styled.p`
    color: var(--color-error);
    font-size: 12px;
    line-height: 14px;
    margin: -8px 0 8px;
`;

export const Link = styled(LinkRRD)`
    color: var(--font-white);
    display: block;
    font-size: 12px;
    line-height: 14px;
    margin: -8px 0 16px;
    text-decoration-line: underline;
`;

export const SubmitButton = styled.button`
    background: var(--bg-light);
    border-radius: 4px;
    color: var(--font-white);
    cursor: pointer;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    outline: none;
    padding: 16px;
    transition: all 100ms linear;
    width: 100%;

    &:hover {
        background: var(--bg-light--hover);
    }

    &:active {
        background: var(--bg-light--active);
    }

    &:disabled {
        background: #c4c4c4;
        color: var(--font-black);
        cursor: default;
        pointer-events: none;
    }
`;
