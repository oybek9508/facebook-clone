import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessegeSender from "./MessegeSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessegeSender />
      <Post
        // key={id}
        profilePic="https://bit.ly/2SXMUp2"
        message="Wow this works"
        timestamp="this is a timestamp"
        username="Jim"
        image="https://bit.ly/3jZYsUp"
      />

      <Post
        profilePic="https://bit.ly/3nTRgeU"
        message="Wow this works"
        timestamp="this is a timestamp"
        username="Nicky"
      />
      <Post
        profilePic="https://i.ytimg.com/vi/0vsMCkpyob4/maxresdefault.jpg"
        timestamp="this is a timestamp"
        username="Nicole"
      />
    </div>
  );
}

export default Feed;
