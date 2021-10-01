import React from "react";
import classes from './Content.module.css';
import Post from "./Post/Index";
import Search from "./SearchForm/Index";

 const Content=(props)=> {
  
return (
    <main className={classes.content}>
      <Search />
      <Post />
    </main>)
  }

  export default Content