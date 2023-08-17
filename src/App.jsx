import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import GainMore from './components/GainMore';

const MainTitle = styled.h1`
  font-weight: normal;
  text-transform: uppercase;
  color: tomato;
`;

const Wrap = styled.div`
  padding-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
`;

export default function App() {
  return (
    <Wrap>
      <GlobalStyle />
      <MainTitle>Styled components</MainTitle>
      <GainMore />
      {/* <Btn>Learn more</Btn>
      
      <GrayBtn>Read more</GrayBtn>
      <Btn as='a' href='#'>
        Nuoroda kaip button
      </Btn> */}
    </Wrap>
  );
}
