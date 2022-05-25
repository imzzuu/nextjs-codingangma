import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import Axios from "axios";
import ItemList from "../src/component/ItemList";
import { Divider, Header, Dimmer, Loader, Segment } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoadign, setIsLoading] = useState(true);

  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    Axios.get(API_URL).then((res) => {
      setList(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Head>
        <title>HOME | 코딩앙마</title>
        <meta name="description" content="코딩 앙마 홈입니다."></meta>
      </Head>
      {isLoadign && (
        <Segment st>
          <Dimmer active>
            <Loader />
          </Dimmer>
          <Image layout="fill" src="/images/wireframe/short-paragraph.png" />
        </Segment>
      )}

      {!isLoadign && (
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)}></ItemList>
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)}></ItemList>
        </>
      )}
    </div>
  );
}
