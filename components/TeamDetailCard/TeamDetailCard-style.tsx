import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TeamCard = styled.section`
  border: 2px solid #eaeaea;
  width: 60%;
  border-radius: 10px;
`;

export const TeamContainer = styled.header`
  padding: 16px 32px 8px;
  display: flex;
  align-items: center;
  gap: 16px;
  height: 112px;
`;

export const TeamLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NameAndCountry = styled.div`
  display: flex;
  flex-direction: column;
`

export const TeamName = styled.span`
  font-size: 23px;
`;

export const Country = styled.span`
  font-size: 15px;
  color: gray;
`

export const NavContainer = styled.nav`
  padding: 0px 32px;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  overflow: scroll hidden;
  scrollbar-width: none;
  gap: 40px;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    position: absolute;
    bottom: -10px; /* 글씨와 밑줄 사이의 거리 */
    left: 0;
    border-top: 2px solid #fcaa1f;
  }
`;

export const NavMenu = styled(Link)<{ isActive: boolean }>`
  text-align: center;
  text-transform: capitalize;
  white-space: nowrap;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: auto;
  height: 56px;
  transition: color 0.2s;
  color: ${({ isActive }) => isActive ? 'black' : 'gray'};
  &::after {
    content: "";
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0;
    border-top: ${({ isActive }) => (isActive ? "3px solid black" : "none")};
    border-radius: 10px;
  }
`;
