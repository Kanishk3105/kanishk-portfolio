import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-[#0a0c14] rounded-[20px]">
      <div
        className={`bg-[#111522] rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`text-[#8ec5ff] ${styles.sectionSubText}`}>
            What others say
          </p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm currently collecting testimonials from mentors, teammates,
          collaborators, and professionals I've worked with. Their feedback
          will be showcased here soon.
        </motion.p>

        <motion.div
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-10"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfThJ1n95RpR4ACEJb99HgQ6Q755YI8IxBexO16Vs78ZuL4XA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#915EFF] hover:bg-[#7c4dff] text-white font-semibold text-lg py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            🟣 Leave a Testimonial
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");