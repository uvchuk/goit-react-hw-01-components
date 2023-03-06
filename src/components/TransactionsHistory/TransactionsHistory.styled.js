import styled from 'styled-components';

export const Container = styled.table`
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
`;

export const Head = styled.thead`
  & tr {
    background-color: cyan;
  }
  & th,
  td {
    padding: 10px;
    border: 1px solid #2a2a2a;
  }
`;

export const Body = styled.tbody`
  & th,
  td {
    padding: 10px;
    border: 1px solid #2a2a2a;
  }
  & td::first-line {
    text-transform: capitalize;
  }
`;
