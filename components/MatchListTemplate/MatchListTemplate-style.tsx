import styled from "styled-components";
import DatePicker from "react-datepicker";

export const Wrapper = styled.div`
  margin-top: 50px;
`;

export const LeagueLogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const DateBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  display: flex;
  gap: 50px;
  margin-top: 50px;
`;

export const DateBox = styled(DatePicker)`
  border: none;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  text-align: center;
`;

export const PrevDateBtn = styled.button`
  color: black;
  background: none;
  border: none;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

export const NextDateBtn = styled.button`
  color: black;
  background: none;
  border: none;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;
