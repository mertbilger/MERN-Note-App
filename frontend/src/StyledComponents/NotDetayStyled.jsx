import styled from "styled-components";

export const Detay = styled.div`
  background: #fff;
  border-radius: 4px;
  font-size: 25px;

  padding: 20px;
  position: relative;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);

  h4 {
    margin: 0 0 10px 0;
    font-size: 1.2em;
    color: var(--primary);
  }
  p{
    margin: 0;
  font-size: 20px;
  color: #555;
  }
  span{
  position: absolute;
  top: 105px;
  right: 20px;
  cursor: pointer;
  background: #f1f1f1;
  padding: 6px;
  border-radius: 50%;
  color: #333;
  }
`;

export const Zaman = styled.p`
  font-size: 0.8rem !important;
  margin-top:10px !important;
`;