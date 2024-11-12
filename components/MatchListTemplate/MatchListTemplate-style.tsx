import styled from "styled-components";
import DatePicker from "react-datepicker";

export const LeagueLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const NoImg = styled.div`
  display: flex;
  height: 220px;
`;

export const DateBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
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
