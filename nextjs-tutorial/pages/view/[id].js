import { useRouter } from "next/router";
import Item from "../../src/component/Item";
import { useState, useEffect } from "react";
import Axios from "axios";
import Head from "next/head";

const Post = ({ item }) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

// context 는 params, 요청, 응답, 쿼리 등을 담아서 가져온다.
export async function getServerSideProps(context) {
  // url 의 prams 의 id
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}
