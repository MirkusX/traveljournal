import styled from "styled-components";
import { BiWorld } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
//Stylings
export const OuterContainer = styled.div`
  display: flex;
  width: 40%;
  gap: 1em;
  margin-bottom: 3em;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LocationMapsDiv = styled.div`
  display: flex;
  gap: 1em;
`;

export const CustomImg = styled.img`
  max-width: 30%;
  border-radius: 5px;
`;

export const StyledSection = styled.section`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledP = styled.p`
  margin: 0;
  ${(props) => {
    if (props.country)
      return `
    letter-spacing: 0.17em;
    `;
  }}
`;

export const StyledH2 = styled.h2`
  margin-top: 0;
`;

export const StyledH1Div = styled.div`
  background-color: #f55a5a;
  margin-bottom: 4em;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  color: white;
`;

export const WorldIcon = styled(BiWorld)`
  width: 32px;
  height: 32px;
`;

export const LocationIcon = styled(MdLocationOn)`
  fill: #f55a5a;
`;

export const CountryDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledA = styled.a`
  color: #918e9b;
`;
