import React from "react";
import { connect, Global, css, styled, Head } from "frontity";

import List from "../components/List";
import Post from "./Post";
import Header from "../components/Header"
import { Main } from "../components/Main"

const Root = ({ state, actions }) => {
    const data = state.source.get(state.router.link);

  return (
    <>
        <Head>
        <title>WordCamp Sevilla 2019</title>
        <meta name="description" content="El tema de React de la primera WC para devs!" />
      </Head>
      <Global
        styles={css`
          html {
            font-family: sans-serif;
          }
        `}
      />
    <Header isPostType={data.isPostType} />
      <hr />
      <p>You're in {state.router.link}</p>
      <Main>
        {data.isArchive && <List />}
        {data.isPost && <Post />}
        {data.isPage && <Post />}
      </Main>
    </>
  );
};

export default connect(Root);