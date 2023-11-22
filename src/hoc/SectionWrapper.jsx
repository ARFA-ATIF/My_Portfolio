import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        // variants different states and animations that component can be in and how it behave during different stages (hidden, visible, etc.).
        variants={staggerContainer()}
        //initial state of animation.
        initial="hidden"
        // when the component is in view (visible on the screen).
        whileInView="show"
        // how the animation repsonds to the visible area of the window
        viewport={{ once: true, amount: 0.25 }}
        //mx-auto centers the elements horizontally by setting left and right margin
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* in index.css line 17 */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
