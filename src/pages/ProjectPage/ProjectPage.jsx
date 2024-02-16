import React from "react";
import { useParams } from "react-router-dom";
import weddingData from "../../components/FeaturedCard/weddingData.json";
import businessData from "../../components/FeaturedCard/businessData.json";

import style from "./ProjectPage.module.css";
const ProjectPage = () => {
  const { id, category } = useParams(); // Obtener tanto el ID como la categoría

  let projectData;

  if (category === "wedding") {
    projectData = weddingData.find((item) => item.id.toString() === id);
  } else if (category === "business") {
    projectData = businessData.find((item) => item.id.toString() === id);
  }

  if (!projectData) {
    return <div>Project not found</div>;
  }

  return (
    <div className={style.projectContainer}>
      <img
        src={projectData.image}
        alt={projectData.title}
        className={style.projectImg}
      />
      <div className={style.projectTitle}>
        <h2>HERNAN FISCELLA PHOTOGRAPHY</h2>
        <h1>{projectData.title}</h1>
        <p>{projectData.description}</p>
      </div>
      {/* Aquí puedes agregar más lógica para mostrar la galería de imágenes */}
    </div>
  );
};

export default ProjectPage;
