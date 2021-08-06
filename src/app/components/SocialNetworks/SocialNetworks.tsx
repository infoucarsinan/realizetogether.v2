import React from "react";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import styles from "./SocialNetworks.module.css";

function SocialNetworks(): JSX.Element {
  return (
    <div className={styles.container}>
      <FacebookIcon />
      <TwitterIcon />
      <InstagramIcon />
    </div>
  );
}

export default SocialNetworks;
