import styled from 'styled-components';

import { shade } from 'polished';

export const HeaderContainer = styled.div`
  
    position: absolute;
    height: 54px;
    width: 786px;
    left: 263px;
    top: 88px;
    right: 371px;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 25px;
    letter-spacing: 0.05em;
    text-align: left;
    color: #ED7839;

`;

export const DownloadContainer = styled.div`

  .download {
    position: absolute;
    height: 31px;
    width: 120px;
    top: 88px;
    right: 141px;
    border: 0;
    padding: 0;
    margin: 0;

    background: #ED7839;
    border-radius: 4px;
    transition: background-color 0.2s;

    &:hover {
     background: ${shade(0.2, '#d56c33')};
  }
  }

  .favorite {
    position: absolute;
    width: 43px;
    height: 31px;
    right: 93px;
    bottom: 97.76%;
    top: 88px;
    border: 0;
    padding: 0;
    margin: 0;

    background: #ED7839;
    border-radius: 4px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#d56c33')};
    }
  }

  .doi {
    position: absolute;
    width: 43px;
    height: 31px;
    right: 45px;
    bottom: 97.76%;
    top: 88px;
    background: #ED7839;
    border-radius: 4px;
    border: 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#d56c33')};
    }
  }
`;

export const DownloadSubtitle = styled.div`
  position: absolute;
  width: 239;
  height: 25;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0.05em;
  text-align: right;
  color: #ED7839;
  right: 44px;
  top: 131px;

`;
