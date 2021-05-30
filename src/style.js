import styled from 'styled-components';



export const PrimarySection = styled.div`
background-color: rgb(51,0,0);
width: 100%;
height: 720px;
position: relative;




`;
export const Quiz = styled.div`
border-radius: 1rem;
width: 30rem;
background-color: rgb(34,34,34);
display: flex;
flex-direction: column;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

@media screen and (max-width: 560px) {
   width: 23rem;
};
@media screen and (max-width: 400px) {
   width: 18rem;
};
`;
export const QuestionSection = styled.div`
color: white;
margin: .5rem .5rem;
font-size: 1rem;
`;
export const QuestionCount = styled.span`





`;
export const Question = styled.h1`
color: white;
font-size: 1.6rem;
text-align: center;


@media screen and (max-width: 560px) {
   font-size: 1.5rem;
};
@media screen and (max-width: 560px) {
   font-size: 1.2rem;
};
`;
export const AnswerSection = styled.div`

display: flex;
flex-direction: column;

`;
export const SubmitButton = styled.button`
margin: .4rem auto;
padding: .1rem;
font-size: 1.1rem;
border: 1px solid #fff;
border-radius: 3rem;
cursor: pointer;
background-color: #fff;
color: rgb(51,0,0);
width: 20rem;

&:hover{
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    transition: .2s all ease;
}
@media screen and (max-width: 560px) {
   width: 20rem; 
};
@media screen and (max-width: 400px) {
   width: 16rem;
};

`;
export const Score = styled.h1`
color: #fff;
text-align: center;
margin: 2rem;
font-size: 2rem;


@media screen and (max-width: 560px) {
   font-size: 1.7rem; 
};
@media screen and (max-width: 400px) {
   font-size: 1.3rem; 
};
`;
export const BackButton = styled(SubmitButton)`
 margin-top: 1.5rem;

 @media screen and (max-width: 400px) {
    margin: .7rem auto;
    width: 14rem;
     
  
};
`;