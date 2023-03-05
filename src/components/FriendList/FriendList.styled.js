import styled from 'styled-components';

export const Container = styled.ul`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

export const Marker = styled.span`
  display: block;
  margin-right: 30px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? 'green' : 'red')};
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  padding: 15px;
  box-shadow: 5px 5px 10px -3px #000000;
  & img {
    margin-right: 30px;
  }
`;
