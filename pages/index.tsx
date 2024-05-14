import Image from "next/image";
import pikachu from "../public/pikachu.png";
import styles from "../styles/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faFire, faHeart } from "@fortawesome/free-solid-svg-icons";
import runningPikachu from "../public/running_pikachu.gif";
import { useEffect } from "react";

const HomePage = (props: any) => {

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add(
  //             "heading-text-1-active",
  //             "heading-text-2-active",
  //             "header-image-first-active",
  //             "header-image-second-active",
  //             "header-image-third-active",
  //             "header-data-active"
  //           );
  //         } else {
  //         }
  //       });
  //     },
  //     { threshold: 0.5, root: null }
  //   );
  //   const hiddenElements = document.querySelectorAll(
  //     ".heading-text-1, .heading-text-2, .header-image-first, .header-image-second, .header-image-third, .header-data"
  //   );
  //   hiddenElements.forEach((el) => observer.observe(el));
  // }, []);

  return (
    <div className="flex flex-col">
      {/* first section  */}
      <div className="flex flex-col gap-y-5 md:flex-row w-full mt-24 relative">
        <svg className="absolute bottom-0 w-full" stroke="grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path fill="#fff" fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,85.3C384,64,480,96,576,133.3C672,171,768,213,864,240C960,267,1056,277,1152,234.7C1248,192,1344,96,1392,48L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        <div className="w-full md:w-1/2 flex flex-row justify-center relative py-0 md:py-40">
          <div className={`${styles.pokemonBall} absolute top-10 left-10 md:top-1/4 md:left-1/3 shadow-sm shadow-black`}></div>
          <div className={`${styles.pokemonBall} absolute top-1/4 right-20 md:top-1/3 md:right-1/4  shadow-sm shadow-black`}></div>
          <div className={`${styles.pokemonBall} absolute bottom-1/4 right-1/4 md:right-1/3  shadow-sm shadow-black`}></div>
          <Image src={pikachu} alt="Pikachu" height={500} width={300}></Image>
        </div>

        <div className="py-10 pb-40 md:pb-0 w-full md:w-1/2 bg-red-600 flex flex-col items-start justify-center px-8 text-white gap-y-8">
          <p className={`font-mono font-bold text-2xl tracking-widest`}> BECOME A POKEMON MASTER!</p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero placeat possimus ullam aliquam natus, mollitia iusto corporis dicta necessitatibus error, qui doloribus minus, impedit quod saepe voluptates enim amet quam!</p>
          <button className="tracking-wide bg-white text-red-600 px-4 py-2 rounded-sm text-sm font-semibold">Learn More</button>
        </div>
      </div>

      {/* second section */}
      <div className="flex flex-col items-center w-full px-6 lg:px-80">
        <p className="font-semibold font-mono tracking-wider mb-10"> THE QUALITIES OF A POKEMON MASTER</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5">
          <div className="flex flex-col items-center gap-y-3">
            <FontAwesomeIcon className="text-red-600 text-5xl" icon={faHeart}></FontAwesomeIcon>
            <p className="text-lg text-red-600"> Heart </p>
            <p className="text-sm text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolore suscipit? Sequi, iure dolor in incidunt fugit ab magnam et.</p>
          </div>
          <div className="flex flex-col items-center gap-y-3">
            <FontAwesomeIcon className="text-red-600 text-5xl" icon={faFire}></FontAwesomeIcon>
            <p className="text-lg text-red-600"> Drive </p>
            <p className="text-sm text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolore suscipit? Sequi, iure dolor in incidunt fugit ab magnam et.</p>
          </div>
          <div className="flex flex-col items-center gap-y-3">
            <FontAwesomeIcon className="text-red-600 text-5xl" icon={faBook}></FontAwesomeIcon>
            <p className="text-lg text-red-600"> Humility </p>
            <p className="text-sm text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolore suscipit? Sequi, iure dolor in incidunt fugit ab magnam et.</p>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="flex flex-col md:flex-row gap-x-5 gap-y-6 px-6 md:px-32 mt-32">
        <div className="flex flex-col w-full md:w-1/2 items-start justify-center gap-y-5">
          <p className="font-semibold tracking-wider font-mono"> There are at least 150 of them!</p>
          <p className="text-sm "> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, architecto consequuntur nostrum tempora esse ipsa provident sapiente fuga. Ratione nemo earum neque laudantium quos corrupti aliquam nesciunt sit delectus voluptatibus!</p>
          <button className="bg-red-600 text-white px-4 py-3 rounded-sm text-sm font-semibold shadow-sm shadow-slate-100"> View Resources </button>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center relative pb-10">
          {/* <div className="relative"> */}
          <Image src={runningPikachu} alt="running-pikachu" height={150} width={300}></Image>
          <div style={{
            left: "45%"
          }} className={`${styles.spinningPokemonBall} absolute -bottom-9 -z-10 shadow-sm shadow-black scale-150`}>
          </div>
          {/* </div> */}
        </div>
      </div>

      {/* fourth section */}
      <div className="flex flex-col w-full items-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="red" fill-opacity="1" d="M0,32L80,58.7C160,85,320,139,480,160C640,181,800,171,960,144C1120,117,1280,75,1360,53.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <div style={{
          backgroundColor: "red",
        }} className="flex flex-col justify-start items-center w-full gap-y-5 px-6 md:px-44 lg:px-96 pb-16">
          <p className="text-center tracking-wider font-semibold font-mono"> GOTTA CATCH EM ALL! </p>
          <p className="text-sm text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis tempore quae fugit quasi! Facere vel magni eaque aliquid. Aperiam, incidunt? Iusto earum maiores distinctio sint, cum debitis aperiam adipisci esse?</p>
          <button className="bg-white text-red-600 px-4 py-3 rounded-sm text-sm font-semibold shadow-sm shadow-slate-100"> Become a Pokemon Master! </button>
        </div>
      </div>


    </div>
  );
};

export default HomePage;
