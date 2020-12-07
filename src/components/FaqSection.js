// Import Components
import Toggle from "./Toggle";

// Import Styles
import styled from "styled-components";
import { Container } from "../styles";

// Import Animation
import { AnimateSharedLayout } from "framer-motion";
import { fade } from "../animation";
import { useScroll } from "./useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <FAQ variants={fade} animate={controls} initial="hidden" ref={element}>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title={"How do I Start?"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              velit!
            </p>
          </div>
        </Toggle>
        <Toggle title={"Daily Schedule"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              velit!
            </p>
          </div>
        </Toggle>
        <Toggle title={"Different Payment Methods"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              velit!
            </p>
          </div>
        </Toggle>
        <Toggle title={"What Products do you offer?"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              velit!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FAQ>
  );
};

// Styled Components;
const FAQ = styled(Container)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
