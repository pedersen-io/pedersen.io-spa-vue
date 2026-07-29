export type NavigationItem = {
  label: string;
  url: string;
  icon: string;
  internal: boolean;
};

export const navigationItems: NavigationItem[] = [
  { label: "Home", url: "/", icon: "home", internal: true },
  { label: "About", url: "/about", icon: "about", internal: true },
  { label: "Family", url: "/family", icon: "family", internal: true },
  { label: "Thoughts", url: "/thoughts", icon: "thoughts", internal: true },
  {
    label: "Celebrity Skateboards",
    url: "https://celebrityskateboards.com",
    icon: "skateboard",
    internal: false,
  },
  {
    label: "Projects",
    url: "https://derekpedersen.github.io/#projects",
    icon: "hammer",
    internal: false,
  },
  {
    label: "Github",
    url: "https://github.com/derekpedersen",
    icon: "github-box",
    internal: false,
  },
  {
    label: "Jenkins",
    url: "https://jenkins.pedersen.io",
    icon: "jenkins",
    internal: false,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/derek-pedersen-67105415/",
    icon: "linkedin-box",
    internal: false,
  },
  {
    label: "Resume",
    url: "https://derek.pedersen.io/api/resume/download",
    icon: "file-pdf-box",
    internal: false,
  },
  {
    label: "Docker",
    url: "https://hub.docker.com/u/derekpedersen",
    icon: "docker",
    internal: false,
  },
  {
    label: "StackOverflow",
    url: "https://stackoverflow.com/users/1304353/derek-pedersen",
    icon: "stackoverflow",
    internal: false,
  },
];
