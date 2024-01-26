import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  max-width: 300px;
  margin-inline: auto;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  &:hover,
  &:focus,
  &:active {
    background-color: #303f9f;
  }
`;

export default Button;
