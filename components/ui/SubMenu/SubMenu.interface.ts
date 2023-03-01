export interface ISubMenu {
  link: ISubLink;
}

interface ISubLink {
  path: string;
  name: string;
  subLinks: ILink[];
}

interface ILink {
  path: string;
  name: string;
}
