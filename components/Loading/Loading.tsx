import { CSSProperties } from "react";
import { Text, Wrapper } from "./Loading-style";
import { PropagateLoader } from "react-spinners";

interface LoadingProps {
  isLoading: boolean;
}

const override: CSSProperties = {
  margin: "0 auto",
  textAlign: "center",
  color: "#000",
};

const Loading = ({ isLoading }: LoadingProps) => {
  return (
    <Wrapper>
      <PropagateLoader
        color="#000"
        loading={isLoading}
        cssOverride={override}
        size={25}
        speedMultiplier={0.8}
      />
      <Text>읽어들이는 중...</Text>
    </Wrapper>
  );
};

export default Loading;
