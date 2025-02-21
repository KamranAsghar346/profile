"use client";
import { INavItem } from "@/types";
import {
  faUser,
  faBriefcase,
  faClock,
  faAward,
  faLaptop,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const navMenus: INavItem[] = [
  {
    name: "About",
    link: "/#about",
    icon: faUser as IconProp,
  },
  {
    name: "Services",
    link: "/#services",
    icon: faBriefcase as IconProp,
  },
  {
    name: "Experiences",
    link: "/#experiences",
    icon: faClock as IconProp,
  },
  {
    name: "Skills",
    link: "/#skills",
    icon: faAward as IconProp,
  },
  {
    name: "Projects",
    link: "/#projects",
    icon: faLaptop as IconProp,
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: faEnvelope as IconProp,
  },
];
