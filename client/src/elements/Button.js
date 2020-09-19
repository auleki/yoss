import styled from 'styled-components'
import { variables } from './variables'

export default styled.button`
  background-color: ${variables.c3};
  color: #fff;
  border-radius: .2rem;
  cursor: pointer;
  padding: .8rem 1rem;
  transition: 200ms ease-in-out;
  letter-spacing: .1rem;
  font-weight: 800;  
  outline: 0;
  border: 0;  
  i {
    transition: 150ms ease-out;
  }
  &:hover {
    background-color: ${variables.c4};
    color: ${variables.c3};
    i {
      transform: scale(1.2);
    }
  }
  `