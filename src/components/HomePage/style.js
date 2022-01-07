import styled from "styled-components";

export const HomeWrapper = styled.div`
  .slick-arrow {
    background-color: #423d3c;
    height: 35px;
    width: 35px;
    border-radius: 100px;
  }
  .img:hover{
    height: 400px;
    width: 350px;
    transition: width 2s, height 2s;
    
  }
  .body {
    background-color: red;
  }
  .slick-arrow:hover,
  .slick-arrow:active,
  .slick-arrow:focus {
    background-color: red !important;
  }
`;
