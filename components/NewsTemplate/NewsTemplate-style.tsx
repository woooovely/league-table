import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 400px;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 550;
`;

export const NewsItemBlock = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 20px;
`;

export const NewsLink = styled.li`
  width: 100%;
  list-style: none;
`;

export const Thumbnail = styled.a`
  display: flex;
  align-items: center;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  width: 100%;
  height: 150px;
`;

export const NewsImage = styled(Image)`
  height: 150px;
  padding: 10px;
`;

export const NewsTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Detail = styled.div`
  padding: 10px 15px;
`;
