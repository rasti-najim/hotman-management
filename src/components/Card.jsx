import styled from "styled-components";
import { motion } from "framer-motion";
// import { FormattedMessage } from "react-intl";

export default function Card({ title, number }) {
  return (
    <Container
      whileHover={{ scale: 1.1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <IconContainer>
        <TextContainer>
          <h5>
            {/* <FormattedMessage
              id={`app.card.${title.toLocaleLowerCase()}`}
              defaultMessage={title}
            /> */}
            {title}
          </h5>
          <Number>{number}</Number>
          <br />
          <Subtitle>
            {/* <FormattedMessage id="app.card.week" defaultMessage="This Week" /> */}
            This week
          </Subtitle>
        </TextContainer>
      </IconContainer>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column-reverse;
  height: 20vh;
  width: 20vw;
  border-radius: 15px;
  text-align: start;
  margin-right: 20px;
  margin-top: 1.2rem;

  /* border: solid #e6eaff; */
  border: solid;
  border-color: ${({ theme }) => theme.text};
  border-width: 2px;
  /* box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.4); */

  :hover {
    cursor: pointer;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  margin-left: 15px;
`;

const TextContainer = styled.p`
  line-height: 1.2rem;
`;

const Number = styled.span`
  font-size: 1.5rem;
`;

const Subtitle = styled.sub`
  color: grey;
`;
