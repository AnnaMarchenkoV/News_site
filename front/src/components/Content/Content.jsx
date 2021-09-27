import React from "react";
import classes from './Content.module.css';
import Post from "./Post/Post";
import Search from "./Search/Search";

 const Content=()=> {
 return (
    <main className={classes.content}>
      <Search />
      <Post message='New message' />
    </main>)
  }

  export default Content