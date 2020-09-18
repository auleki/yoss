import styled from 'styled-components'
import { variables } from './variables'

export default styled.button`
  background-color: ${variables.c3};
  color: #fff;
  border-radius: 10rem;
  cursor: pointer;
  padding: .8rem 2.5rem;
  transition: 300ms ease-in-out;
  letter-spacing: .1rem;
  font-weight: 800;  
  outline: 0;
  border: 0;  
  &:hover {
    background-color: ${variables.c1};
    color: ${variables.c4}
  }
  `