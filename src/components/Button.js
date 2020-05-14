import styled from "styled-components"

const StyledButton =styled.button`
   text-transform: capitalize;
  font-size: 1.2rem;
  background:rgb(26, 3, 48) ;
  border:2px solid black;

  
  
  color:white;
  border-radius:0.5rem;
  padding:0.3rem 0.3rem;
  cursor:pointer;
  margin:0.2rem 0.5rem 0.2rem 0;
  transition:all 0.5s ease-in-out;
  &:hover{
   background:white;
   
  
   color:rgb(26, 3, 48);


  }
  &:focus{
      outline:none;
  }


`



export default StyledButton;
