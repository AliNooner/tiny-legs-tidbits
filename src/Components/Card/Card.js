import React from "react";
import "./Card.css";
const Card = ({ prompt, facts }) => {
  return (
    <div className="card">
      <div className="entry">
        <h3 className="prompt">Tell me, Tim: {prompt}</h3>
        <h3 className="facts">Tim has reported: {facts}</h3>
        {console.log(prompt, "pr")}
        {console.log(facts, "fc")}
      </div>
    </div>
  );
};

export default Card;
