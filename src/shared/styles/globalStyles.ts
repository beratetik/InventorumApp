import { createGlobalStyle } from "styled-components";

import { palette } from '../config/styles'

export const GlobalStyle = createGlobalStyle`
   * {
      box-sizing: border-box;
      font-family: 'Open Sans';

      &::-webkit-scrollbar {
         width: 4px;
   }

      &::-webkit-scrollbar-track {
         border-radius: 4px;
      }
      
      &::-webkit-scrollbar-thumb {
         box-shadow: inset 0 0 6px #E0E0E0;
         border-radius: 4px;
         cursor: pointer;
      }
   }

   html {
      height: 100%;
      width: 100%;
   }

   body {
      height: 100%;
      width: 100%;
      margin: 0;
      background-color: ${palette.background};
      font-family: 'Open Sans';
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }

   #root {
      height: 100%;
   }
`
