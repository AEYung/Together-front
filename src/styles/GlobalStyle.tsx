import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}
        body {
          margin: 0;
          padding: 0;
          font-family: 'Noto Sans KR', -apple-system, sans-serif;
        }
        a {
          text-decoration: none;
        }
      `}
    />
  );
}
