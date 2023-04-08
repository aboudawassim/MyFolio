import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { photos } from "../constants";
import { cvs } from "../constants";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const PhotoCard = ({ index, title, image }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={image}
          alt={title}
          className='w-full h-full object-contain rounded-[20px]'
        />
      </div>
    </motion.div>
  </Tilt>
);

const buttonVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.75, delay: 0.5 } },
};

const About = () => {
  const [selectedCv, setSelectedCv] = useState(cvs[0]);

  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `${selectedCv.title}.pdf`;
    link.click();
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Angular, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="flex justify-center items-center h-screen">
        <div className='flex flex-wrap gap-10'>
          {photos.map((photo, index) => (
            <PhotoCard key={photo.title} index={index} {...photo} />
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        {cvs.map((cv) => (
          <button
            key={cv.title}
            className={`py-2 px-4 rounded-full border ${
              selectedCv.title === cv.title
                ? "bg-primary text-white border-primary"
                : "border-gray-300"
            }`}
            onClick={() => {
              setSelectedCv(cv);
              handleDownload(cv.file);
            }}
          >
            Télécharger {cv.title}
          </button>
        ))}
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

