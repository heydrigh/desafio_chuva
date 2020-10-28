import styled from 'styled-components';

import { shade } from 'polished';
import footer from '../../assets/footer.svg';

export const DiscussionContainer = styled.div`
  position: relative;
  width: 84%;
  top: 849px;
  left: 263px;
  border-radius: 3px;
  border: 1px solid #ECECEC;
  text-align: center;
  color: #4E4E4E;
  z-index: -1;
  
   h2 {
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    color: #ED7839;
   }

   .img {
     padding-top: 27px;
   }
   .bottomText{
     display: flex;
     max-width: 626px;
     text-align: center;
     bottom: 630px;
     margin-left: 31%;
     padding-top: 35px;
   }

   .createTopic {
      width: 133px;
      height: 32px;
      background: linear-gradient(180deg, #FEB254 0%, #F0813D 100%);
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
      border-radius: 4px;
      border: 0;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#FEB254')};
      }
   }

   .createInput {
      display: flex;
      flex-direction: column;

     p {
      font-family: Quicksand;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: center;

     }
     label {
        text-align: left;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #ED7839;
        padding-top: 10px;
     }

     button {
       width: 205px;
       height: 31px;
       background: linear-gradient(180deg, #FEB154 0%, #F1833E 100%);
       border-radius: 0px 0px 4px 0px;
       border: 0;
       transition: background-color 0.2s;

        &:hover {
          background: ${shade(0.2, '#FEB254')};
        }
     }  

     .contentInput {
       height: 82px;
     }   

    }

    .successInput {
      p {
        font-family: Roboto;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: center;
        color: #ED7839;
      }
      span {
        font-family: Quicksand;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: center;
        color: #595959;
      }
      .discover {
        font-family: Quicksand;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: center;
        text-align: center;
        text-decoration-line: underline;

        color: #F48F44;
      }
      button {
        width: 235px;
        height: 32px;
        background: linear-gradient(180deg, #FEB254 0%, #F0813D 100%);
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
        border-radius: 4px;
        border: 0;
        transition: background-color 0.2s;

        &:hover {
          background: ${shade(0.2, '#FEB254')};
        }
      }
      .waitingFeedback {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 148px;
        background: #DDDDDD;
        border: 1px solid #E7E7E7;
        box-sizing: border-box;
        border-radius: 4px;
        text-align: center;
        padding-top: 35px;
        P {
          font-family: Quicksand;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: left;
          text-align: center;
          color: #707070
        }

        span {
          font-family: Segoe UI;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 19px;
          letter-spacing: 0em;
          text-decoration-line: underline;

          color: #ED7839;
        }
      }
    }
    .commentContainer {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 160px;
        background: #fff;
        border: 1px solid #E7E7E7;
        box-sizing: border-box;
        border-radius: 4px;
        text-align: left;
        padding-top: 18px;
        padding-left: 24px;
        h4 {
          font-family: Quicksand;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: left;
          color: #ED7839;

        }
        span {
          font-family: Quicksand;
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: 15px;
          letter-spacing: 0em;
          color: #5C5C5C;
        }
        p {
          font-family: Quicksand;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
          letter-spacing: 0em;
          text-align: left;

        }
        .options {
          .dots {
            border: 0;
            background: none;
          }
          .like {
            background: #ED7839;
            box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
            border-radius: 2px;
            border: 0;
            margin-right: 22px;
          }
        }
      }
      .authorComment {
        text-align: left;
        width: 100%;
        height: 131px;
        background: #f8f8f8;
        border: 1px solid #E7E7E7;
        box-sizing: border-box;
        .authorName{
          font-family: Quicksand;
          font-size: 12px;
          font-style: normal;
          font-weight: 700;
          line-height: 15px;
          letter-spacing: 0em;
          color: #5C5C5C;
          margin-left: 23px;
        }
        .authorFunction {
          font-family: Quicksand;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 18px;
          letter-spacing: 0em;
          text-align: left;
          float: right;
          color: #ED7839;
          img {
            width: 30px;
            height: 23px;
            margin-left: 33px;
          }
        }
        p {
          font-family: Quicksand;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
          letter-spacing: 0em;
          text-align: left;
          color: #4D4D4D;
          margin-left: 23px;
          margin-top: 43px;
        }
      }

      .userComment {
        text-align: left;
        width: 100%;
        height: 131px;
        background: #fff;
        border: 1px solid #E7E7E7;
        box-sizing: border-box;
        .authorName{
          font-family: Quicksand;
          font-size: 12px;
          font-style: normal;
          font-weight: 700;
          line-height: 15px;
          letter-spacing: 0em;
          color: #5C5C5C;
          margin-left: 23px;
        }
         }
        p {
          font-family: Quicksand;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
          letter-spacing: 0em;
          text-align: left;
          color: #4D4D4D;
          margin-left: 23px;
          margin-top: 43px;
        }
      } 
      footer {
        position: relative;
        width: 1069px;
        height: 181px;
        bottom: 0%;
        right: 0%;

        background: url(${footer}) no-repeat;
      } 
`;


