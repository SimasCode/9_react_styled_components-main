// sukurti ir exportuoti button
import styled from 'styled-components';

// props varijantas
// const Btn = styled.button`
//   font-size: 18px;
//   background-color: ${(props) => (props.secondary ? '#d5dae1' : '#22c55e')};
//   color: ${(props) => (props.secondary ? '#333f51' : 'white')};
//   padding: 16px 28px;
//   border-radius: 5px;
//   font-weight: 500;
//   border: none;
//   line-height: 1;
// `;

const Btn = styled.button`
  font-size: 18px;
  background-color: #22c55e;
  color: white;
  padding: 16px 28px;
  border-radius: 5px;
  font-weight: 500;
  border: none;
  line-height: 1;
`;

// sukurti gray button ir paveldeti  stilius Btn
export const GrayBtn = styled(Btn)`
  color: #333f51;
  background-color: #d5dae1;
`;

export default Btn;
