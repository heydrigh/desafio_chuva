import React from "react";

import { Dropdown, Button, ButtonGroup } from "react-bootstrap";

import {
  HeaderContainer,
  HeaderDetails,
  ProfileDetails,
  LanguageContainer,
  DetailsContainer,
  ImageContainer,
} from "./styles";

import profile from "../../assets/profile.png";
import world from "../../assets/world.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderDetails>
        <span>
          Anais do Simpósio Latino Americano de Ciências de Alimentos{" "}
        </span>
        <p>Anais do 13º Simpósio Latino Americano de Ciência de Alimentos </p>
        <span>ISSN: 1234-5678</span>
      </HeaderDetails>
      <ProfileDetails>
        <LanguageContainer>
          <Dropdown as={ButtonGroup} className="dropButton">
            <Button
              variant="default"
              style={{ color: "#333333", background: "#FDF1EB" }}
            >
              <img src={world} alt="world"></img>PT,BR
            </Button>

            <Dropdown.Toggle
              split
              variant="default"
              id="dropdown-split-basic"
              style={{
                color: "#333333",
                background: "#FDF1EB",
                border: 1,
                borderColor: "#CCCCCC",
              }}
            />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">PT,BR</Dropdown.Item>
              <Dropdown.Item href="#/action-2">EN,US</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </LanguageContainer>
        <DetailsContainer>
          <p>Bem vindo!</p>
          <span>alguem12@galoascience.com</span>
        </DetailsContainer>
        <ImageContainer>
                  <img src={profile} alt="profile"/>
                  <span>2</span>
        </ImageContainer>
      </ProfileDetails>
    </HeaderContainer>
  );
};

export default Header;
