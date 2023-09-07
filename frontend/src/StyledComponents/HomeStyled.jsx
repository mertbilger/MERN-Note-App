import styled from "styled-components";

export const Notlar = styled.div`
 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
  }

`
export const FormNote = styled.div`
margin-bottom: 25px;
`;