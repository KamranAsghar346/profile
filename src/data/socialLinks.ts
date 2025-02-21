import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faXTwitter,
  faSquareFontAwesome,
} from "@fortawesome/free-brands-svg-icons";
import type { ISocialLinkItem } from "@/types";

const socialLinks: ISocialLinkItem[] = [
  {
    name: "GitHub",
    url: "https://github.com/KamranAsghar346",
    icon: faGithub as IconDefinition,
    text: "My GitHub",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kamranasghar346",
    icon: faSquareFontAwesome as IconDefinition,
    text: "My LinkedIn",
  },
  {
    name: "Email",
    url: "mailto:Kamranasghar346@gmail.com",
    icon: faEnvelope as IconDefinition,
    text: "My Email",
  },


];

export default socialLinks;
