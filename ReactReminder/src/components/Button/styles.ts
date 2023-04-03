import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    padding: 0.7rem 1.5rem;
    letter-spacing: 0.21em;

    background-color: var(--black);
    color: var(--font-white);

    border: none;
    border-radius: 0.2rem;

    transition: 0.3s ease-in-out;

    :hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;
