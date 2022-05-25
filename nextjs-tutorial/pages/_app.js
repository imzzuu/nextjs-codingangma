import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/component/Footer";
import Top from "../src/component/Top";

// 페이지 전환시 레이아웃을 유지할 수 있다.
// 페이지 전환 시 상태값을 유지할 수 있다.
// componentDidCatch 를 이용해서 커스텀 에러 핸들링을 할 수 있다.
// 추가적인 데이터를 페이지로 주입시켜줄 수 있다.
// 글로벌 CSS 를 이곳에 선언한다.

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: "1000px", margin: "0 auto" }}>
      <Top></Top>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
