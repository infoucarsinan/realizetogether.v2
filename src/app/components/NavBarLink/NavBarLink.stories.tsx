import React from "react";
import HomeIcon from "../Icons/HomeIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import MessageIcon from "../Icons/MessageIcon";
import NetworkIcon from "../Icons/NetworkIcon";
import NavBarLink from "./NavBarLink";
import IdeaIcon from "../Icons/IdeaIcon";

export default {
  title: "Component/NavBarLink",
  component: NavBarLink,
};

export const Home = (): JSX.Element => (
  <NavBarLink icon={<HomeIcon />} link="#" />
);

export const Profile = (): JSX.Element => (
  <NavBarLink icon={<ProfileIcon />} link="#" />
);

export const Message = (): JSX.Element => (
  <NavBarLink icon={<MessageIcon />} link="#" />
);

export const Network = (): JSX.Element => (
  <NavBarLink icon={<NetworkIcon />} link="#" />
);

export const Idea = (): JSX.Element => (
  <NavBarLink icon={<IdeaIcon />} link="#" />
);
