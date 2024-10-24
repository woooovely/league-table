import styled from "styled-components";

export const Wrapper = styled.div``;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

export const TableTitle = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 40px;
  padding: 0 10px;
`;

export const Lists = styled.li`
  list-style: none;
  color: #bdbdbd;
  font-weight: 600;
  text-align: center;
  
  &:nth-child(1) {
    width: 50px;  // 순위
  }
  
  &:nth-child(2) {
    width: 200px; // 선수명
  }
  
  &:nth-child(3) {
    width: 100px; // 경기
  }
  
  &:nth-child(4) {
    width: 100px; // 득점
  }
  
  &:nth-child(5) {
    width: 200px; // 소속팀
  }
  
  &:nth-child(6) {
    width: 100px; // 국적
  }
`;

export const BoxContainer = styled.div`
  width: 780px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const Container = styled.div``;

export const Table = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  height: 40px;
  margin-bottom: 20px;
  padding: 0 10px;
`;

export const TeamContainer = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
`;

export const TeamLogo = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 6px;
`;

export const Rank = styled.span`
  width: 50px;
  text-align: center;
`;

export const Player = styled.span`
  width: 200px;
  text-align: left;
  font-weight: 600;
`;

export const PlayedMatches = styled.span`
  width: 100px;
  text-align: center;
`;

export const Goals = styled.span`
  width: 100px;
  text-align: center;
`;

export const Nation = styled.span`
  width: 100px;
  text-align: center;
`;
