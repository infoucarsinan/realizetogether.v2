import React from "react";
import ProjectDescription from "./ProjectDescription";

export default {
  title: "Component/ProjectDescription",
  component: ProjectDescription,
};

export const ProjectDescriptionProject = (): JSX.Element => (
  <ProjectDescription
    projectIdeaDescriptionTitle="Description"
    projectIdeaDescription="It is as if life goes on as usual, although many things have gone off
  the rails on this road to the unknown. Nothing but the presence of some
  people coming from out of town does not interest us in the first place.
  However, behind this normality, there is a deep veil of secrecy…"
  />
);
