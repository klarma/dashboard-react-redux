import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 20px;
        font-family: 'Montserrat', sans-serif;
        background-color: ${({ theme }) => theme.color.gallery};
    }
`;
