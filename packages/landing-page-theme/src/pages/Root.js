import React from "react";
import { connect, Global, css, Head } from "frontity";
import BebasNeue from '../styles/fonts/BebasNeue-Regular.ttf'

import Post from "./Post";
import List from "../components/List";
import Header from "../components/Header"
import { Main } from "../components/Main"

const Root = ({ state, actions }) => {
    const data = state.source.get(state.router.link);
    //console.log("TITLE", state.headTags.get("/"))
  return (
    <>
      <Head>
        <link href="../styles/fonts/fonts.css" rel="stylesheet" />
      </Head>
      {state.frontity.platform === "server" &&
        <Global
        styles={css`
          html {
            font-family: Bebas Neue;
          }
          @font-face {
            font-family: 'Bebas Neue';
            src: 
            url('${BebasNeue}') format('truetype');
          }
        `}
        supressHydrationWarning
      />}

      
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