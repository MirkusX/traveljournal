import "./App.css";
import { kahntent } from "./components/kahntent";
import {
  CountryDiv,
  CustomImg,
  InnerContainer,
  LocationIcon,
  LocationMapsDiv,
  OuterContainer,
  StyledA,
  StyledH1Div,
  StyledH2,
  StyledP,
  StyledSection,
  WorldIcon,
} from "./components/StyledComponents";

function App() {
  return (
    <div className="App">
      <StyledSection>
        <StyledH1Div>
          <WorldIcon />
          <h1>my travel journal.</h1>
        </StyledH1Div>
        {kahntent.map((item, index) => {
          return (
            <OuterContainer key={index}>
              <CustomImg src={item.imageUrl} />
              <InnerContainer>
                <LocationMapsDiv>
                  <CountryDiv>
                    <LocationIcon />
                    <StyledP country>{item.location}</StyledP>
                  </CountryDiv>
                  <StyledP>
                    <StyledA href={item.googleMapsUrl}>
                      View on Google Maps
                    </StyledA>
                  </StyledP>
                </LocationMapsDiv>
                <StyledH2>{item.title}</StyledH2>
                <StyledP>
                  {item.startDate} - {item.endDate}
                </StyledP>
                <StyledP>{item.description}</StyledP>
              </InnerContainer>
            </OuterContainer>
          );
        })}
      </StyledSection>
    </div>
  );
}

export default App;
