const githubProfile = "https://github.com/ctfdavis";

const config = {
  siteMeta: {
    global: {
      title: "λ/dragon",
      description: "Personal blog of λ/dragon",
    },
    about: {
      title: "About | λ/dragon",
      description: "About the author of λ/dragon",
    },
    writing: {
      title: "Writing | λ/dragon",
      description: "Writing by λ/dragon",
    },
  },
  footerLinks: [
    {
      href: "/writing",
      text: "Writing",
    },
    {
      href: "/about",
      text: "About",
    },
    {
      href: githubProfile,
      text: "GitHub",
      newTab: true,
    },
  ],
  me: {
    name: "Davis Chan",
    githubProfile,
    email: "davis@lambdadragon.dev",
  },
};

export default config;
