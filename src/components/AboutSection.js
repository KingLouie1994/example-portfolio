// Import of images
import home1 from "../img/home1.png";

// Styling
import { motion } from "framer-motion";
import { Container, Description, Image, Hide } from "../styles";

// Import Animation
import { titleAnimation, fade, photoAnimation } from "../animation";

const AboutSection = () => {
  return (
    <Container>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photo- or videography ideas that you have. We have
          professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          src={home1}
          alt="Man with a camera"
          variants={photoAnimation}
        />
      </Image>
    </Container>
  );
};

export default AboutSection;
