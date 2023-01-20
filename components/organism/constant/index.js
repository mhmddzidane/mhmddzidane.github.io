import {
  boot,
  ci,
  express,
  js,
  mongo,
  mySql,
  next,
  react,
  redux,
  tailwind,
  vue,
} from "../../../public/icon";
import {
  book,
  bookshelf,
  dans,
  dansSoc,
  disney,
  hidden,
  kulineran,
  marvel,
  movielist,
  portal,
  prayer,
  trvl,
  warteg,
} from "../../../public/images/homePage";

export const projects = {
  all: [
    {
      name: `TRVL`,
      photo: trvl,
      desc: `This project is static react landing page, this project was made the first time I learned react js`,
      github: `https://github.com/mhmddzidane/TRVL-React`,
      tech: [react],
      category: `react`,
      id: 1,
    },
    {
      name: `DaneBooking`,
      photo: book,
      desc: `This is a fullstack website that i built after learning mern stack from LamaDev, you can book your hotel room and choose which date you want to book`,
      github: `https://github.com/mhmddzidane/DaneBook`,
      tech: [react, express, mongo],
      category: `mern`,
      id: 2,
    },
    {
      name: `Movie List`,
      photo: movielist,
      desc: `This project was made using movie api`,
      github: `https://github.com/mhmddzidane/Movie-List`,
      tech: [js],
      category: `html`,
      id: 3,
    },
    {
      name: `Bookshelf App`,
      photo: bookshelf,
      desc: `Submission belajar fundamental web Dicoding`,
      github: `https://github.com/mhmddzidane/ToReadBookApps`,
      tech: [js],
      category: "html",
      id: 4,
    },
    {
      name: `Prayer Times`,
      photo: prayer,
      desc: `Prayer Times based on user location, using api from https://aladhan.com/prayer-times-api`,
      github: `https://github.com/mhmddzidane/Prayer-Times`,
      tech: [js],
      category: "html",
      id: 5,
    },
    {
      name: `Portal Beritaku`,
      photo: portal,
      desc: `Website Portal Berita dengan ReactJS diambil dari API https://newsapi.org/`,
      github: `https://github.com/mhmddzidane/PortalBeritaku`,
      tech: [react],
      category: "react",
      id: 6,
    },
    {
      name: `Warteg 4.0`,
      photo: warteg,
      desc: `Exercise project built with React js and Jsonplaceholder fake api`,
      github: `https://github.com/mhmddzidane/Warteg-4.0`,
      tech: [react, boot],
      category: "react",
      id: 7,
    },
    {
      name: `DANS`,
      photo: dans,
      desc: `Projek latihan fullstack web online store`,
      github: `https://github.com/mhmddzidane/dans-fashion-store`,
      demo: `https://dans-fashion-store.vercel.app/`,
      tech: [react, express, mongo, redux],
      category: "mern",
      id: 8,
    },
    {
      name: `Disney+ Clone`,
      photo: disney,
      desc: `Projek latihan cloning web disney+ dengan api https://www.themoviedb.org/`,
      github: `https://github.com/mhmddzidane/DisneyPlusClone`,
      demo: `https://disney-plus-clone-eight-rosy.vercel.app/`,
      tech: [next, tailwind],
      category: "react",
      id: 9,
    },
    {
      name: `MARVEL WIKI`,
      photo: marvel,
      desc: `Website to find information about marvel universe (in development)`,
      github: `https://github.com/mhmddzidane/marvel-wiki`,
      demo: `https://marvel-wiki-lyart.vercel.app/`,
      tech: [next, tailwind],
      category: "react",
      id: 10,
    },
    {
      name: `Dans Social`,
      photo: dansSoc,
      desc: `Fullstack social media website, you can post,comment,and like and also follow your friends. (in development)`,
      github: `https://github.com/mhmddzidane/Dans-Social`,
      tech: [react, express, mySql],
      category: "mern",
      id: 11,
    },
    {
      name: `Hidden Gem`,
      photo: hidden,
      desc: `Project Matakuliah pemrogman smartweb, top 10 finalist pameran hasil karya mahasiswa fakultas ilmu komputer`,
      github: `https://github.com/mhmddzidane/HiddenGem`,
      demo: `https://gemshidden.000webhostapp.com/`,
      tech: [ci, mySql, boot],
      category: "php",
      id: 12,
    },
    {
      name: `Kulineran`,
      photo: kulineran,
      desc: `Vuejs and Vuex learning projects, users can see food, search for food, and put food in baskets, and complete orders. Built using the fake Jsonplaceholder api`,
      github: `https://github.com/mhmddzidane/kulineran`,
      tech: [vue, boot],
      category: "vue",
      id: 13,
    },
  ],
};
