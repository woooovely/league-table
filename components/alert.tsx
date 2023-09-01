import styled from 'styled-components';
import { useEffect } from 'react';

const Alert = () => {
    useEffect(() => {
        alert("모바일 환경에선 지원되지 않아요. PC로 이용해주세요!")
    })

    return (
        <>
          <Background />
        </>
    )
}

export default Alert;


const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    display: flex;
    align-items: center;
`