import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --purple-300: #E9C5ff;
    --purple-600: #6200ee;
    --purple-900: #250059;
    --blue-100: #ccffff;
    --blue-300: #00ccff;
    --blue-600: #0033cc;
    --blue-900: #000099;
    --neutral-1: #ffecd6;
    --neutral-2: #ffe7d7;
    --neutral-3: #fff6d6;
    --neutral-4: #d8f7ff;
    --neutral-5: #ecf6ff;
    --orange-100: #ffcc66;
    --orange-300: #ff9900;
    --orange-600: #ff6600;
    --orange-900: #ff3300;
    --black: #000000;
    --white: #ffffff;

    --font-black: #1c1c1c;
    --font-white: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1080px){
        font-size: 93.75%;
    }
    @media (max-width: 720px) {
        font-size: 87.5%;
    }
}

h1 {
    color: var(--blue-600);
    font-family: 'Inter', sans-serif;
}
`