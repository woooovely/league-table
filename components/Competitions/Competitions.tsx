import Image from "next/image";
import { ImageLogoContainer, LeagueName, Wrapper } from "./Competitions-style";
import { competitionName } from "@/constants/league-name";
import soccer_ball from "@/assets/imgs/soccer_ball.png";

interface Props {
  image: string;
  code: string;
}

const Competitions = ({ image, code }: Props) => {
  return (
    <Wrapper>
      <ImageLogoContainer>
        {image ? (
          <Image src={image} alt={code} width={50} height={50} />
        ) : (
          <Image src={soccer_ball} width={50} height={50} alt="ball" />
        )}
      </ImageLogoContainer>
      <LeagueName>{competitionName[code]}</LeagueName>
    </Wrapper>
  );
};

export default Competitions;
