import React from 'react';

const NewPost = () => (
  <div>
    <form action="" method="post">
      <p>
        <b>Insert your post:</b>
      </p>
      <p>
        <textarea rows="10" cols="45" name="text" />
      </p>
      <p>
        <input type="submit" value="Send" />
      </p>
    </form>
  </div>
);

export default NewPost;
