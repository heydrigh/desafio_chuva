import React from "react";

import { HeaderContainer, DownloadContainer, DownloadSubtitle } from "./styles";
import { BiDownload } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import doi from "../../assets/doi.svg";

const ContentHeader = () => {
  return (
    <>
      <HeaderContainer>
        Análise sensorial de preparações funcionais desenvolvidas para escolares
        entre 09 e 15 anos, do município de Campinas/SP
      </HeaderContainer>
      <DownloadContainer>
        <button className="download">
          <BiDownload size={19} color="#fff" />
          Download
        </button>
        <button className="favorite">
          <AiFillStar size={19} color="#fff" />
        </button>
        <button className="doi">
          <img src={doi} alt="doi" />{" "}
        </button>
      </DownloadContainer>
      <DownloadSubtitle>COMO CITAR ESSE TRABALHO?</DownloadSubtitle>
    </>
  );
};

export default ContentHeader;
