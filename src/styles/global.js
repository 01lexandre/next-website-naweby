import { createGlobalStyle } from 'styled-components'
import {useColorModeValue} from "@chakra-ui/react";
export default createGlobalStyle`
  ::selection {
    background-color: ${props => props.theme.colors.secundary['500']};
    color: ${props => props.theme.colors.white};
  }
  *, ::after, ::before {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font: ${props => props.theme.fontPatterns};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    a {
      text-decoration: underline;
    }
    p {
      font-size: 18px;
      line-height: 26px;
      margin-top: 0;
    }
    h1 {
      font-size: 2rem;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 1rem;
    }
    strong {
      font-weight: 600;
    }
    button {
      font: ${props => props.theme.fontPatterns};
    }
  }
  section {
    z-index: 10;
    position: relative;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: ${props => props.theme.colors.primary};
  }
`
