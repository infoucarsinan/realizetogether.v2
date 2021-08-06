import React, { ReactSVGElement } from "react";
import { Link } from "react-router-dom";

type NavBarLinkProps = {
  icon: React.SVGProps<ReactSVGElement>;
  link: string;
};

function NavBarLink({ icon, link }: NavBarLinkProps): JSX.Element {
  return <Link to={link}>{icon}</Link>;
}

export default NavBarLink;
