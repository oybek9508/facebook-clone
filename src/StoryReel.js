import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://bit.ly/2ItY9mZ"
        profileSrc="https://bit.ly/3dsRXab"
        title="Sangha"
      />
      <Story
        image="https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg"
        profileSrc="https://bit.ly/3dsRXab"
        title="Jasur"
      />
      <Story
        image="https://bit.ly/3j1p6v0"
        profileSrc="https://bit.ly/3dsRXab"
        title="Elyor"
      />
      <Story
        image="https://bit.ly/3dr343H"
        profileSrc="https://bit.ly/3dsRXab"
        title="Ertugrul"
      />
      <Story
        image="https://www.sciencenewsforstudents.org/wp-content/uploads/2020/04/1030_LL_trees-1028x579.png"
        profileSrc="https://bit.ly/3dsRXab"
        title="Oybek"
      />
    </div>
  );
}

export default StoryReel;
