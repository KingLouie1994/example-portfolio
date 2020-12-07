// Import of images
import home1 from "../img/home1.png";

// Styling
import { motion } from "framer-motion";
import { Container, Description, Image, Hide } from "../styles";

const AboutSection = () => {

  return (
    <Container>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
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
