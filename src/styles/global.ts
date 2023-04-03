import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: "Inter", sans-serif;
  }

  a, a:visited, a:hover, a:focus{
   text-decoration: none;
   color: inherit;
  }

  :root {
      --blue:#5E7380;
      --darkerBlue: #425660;
      --black:#121416;
      --lighterBlack:#333;
      --grey:#686D72;
      --lighterGrey:#849CA9;
      --white:#EEF6FF;

      --secondGrey:#ebeef2;
      --red:#db3954;
      --secondBlue:#3167a9;
    }
`;

export default GlobalStyles;
