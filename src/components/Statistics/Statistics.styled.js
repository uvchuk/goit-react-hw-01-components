import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const List = styled.ul`
  padding-left: 0;
  display: flex;
  gap: 8px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
`;
