import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.bg_secondary};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.secondary};
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-corner {
    background-color: ${(props) => props.theme.bg_secondary};
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #FFFFFF;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  * {
    margin: 0;
    padding: 0;
    font-variant-numeric: tabular-nums;
  }
  
  @media print {
    @page {
      margin: 0;
    }

    body {
      -webkit-print-color-adjust: exact !important;
    }
  }
`;
