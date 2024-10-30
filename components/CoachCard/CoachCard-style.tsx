import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const CoachContainer = styled.section`
    border: 2px solid #eaeaea;
    width: 60%;
    border-radius: 10px;
    margin-top: 30px;
    padding: 0 24px 24px;
`;

export const CoachHeader = styled.h3`
  display: flex;
  align-items: center;
  height: 60px;
`;

export const CoachDetail = styled.div`
    display: flex;
    flex-direction: column;
`

export const CoachName = styled.span`
  font-size: 24px;
`

export const Nationality = styled.span`
    color: gray;
`;

export const Period = styled.span`
    color: gray;
`