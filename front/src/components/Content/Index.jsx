import React from "react";
import classes from './Content.module.css';
import Post from "./Post/Index";
import Search from "./SearchForm/Index";

 const Content=(props)=> {
  
let postItem = props.postData.map(item=> <Post id = {item.id} title ={item.title} body={item.body} users={item.users} tags={item.tags} image={item.image} />)
 
return (
    <main className={classes.content}>
      <Search />
      {postItem}
    </main>)
  }

  export default Content