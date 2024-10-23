import "react-datepicker/dist/react-datepicker.css";
import {
  DateBox,
  DateBoxContainer,
  LeagueLogoContainer,
  NextDateBtn,
  PrevDateBtn,
  Wrapper,
} from "./MatchListTemplate-style";
import { useEffect, useState } from "react";
import axios from "axios";
import { LeagueInfo } from "@/types/league-info";
import Image from "next/image";
import { getDate } from "@/utils/getDate";
import { getDateDifference } from "@/utils/getDateDiffer";
import { ko } from "date-fns/locale";
import { Matches } from "@/types/matches";
import MatchList from "../MatchList/MatchList";
import Loading from "../Loading/Loading";

interface LeagueTypeProps {
  league: string;
}

const MatchListTemplate = ({ league }: LeagueTypeProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [leagueInfo, setLeagueInfo] = useState<LeagueInfo>({
    emblem: "",
    id: 0,
    name: "",
    code: "",
    type: "",
  });
  const [matches, setMatches] = useState<Matches[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const leagueType =
    league === "premier"
      ? "PL"
      : league === "bundes"
      ? "BL1"
      : league === "laliga"
      ? "PD"
      : league === "serie"
      ? "SA"
      : league === "league"
      ? "FL1"
      : "";

  const formattedDate = getDate(currentDate);
  const dateLabel = getDateDifference(currentDate);
  const displayDate =
    dateLabel === "오늘" || dateLabel === "내일" || dateLabel === "어제"
      ? dateLabel
      : formattedDate;

  const handleMovePrevDate = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  };

  const handleMoveNextDate = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  };

  useEffect(() => {
    const fetchMatches = async () => {
      setIsLoading(true);
      await axios
        .post(`/api/matches`, {
          leagueType,
          currentDate: formattedDate,
        })
        .then((response) => {
          setLeagueInfo(response.data.competition);
          setMatches(response.data.matches);
          console.log(response.data.matches);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchMatches();
  }, [currentDate]);

  console.log(matches);

  return (
    <Wrapper>
      {isLoading && <Loading isLoading={isLoading} />}
      <LeagueLogoContainer>
        {leagueInfo.emblem && (
          <Image
            src={leagueInfo.emblem}
            width={200}
            height={200}
            alt={leagueInfo.name as string}
          />
        )}
      </LeagueLogoContainer>
      <DateBoxContainer>
        <PrevDateBtn onClick={handleMovePrevDate}>{"<"}</PrevDateBtn>
        <DateBox
          selected={currentDate}
          onChange={(date) => setCurrentDate(date as Date)}
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
          placeholderText={displayDate}
          value={displayDate}
        />
        <NextDateBtn onClick={handleMoveNextDate}>{">"}</NextDateBtn>
      </DateBoxContainer>
      <MatchList data={matches} />
    </Wrapper>
  );
};

export default MatchListTemplate;
