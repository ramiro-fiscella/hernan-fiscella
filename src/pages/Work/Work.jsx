import React from "react";
import { useParams } from "react-router-dom";

const Work = () => {
  const { category } = useParams();

  let content = null;
  if (category === "wedding") {
    content = (
      <div>
        <h2>Contenido de Bodas</h2>
      </div>
    );
  } else if (category === "business") {
    content = (
      <div>
        <h2>Contenido de Negocios</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>HERNAN FISCELLA</h1>
      {content}
    </div>
  );
};

export default Work;
