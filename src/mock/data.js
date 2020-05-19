import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Gbubemi Makpokpomi',
  lang: 'en',
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Gbubemi',
  subtitle: 'I am the Machine Learning Engineer and Software Developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm a Machine Learning Engineer, Software Developer, and a writer who is passionate about helping people to succeed holistically. I have developed several Mobile Apps with React Native. Created price comparison chatbot with python for comparing prices of technical gadgets. Trained CNN models for image recognition. Developed web applications using React and Django and several other projects that you will get to see in the project section.",
  paragraphTwo:
    "I'm creating a world of impact where everyone influences everyone. In this world, we are constantly thinking, open-minded, and adaptive to changes in our environment. We are dedicated to a lifestyle of endless innovation.",
  paragraphThree:
    'So, let’s build this tribe in our hearts and embrace the growth mindset together.',
  resume: 'https://drive.google.com/open?id=1EV-ytoZ3tWsdl3wt3Abf_hmWQJPhWHoO', // https://www.resumemaker.online/enl
  blog: 'https://gbubemimakpokpomi.wordpress.com/blog/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Event Countdown',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/gbubemi-makpokpomi/',
    },
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/Gbubemi__',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Oritsegbubemi',
    },
    {
      id: uuidv1(),
      name: 'medium',
      url: 'https://medium.com/@gbubemimakpokpomi',
    },
    {
      id: uuidv1(),
      name: 'stack-overflow',
      url: 'https://stackoverflow.com/users/8138025/gbubemi',
    },
    {
      id: uuidv1(),
      name: 'quora',
      url: 'https://www.quora.com/profile/Gbubemi-Makpokpomi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
