import React from "react";
import classes from './Post.module.css';

 const Post=(props)=> {
 return (
      <div className={classes.post}>
          <div className={classes.post__user}>
            <img className={classes.post__avatar} src='https://yt3.ggpht.com/a/AATXAJwS6Vr-jVeRm2qg29TcfkgiwJtWZOJfXEPQBdtNkw=s900-c-k-c0x00ffffff-no-rj' alt="" />
            <div>Login</div>
            </div>
          <div className={classes.post__text}>
              {props.title}
              {props.body}
              {props.users}
              {props.users}
          </div>
      </div>
      )
  }

  export default Post