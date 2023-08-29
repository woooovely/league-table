import styled from 'styled-components'
import Image from 'next/image'

export const NewsContainer = styled.div`
  padding: 80px;
`

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 550;
`

export const NewsItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`

export const Thumbnail = styled.div`
  margin-right: 1rem;
  margin-top: 50px;
  border: 1px solid #E1E1E1;
  display: flex;
  width: 550px;
`

export const NewsImage = styled(Image)`
  display: block;
  width: 300px;
  height: 90px;
  padding: 10px;
  object-fit: cover;
`

export const NewsTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  padding: 10px;
`

export const Detail = styled.div`
  padding-bottom: 10px;
`

export const NewsLink = styled.a`
  text-decoration: none;
  color: black;
`