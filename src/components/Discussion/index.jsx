import React, { useState } from "react";

import { DiscussionContainer } from "./styles";
import { Card, Accordion } from "react-bootstrap";
import share from "../../assets/share.svg";
import qna from "../../assets/qna.svg";
import talk from "../../assets/talk.svg";
import arrowDown from "../../assets/arrowdown.svg";
import arrowOrange from "../../assets/arroworange.svg";

import { GoPlus } from "react-icons/go";
import { BsThreeDotsVertical, BsHeartFill } from "react-icons/bs";

const Discussion = () => {
  const [show, setShow] = useState(true);
  const [showSuccess, setShowSuccess] = useState(true);

  const handleClick = () => {
    setShow(false);
  };

  const handleClickSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <DiscussionContainer>
      <Accordion>
      <Card>
        <Card.Header style={{ background: "#FDF1EB", textAlign: "left" }}>
          <h4>Discussões</h4>
        </Card.Header>
        {show ? (
          <Card.Body className="create">
            <h2>Compartilhe suas ideias ou dúvidas com os autores!</h2>
            <img src={share} alt="share" className="image" />
            <img src={qna} alt="qna" className="image" />
            <img src={talk} alt="talk" className="image" />
            <p className="bottomText">
              Sabia que o maior estímulo no desenvolvimento científico e
              cultural é a curiosidade? Deixe seus questionamentos ou sugestões
              para o autor!
            </p>
            <button className="createTopic" onClick={handleClick}>
              <GoPlus size={15} />
              Criar tópico
            </button>
          </Card.Body>
        ) : showSuccess ? (
          <Card.Body className="createInput">
            <p>
              Tem uma dúvida ou sugestão? Compartilhe seu feedback com os
              autores!
            </p>

            <label htmlFor="">Assunto</label>
            <input
              type="text"
              placeholder="Defina um tópico sucinto para notificar os autores..."
            />
            <label htmlFor="">Conteúdo</label>
            <input type="text" className="contentInput" />
            <button onClick={handleClickSuccess}>Enviar</button>
          </Card.Body>
        ) : (
          <Card.Body className="successInput">
            <p>Seu tópico foi enviado com sucesso! :D</p>
            <span>
              Agradecemos por sua contribuição, uma notificação será enviada ao
              seu email assim que seu tópico for respondido!
            </span>
            <p className="discover">Descubra outros trabalhos!</p>
            <button onClick={handleClick}>criar novo tópico</button>
            <div className="waitingFeedback">
              <img src={arrowDown} alt="arrowDown" />
              <p>Aguardando feedback dos autores</p>
              <span>Editar tópico</span>
            </div>
          </Card.Body>
        )}
        <Card.Body>
          <div className="commentContainer">
            <h4>Assunto da pergunta aparece aqui</h4>
            <span>Carlos Henrique Santos</span>
            <p>
              Comecinho da pergunta aparece aqui resente relato inscreve-se no
              campo da análise da dimensão e impacto de processo formativo
              situado impacto de processo formativo processo...
            </p>
            <span className="options">
              <button className="dots">
                <BsThreeDotsVertical size={14} color="#ED7839" />
              </button>
              <button className="like">
                <BsHeartFill size={14} color="#fff" />
              </button>
              1 like 1 resposta{" "}
            </span>
          </div>
        </Card.Body>

        <Card.Body>
          <Accordion.Toggle className="commentContainer" eventKey="0">
            <h4>Assunto da pergunta aparece aqui</h4>
            <span>Carlos Henrique Santos</span>
            <p>
              Comecinho da pergunta aparece aqui resente relato inscreve-se no
              campo da análise da dimensão e impacto de processo formativo
              situado impacto de processo formativo processo...
            </p>
            <span className="options">
              <button className="dots">
                <BsThreeDotsVertical size={14} color="#ED7839" />
              </button>
              <button className="like">
                <BsHeartFill size={14} color="#fff" />
              </button>
              4 like 4 resposta{" "}
            </span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0" >
          <div className="answersContainer">
            <div className="authorComment">
              <span className="authorName">Adriano da Silva</span>
              <span className="authorFunction">
                Autor <img src={arrowOrange} alt="arrowDown" />
              </span>
              <p>
                Resposta do autor é aqui. Relato inscreve-se no campo da análise
                da dimensão e impacto de processo formativo situado impacto de
                processo formativo processo resente relato inscreve-se no campo
                da análise da dimensão e impacto de processo formativo situado
                impacto de processo formativo processo.
              </p>
            </div>
            <div className="userComment">
              <span className="authorName">Adriano da Silva</span>
              <p>
                Consegui entender melhor agora! Parece que a variação da análise
                da dimensão e impacto de processo formativo situado impacto de
                processo formativo. Obrigada pela resposta, muito interessante o
                seu trabalho!
              </p>
            </div>
            <div className="authorComment">
              <span className="authorName">Carmila Ferreira Andrade</span>
              <span className="authorFunction">
                Coautor <img src={arrowOrange} alt="arrowDown" />
              </span>
              <p>
                Também ínteressante lembrar que o relato inscreve-se no campo da
                análise da dimensão e impacto de processo formativo situado
                impacto de processo formativo processo resente relato
                inscreve-se no campo da análise da dimensão e impacto de
                processo formativo situado impacto de processo formativo
                processo. Situado impacto de processo formativo processo resente
                relato inscreve-se no campo da análise da dimensão e impacto de
                processo formativo situado impacto de processo formativo
                processo.
              </p>
            </div>
            <div className="authorComment">
              <span className="authorName">Ana Carolina</span>
              <span className="authorFunction">
                Coautor <img src={arrowOrange} alt="arrowDown" />
              </span>
              <p>
                Resposta do autor é aqui. Relato inscreve-se no campo da análise
                da dimensão e impacto de processo formativo situado impacto de
                processo formativo processo resente relato inscreve-se no campo
                da análise da dimensão e impacto de processo formativo situado
                impacto de processo formativo processo.
              </p>
            </div>
          </div>
          </Accordion.Collapse>
        </Card.Body>
      </Card>
      </Accordion>
      <footer>

      </footer>
    </DiscussionContainer>
  );
};

export default Discussion;
