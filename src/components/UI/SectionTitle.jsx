import styled from 'styled-components';

const Wrap = styled.div`
  text-align: ${(props) => (props.$left ? 'left' : 'center')};
  margin-bottom: 48px;
`;
const Pill = styled.p`
  color: #fff;
  background-color: #22c55e;
  text-align: center;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 50px;
  display: inline-block;
`;
const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 16px;
`;
const Subtitle = styled.p`
  font-size: 20px;
  line-height: 1.5;
  font-weight: normal;
`;

export default function SectionTitle(props) {
  return (
    <Wrap $left={props.left}>
      <Pill>{props.pill}</Pill>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Wrap>
  );
}
