import styled from 'styled-components';
import SectionTitle from './UI/SectionTitle';
import GainList from './GainList';

const Wrap = styled.section`
  padding-top: 90px;
  padding-bottom: 122px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Img = styled.img``;

export default function GainMore() {
  return (
    <Wrap>
      <SectionTitle
        left
        pill='features'
        title='Gain more insight into how people use your'
        subtitle='With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.'
      />
      <Grid>
        <GainList />
        <Img src='/img/gainMore.jpg' alt='pen and paper' />
      </Grid>
    </Wrap>
  );
}
