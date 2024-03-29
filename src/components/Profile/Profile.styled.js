import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.div`
  border: 2px solid green;
  text-align: center;
  & .name {
    font-size: large;
    font-weight: 700;
  }
`;

export const Stats = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  padding-left: 0;
`;
