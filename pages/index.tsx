import Head from "next/head";
import styled from "styled-components";
import league from '@/assets/svgs/league.svg';
import Image from "next/image";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Soccer Table</title>
      </Head>
      <Container>
        <IntroduceContainer>
          <Section>
            <TextContainer>
              <Text>
                유럽의
                <br />
                가장 인기있는
                <br />
                축구들을 즐겨보세요.
              </Text>
            </TextContainer>
            <Right>
              <Image src={league} alt="리그" />
            </Right>
          </Section>
          <Button onClick={() => router.push("/premier/rank")}>둘러보기</Button>
        </IntroduceContainer>
      </Container>
    </div>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
`;

const IntroduceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
  width: 1200px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextContainer = styled.div``;

const Text = styled.p`
  font-size: 45px;
  font-weight: 600;
`;

const Right = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 170px;
  height: 60px;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.5s ease-in;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  margin-bottom: 50px;
`;
