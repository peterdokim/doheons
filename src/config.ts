export const SITE = {
  website: "https://doheons.vercel.app/", // replace this with your deployed domain
  author: "Doheon Kim",
  profile: "https://github.com/peterdokim",
  desc: "A personal blog about software development, web technologies, and my learning journey.",
  title: "Doheon Kim",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "America/New_York",
} as const;
