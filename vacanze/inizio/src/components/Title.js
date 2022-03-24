import React from "react";

const Title = ({ text }) => {
  const titleStyle = {
    width : 'fit-content',
    fontVariant : 'sall-caps',
    position : 'relative',
    display:'grid',
    placeItems: 'center',
  }
  return (
    <div style={titleStyle}>
      <h4>{text || "Titolo"}</h4>
      <div className="underline"></div>
    </div>
  );
};

export default Title;
