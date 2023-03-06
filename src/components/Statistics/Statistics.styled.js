import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const List = styled.ul`
  width: 400px;
  padding-left: 0;
  display: flex;
  gap: 8px;
  list-style: none;
  border: 2px solid grey;
`;

export const Item = styled.li`
  display: flex;
  flex-grow: 1;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  background-color: violet;
`;
