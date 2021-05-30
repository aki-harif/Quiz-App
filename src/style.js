import styled from 'styled-components';



export const PrimarySection = styled.section`
background-color: rgb(51,0,0);
width: 100%;
height: 700px;
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
font-size: 1.7rem;
text-align: center;
`;
export const AnswerSection = styled.div`
align-items: flex-end;
`;
export const SubmitButton = styled.button`

width: 6rem;
justify-content: center;
margin: .5rem;
padding: .1rem;
font-size: 1.1rem;
border: .1rem solid white;
border-radius: 3rem;
cursor: pointer;
background-color: rgb(102,102,102);
color: rgb(51,0,0);


`;
export const Score = styled.h1`
color: #fff;
text-align: center;
margin: 2rem;
font-size: 2rem;
`;
export const BackButton = styled(SubmitButton)`

`;