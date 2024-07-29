import "./Styles/WorkCardStyles.css";
import React from "react";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {/* {WorkCardData.map((value, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={value.imgurl}
              title={value.title}
              text={value.text}
              view={value.view}
              source={value.source}
            />
          );
        })} */}
        <p style={{ textAlign: "center" }}>Will be posting soon...</p>
      </div>
    </div>
  );
};

export default Work;
