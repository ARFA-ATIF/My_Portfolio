// The index.js file is exporting all the components and canvas elements
//  from the folder, making it easy to import them as a group when needed. It simplifies the
//  process of managing and using these components in other parts of your application.
import {
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
} from "./canvas";
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Tech from "./Tech";
import Works from "./Works";
import Contact from "./Contact";

export {
  Hero,
  Navbar,
  About,
  Tech,
  Works,
  Contact,
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
};
