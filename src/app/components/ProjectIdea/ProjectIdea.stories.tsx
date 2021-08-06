import React from "react";
import ProjectIdea from "./ProjectIdea";

export default {
  title: "Component/ProjectIdea",
  component: ProjectIdea,
};

export const ProjectIdeaProject = (): JSX.Element => (
  <ProjectIdea
    userImageSrc="./User.jpeg"
    userName="Natalia Pozerir"
    projectIdeaTitle="A thriller where nothing..."
    projectIdeaDescription="It is as if life goes on as usual, although many things have gone off the rails on this road to the unknown. Nothing but the presence of some people coming from out of town does not interest us in the first place. However, behind this normality, there is a deep veil of secrecy…"
  />
);
