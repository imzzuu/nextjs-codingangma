import { Html, Head, Main, NextScript } from "next/document";

// 서버에서만 랜더링되고, onClick 같은 이벤트 핸들러는 작동하지 않는다.
// html 이나, head, body 등에 변경을 해주고 싶을 때 사용?
export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
