import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 68px;
  width: 100%;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  position: absolute;
  z-index: -1;

  background: #FDF1EB;
  font-family: Roboto;
`;

export const HeaderDetails =  styled.div`
  p {
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 256px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    color: #725C5C;
  }

  span {
    margin-left: 256px;
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 14px;
    color: #725C5C;
  }

`;

export const ProfileDetails = styled.div`
  margin: 0;
  padding: 0;
`;

export const DetailsContainer = styled.div`
  position: absolute;
  right: 75px;
  margin-top: 17px;
  padding-bottom: 0;
  padding-top: 0;
  top: 0;
  text-align: right;
  p {
    font-family: 'Quicksand';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: right;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  span {
    font-family: 'Quicksand';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: right;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-right: 0;
  }

`;

export const ImageContainer = styled.div`
  img{
    position: absolute;
    border-radius: 50%;
    top: 19px;
    right: 29px;
  }
  span{
    position: absolute;
    height: 12px;
    width: 12px;
    right: 29px;
    top: 17px;
    border-radius: 8px;
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: -0.02em;
    background: #F85959;
    text-align: center;
  }

`;

export const LanguageContainer = styled.div`
  
  .dropButton {
    position: absolute;
    width: 120px;
    height: 34px;
    left: 789px;
    top: 17px;
    padding: 0;
    margin: 0;
    margin-left: 759px;
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Quicksand;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;

      img {
        width:22px;
        height: 21px;
        margin: 0;
        padding: 0;
        margin-bottom: 8px;
      }
  }
  
`;