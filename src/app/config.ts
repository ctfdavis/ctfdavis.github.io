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
    description:
      "I'm a curious programmer with a passion for solving problems through logical thinking. When I'm not programming, I spend my time playing the guitar, delving into good books, or embracing tranquillity through meditation and running.",
    githubProfile,
    email: "davis@lambdadragon.dev",
  },
};

export default config;