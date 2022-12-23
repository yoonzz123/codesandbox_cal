import React from "react";

const Screen = (props) => {
  return (
    <div className="screen">
      <input type="text" placeholder="스크린" value={props.num} />
    </div>
  );
};

export default Screen;
