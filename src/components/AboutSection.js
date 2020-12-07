// Import of images
import home1 from "../img/home1.png";

// Styling
import { motion } from "framer-motion";
import { Container, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  // Animations
  const titleAnim = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 2 },
    },
  };

  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container>
      <Description>
        <motion.div
          className="title"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photo- or videography ideas that you have. We have
          professionals with amazing skills
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="Man with a camera" />
      </Image>
    </Container>
  );
};

export default AboutSection;
