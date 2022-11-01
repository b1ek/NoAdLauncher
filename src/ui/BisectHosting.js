import React, { memo } from 'react';
import styled from 'styled-components';

const Logo = styled.svg`
  height: ${props => props.size || 40}px;
  -webkit-app-region: no-drag;
  * {
    transition: opacity 0.1s ease-in-out;
    ${props => (props.showPointerCursor ? 'cursor: pointer' : '')}
  }
 ${props =>
   !props.hover
     ? `&:hover {
    * {
      cursor: ${props.showPointerCursor ? 'pointer' : 'auto'};
      opacity: 0.9;
    } `
     : ``}
  }
`;

function BisectHosting({ size, showPointerCursor, onClick, hover }) {
  return <></>;
  return (
    // eslint-disable-next-line
    <Logo
      onClick={onClick}
      viewBox="0 0 241.66 78.82"
      size={size}
      showPointerCursor={showPointerCursor}
      hover={hover}
    >
      <defs>
        <style>
          {
            '.prefix__cls-1{fill:#fff}.prefix__cls-2{fill:#0d1129}.prefix__cls-3{fill:#03ddff}'
          }
        </style>
      </defs>
      <g id="prefix__Layer_2" data-name="Layer 2">
        <g id="prefix__Layer_1-2" data-name="Layer 1">
          <path
            className="prefix__cls-1"
            d="M83.6 42.17h21.89a15.46 15.46 0 002.78-.23 9 9 0 002.17-.9 4.1 4.1 0 001.35-1.8 7 7 0 00.53-3 6 6 0 00-1-3.82 4.23 4.23 0 00-3.15-1.5v-.07a10.47 10.47 0 001.43-.6 2.68 2.68 0 001-.83 3.62 3.62 0 00.68-1.42 10.23 10.23 0 00.22-2.33c0-2.1-.6-3.67-1.95-4.57s-3.37-1.28-6.15-1.28H83.6zm6.9-8.85h12.29a4.22 4.22 0 011.88.37 1.77 1.77 0 01.6 1.5 1.33 1.33 0 01-.68 1.28 3.61 3.61 0 01-1.8.37H90.5zm0-8.17h12.14a2.22 2.22 0 011.5.45 2 2 0 010 2.7 2.78 2.78 0 01-1.5.37H90.5zM115.62 19.82h6.82v22.34h-6.82zM125.81 36.39a6.84 6.84 0 00.53 3 3.71 3.71 0 001.5 1.88 10 10 0 002.62.9 30.3 30.3 0 004.13.3h8.32a53.27 53.27 0 005.7-.3 8.66 8.66 0 003.3-1 4.2 4.2 0 001.65-2.1 11.85 11.85 0 00.45-3.67 11 11 0 00-.53-3.9 4.35 4.35 0 00-1.95-2.1 11 11 0 00-3.82-.9c-1.58-.15-3.9-.22-6.83-.22-1.94 0-3.44-.08-4.49-.08a13 13 0 01-2.4-.3 1.5 1.5 0 01-1.05-.52 2.3 2.3 0 01-.23-1.13 1.48 1.48 0 01.68-1.27 3.55 3.55 0 011.94-.45h7.58c1.5 0 2.4.15 2.77.52a2.22 2.22 0 01.6 1.8h6.83v-.65a10.55 10.55 0 00-.3-2.85 4 4 0 00-1.13-2 5.71 5.71 0 00-2.62-1.27 18.27 18.27 0 00-4.58-.53h-9.59a22 22 0 00-5 .53 6.49 6.49 0 00-2.7 1.5 4.12 4.12 0 00-1.12 2.1 17.64 17.64 0 00-.23 3.07 14.19 14.19 0 00.38 3.53 4 4 0 001.57 2 9.53 9.53 0 003.38 1 44.09 44.09 0 006.22.3c2.48 0 4.27 0 5.47.07a11.66 11.66 0 012.63.23c.67.15 1 .3 1.2.6a1.78 1.78 0 01.3 1.2 1.46 1.46 0 01-.75 1.5 5.33 5.33 0 01-2.18.38h-8.4a4.34 4.34 0 01-2.32-.45 3.17 3.17 0 01-.67-2.11h-6.83zM184.67 34.37a10.18 10.18 0 00.68 4 5.85 5.85 0 002 2.48 8.39 8.39 0 003 1.27 22.7 22.7 0 004.27.38h11a15.88 15.88 0 004.2-.53 6.81 6.81 0 002.55-1.42 4.52 4.52 0 001.2-2.1 10 10 0 00.37-2.7v-2.1H207a5.16 5.16 0 01-.23 1.65 1.3 1.3 0 01-.6.9 2.6 2.6 0 01-1.2.45c-.45 0-1.12.07-2 .07h-7.27c-1.58 0-2.63-.3-3.15-1a5.73 5.73 0 01-.83-3.52v-2.41a5.34 5.34 0 01.9-3.37c.6-.75 1.72-1.12 3.45-1.12h7.42a5.4 5.4 0 012.48.45 1.77 1.77 0 01.75 1.65v.6h6.89a20.25 20.25 0 00-.37-4.13 5.29 5.29 0 00-1.57-2.55 7.54 7.54 0 00-3.3-1.35 29 29 0 00-5.78-.45h-8a22.7 22.7 0 00-4.27.38 7.18 7.18 0 00-3 1.27 5.85 5.85 0 00-2 2.48 10.21 10.21 0 00-.68 4zM215.49 25.37h9.67v16.8h6.9v-16.8h9.6v-5.55h-26.17v5.55zM83.59 59.18V48h2.69v4.29h6.94V48h2.71v11.2h-2.71v-4.7h-6.94v4.68zM123.88 55.35a6.88 6.88 0 01-.2 1.8 2.46 2.46 0 01-.66 1.16 2.72 2.72 0 01-1.24.66 7.81 7.81 0 01-2 .21h-4.94A7.46 7.46 0 01113 59a3.05 3.05 0 01-1.29-.68 2.67 2.67 0 01-.72-1.18 5.89 5.89 0 01-.23-1.75V52a6.8 6.8 0 01.23-1.92 2.54 2.54 0 01.7-1.21 2.69 2.69 0 011.26-.64 8.24 8.24 0 012-.2h4.94a6.46 6.46 0 012.33.35 2.36 2.36 0 011.31 1.21 5.62 5.62 0 01.43 2.41zm-10.47-.27a2.86 2.86 0 00.19 1.14 1 1 0 00.63.57 3.91 3.91 0 001.28.16h3.57a4 4 0 001.32-.16 1 1 0 00.62-.55 3.2 3.2 0 00.17-1.18v-2.85A2.9 2.9 0 00121 51a1.11 1.11 0 00-.65-.59 4 4 0 00-1.3-.16h-3.47a3.77 3.77 0 00-1.31.17 1.1 1.1 0 00-.64.59 3.57 3.57 0 00-.2 1.25zM144.4 48a6.16 6.16 0 012.2.34 2.39 2.39 0 011.24 1 3.5 3.5 0 01.4 1.78h-2.69a1.16 1.16 0 00-.31-.8 1.69 1.69 0 00-1.07-.24h-4.52c-.87 0-1.3.38-1.3 1.16a1.07 1.07 0 00.32.92 1.73 1.73 0 001 .22h4.91a11.14 11.14 0 011.72.11 2.6 2.6 0 011.12.43 2 2 0 01.7 1 5.93 5.93 0 01.23 1.82 4.18 4.18 0 01-.39 1.94 2.35 2.35 0 01-1.23 1.11 5.52 5.52 0 01-2.17.36h-5.43a6.19 6.19 0 01-2.25-.34 2.2 2.2 0 01-1.19-1 4 4 0 01-.35-1.8h2.75a.94.94 0 00.39.74 1.45 1.45 0 00.94.32h4.51a2.39 2.39 0 001.32-.29 1.08 1.08 0 00.43-1 1.68 1.68 0 00-.14-.72 1 1 0 00-.55-.42 3.49 3.49 0 00-1.14-.15h-4a12 12 0 01-2-.14 3 3 0 01-1.26-.49 2.07 2.07 0 01-.71-1 5.49 5.49 0 01-.22-1.72 4.22 4.22 0 01.23-1.46 2.25 2.25 0 01.73-1 3.35 3.35 0 011.28-.55 8.7 8.7 0 011.92-.18zM160 48h12.15v2.23h-4.75v9h-2.69v-9H160zM188.43 59.18h-2.69V48h2.69zM201.19 59.18V48h4.52l6.86 9h.37v-9h2.69v11.2H211l-6.77-9h-.37v9zM238.85 51.44a1.18 1.18 0 00-.45-1 2.86 2.86 0 00-1.59-.32h-4a2.25 2.25 0 00-1.68.51 2.7 2.7 0 00-.49 1.78v2.7a3.33 3.33 0 00.19 1.2 1.08 1.08 0 00.63.59 4.22 4.22 0 001.35.17h4a5.9 5.9 0 001.26-.1 1.18 1.18 0 00.67-.33A1.09 1.09 0 00239 56v-1.37h-4.45v-2h7.14v3a4.59 4.59 0 01-.42 2.11 2.36 2.36 0 01-1.3 1.12 6.66 6.66 0 01-2.37.35h-5.45a5.91 5.91 0 01-2.31-.4 2.74 2.74 0 01-1.37-1.25 4.49 4.49 0 01-.46-2.18v-3.31a5.76 5.76 0 01.44-2.39 2.54 2.54 0 011.32-1.28 5.87 5.87 0 012.38-.4h5.4a9.54 9.54 0 011.84.15 3.16 3.16 0 011.25.53 2.23 2.23 0 01.77 1 4.68 4.68 0 01.26 1.72zM157.01 19.82h24.52v4.72h-24.52zM157.01 37.45h24.52v4.72h-24.52zM157.01 28.6h24.52v4.8h-24.52z"
          />
          <path
            className="prefix__cls-2"
            d="M176.72 20.95h2.4v2.47h-2.4zM176.72 29.79h2.4v2.4h-2.4zM176.72 38.64h2.4v2.4h-2.4zM35.72 78.32a4.73 4.73 0 01-2.2-.56L3 62a4.6 4.6 0 01-2.5-4.18V21.53A4.6 4.6 0 013 17.37L33.46 1.05A4.77 4.77 0 0135.65.5a4.83 4.83 0 012.22.55l31.62 16.38A4.54 4.54 0 0172 21.59v36.17A4.64 4.64 0 0169.43 62L37.81 77.82a4.82 4.82 0 01-2.09.5z"
          />
          <path
            className="prefix__cls-3"
            d="M51.63 20.51l7.2-3.06.18.12v15.06l-7.38-.48V20.51zM51.63 59.74l7.2 2.16.18-.54V44.74l-7.38.54v14.46z"
          />
          <path
            className="prefix__cls-3"
            d="M30.33 68.74l1.56-2.34.66.6-1.62 2.34zm1.86-2l-.3-.29a.4.4 0 01.6-.06c.18.12.18.42.06.66zm-.36 0l.6-28.24h.84l-.66 28.24zm1-28.24h-.42a.42.42 0 11.84 0zm-.42 0l-.7-29.39h.84l.72 29.34zm-.3-29.34h-.42a.46.46 0 01.42-.48.43.43 0 01.42.48zm-.3-.36a5.11 5.11 0 013.24-1.62l.06 1a4.15 4.15 0 00-2.7 1.32zm3.24-1.62a7.43 7.43 0 014 .72l-.3.84a7.15 7.15 0 00-3.6-.6zm4 .72l3.54 1.68-.3.9-3.56-1.79zm3.54 1.68L51.81 14l-.36.9-9.18-4.44zm9.06 4.86l.18-.42a.47.47 0 01.18.6.43.43 0 01-.54.3zm.42 0V32.2h-.84V14.39zm-.44 17.76h.42a.42.42 0 11-.84 0zm0-.48l7.31.48v1l-7.31-.49zm7.31 1v-.52a.46.46 0 01.43.48.48.48 0 01-.43.49zm-.41 0V17.87h.84v14.81zm.41-14.81h-.41a.42.42 0 11.84 0zm.18-.42l8 3.9-.3.9-8.09-4zM67 21.83l.18-.48a.67.67 0 01.24.66c-.12.24-.36.36-.54.24zm.42 0V57.7h-.84V21.83zM67 57.7h.42a.42.42 0 11-.84 0zm.3.36l-.6-.72zm-.3-.36l.3.36a.4.4 0 01-.6 0 .76.76 0 010-.72zm.18.42l-8.1 3.66-.29-.84 8.09-3.66zm-8.22 3.24l.12.42a.32.32 0 01-.47-.24.45.45 0 01.18-.6zm-.41 0V44.68h.84v16.68zm.41-16.68h-.41a.42.42 0 11.84 0zm0 .48l-7.31.54v-1l7.31-.54zm-7.31.06v.48a.48.48 0 010-1zm.42 0v19.44h-.84V45.22zm-.42 19.44h.42a.42.42 0 11-.84 0zm.18.42L39 71l-.3-.83 12.72-5.94zM38.91 70.6l.09.4c-.18.12-.42 0-.54-.24a.52.52 0 01.24-.59zm.09.4a7.4 7.4 0 01-4.62.49l.12-1a6.9 6.9 0 004.2-.35zm-4.62.49a7.23 7.23 0 01-4.08-2.1l.6-.73a6.19 6.19 0 003.6 1.86zM30.63 69l-.3.36a.56.56 0 010-.73.42.42 0 01.6 0z"
          />
          <path
            className="prefix__cls-3"
            d="M6.1 57l21.77 11.67c6.54 3.48 13.32 4.68 13.32-5V48.64a11.07 11.07 0 00-1.74-6.12 8.68 8.68 0 00-3.36-3.12 9.16 9.16 0 003.36-3.12 10.55 10.55 0 001.68-6.11V15.71c0-9.6-6.06-9.42-11.76-6.48L6.1 21.35z"
          />
          <path
            className="prefix__cls-3"
            d="M6.28 56.62L28.05 68.2l-.3.9L5.92 57.46zM28.05 68.2c2.76 1.5 5.52 2.52 7.8 2.52v1c-2.4 0-5.28-1.08-8.1-2.58zm7.8 2.52a4.36 4.36 0 002.34-.54l.36.9a5.76 5.76 0 01-2.7.6zm2.34-.54a4.17 4.17 0 001.68-1.68l.72.48a5.36 5.36 0 01-2 2.1zm1.68-1.68a10.35 10.35 0 00.9-4.8h.84a11.28 11.28 0 01-1 5.28zm.9-4.8V48.64h.84V63.7zm0-15.06a10.6 10.6 0 00-.42-3.12l.78-.3a12.73 12.73 0 01.48 3.42zm-.42-3.12a11.49 11.49 0 00-1.26-2.76l.66-.54a10.52 10.52 0 011.38 3zm-1.26-2.76A8.24 8.24 0 0037.65 41l.48-.72a10.16 10.16 0 011.62 1.92zM37.65 41a8.59 8.59 0 00-1.74-1.2l.3-.89a6.08 6.08 0 011.92 1.37zm-1.56-1.6l-.18.42a.67.67 0 01-.24-.66.44.44 0 01.54-.23zm-.18-.47a6.75 6.75 0 001.74-1.21l.48.78a7 7 0 01-1.92 1.32zm2-.79l-.24-.42a.42.42 0 01.6.12.56.56 0 01-.12.66zm-.24-.42A6.91 6.91 0 0039.09 36l.66.6a10.41 10.41 0 01-1.62 1.91zM39.09 36a11.08 11.08 0 001.26-2.7l.78.3a11.47 11.47 0 01-1.38 3zm1.26-2.7a13.12 13.12 0 00.42-3.12h.78a12.72 12.72 0 01-.42 3.42zm.42-3.12l-.06-14.46h.84v14.45zm-.06-14.46a12.19 12.19 0 00-1-5.28l.66-.48a12.37 12.37 0 011.14 5.76zm-1-5.28A4.67 4.67 0 0038 8.51l.36-.84A5.21 5.21 0 0140.41 10zM38 8.51a5.21 5.21 0 00-2.52-.6V7a6 6 0 012.88.66zm-2.52-.6a13.65 13.65 0 00-5.88 1.74l-.36-.84A14.38 14.38 0 0135.43 7zm-5.93 1.74L6.28 21.83l-.36-.9L29.19 8.81zM6.1 21.35l.18.48c-.24.06-.48 0-.54-.24a.55.55 0 01.18-.66zm.42 0V57h-.84V21.35zM6.1 57h.42a.46.46 0 01-.42.48.46.46 0 01-.42-.48z"
          />
          <path
            className="prefix__cls-2"
            d="M30.57 24.23c0-.84-.48-1.14-1.38-.9l-18.35 5v7l18.53-2.1a1.33 1.33 0 001.2-1.5v-7.5z"
          />
          <path
            className="prefix__cls-3"
            d="M11.74 29.81l17.57-4.2v5.16l-17.57 2.7v-3.66z"
          />
          <path
            className="prefix__cls-2"
            d="M25.65 27.83l2.04-.36v2.04l-2.04.36v-2.04zM13.96 30.59l8.63-1.86v1.5l-1.31.23-7.32 1.45v-1.32zM30.57 54.64c0 .9-.48 1.2-1.38 1L10.84 51.1v-7l18.53 1.56c.78.06 1.2.54 1.2 1.44v7.56z"
          />
          <path
            className="prefix__cls-3"
            d="M11.74 49.66l17.57 3.6v-5.1L11.74 46v3.66z"
          />
          <path
            className="prefix__cls-2"
            d="M25.65 51.16l2.04.36v-2.1l-2.04-.24v1.98zM13.96 48.82l8.63 1.56v-1.5l-1.31-.24-7.32-1.14v1.32z"
          />
        </g>
      </g>
    </Logo>
  );
}

export default memo(BisectHosting);
