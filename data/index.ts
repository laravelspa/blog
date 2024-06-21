export const navbarData = {
  homeTitle: 'Mahmoud\'s Blog',
}

export const footerData = {
  author: 'Mahmoud Adel',
  aboutAuthor: 'Hi! I am Mahmoud, a Tech enthusiast, problem solver and software engineer. Currently Work as a freelancer.',
  authorInterest: 'I have a fair amount of knowledge of PHP, Laravel, Javascript, VueJs, and Nuxt. If you have an interesting idea, either open source or paid let\'s connect.',
  aboutTheSite: 'This is a personal blog site built with Nuxt3, TailwindCSS, NuxtContent, Nuxt Icon. Currently it\'s deployed in Github.',
}

export const homePage = {
  title: 'Welcome To My Blog Site',
  description: 'Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'Here you will find all the blog posts I have written & published on this site.',
}

export const categoryPage = {
  title: 'Categories',
  description: 'Blow this category is generated from all the tags are mentioned in the different blog post',
}

export const aboutPage = {
  title: 'Mahmoud Adel',
  description: 'Fullstack Develper, Problem Solver, Web Enthusiast.',
  aboutMe: 'Hello, fellow human! I\'m a software wizard who spends most of his day crafting code spells. When I\'m not crafting code, you can find me summoning solutions to problems on online judges. Just don\'t ask me to cast any love spells, my magic only works on machines!',
}

export const seoData = {
  description: 'Mahmoud, Freelancer, with over 4.5+ years experience in software development.',
  ogTitle: 'Mahmoud codes and helps others learn PHP, Laravel, Javascript, Vue, Nuxt, & CSS Tricks',
  twitterDescription: 'My blog website, where I play around with PHP, Laravel, Nuxt, Vue, and more and showcase my blog, resources, etc',
  image: '/mahmoud_adel.jpg',
  mySite: '/mahmoud_adel.jpg',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: '@qdnvubp' },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
