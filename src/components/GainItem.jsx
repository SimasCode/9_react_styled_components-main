import styled from 'styled-components';
import Icon from './UI/Icon';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 56px auto;
  column-gap: 24px;
`;
const IconPlace = styled.div`
  grid-row: span 2;
`;
const Title = styled.h3``;
const Text = styled.p`
  font-weight: 500;
  color: #556987;
`;

export default function GainItem(props) {
  return (
    <Grid>
      <IconPlace>
        <Icon>{props.icon}</Icon>
      </IconPlace>
      <Title>{props.title}</Title>
      <Text>{props.descr}</Text>
    </Grid>
  );
}
