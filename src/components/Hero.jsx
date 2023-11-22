// "framer-motion" library used to create animations and adding motion effects to components
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[110px]  max-w-7xl mx-auto ${styles.paddingX} 
        flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[white]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroMainHeadText} text-white`}>
            Hi, I'm <span className="text-[gray]">Arfa</span>
          </h1>
          <p className={`${styles.heroNormalText} mt-2 text-white-100`}>
            I am a Web developer <br className="sm:block hidden" />I make the
            complex simple.
          </p>
        </div>
      </div>

      <br />
      <br />
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
