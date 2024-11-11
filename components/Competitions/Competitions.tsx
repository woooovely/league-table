import Image from "next/image";
import { Wrapper } from "./Competitions-style";
import { competitionName } from "@/constants/league-name";
import soccer_ball from "@/assets/imgs/soccer_ball.png";

interface Props {
  image: string;
  code: string;
}

const Competitions = ({ image, code }: Props) => {
  return (
    <Wrapper>
      {image ? (
        <Image src={image} alt={code} width={50} height={50} />
      ) : (
        <Image src={soccer_ball} alt="ball" width={50} height={50} />
      )}
      <span>{competitionName[code]}</span>
    </Wrapper>
  );
};

export default Competitions;
