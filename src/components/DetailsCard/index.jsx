import React from 'react';

import { CardContainer } from './styles';

import { Card } from 'react-bootstrap';

const DetailsCard = () => {
  return (
  <CardContainer>
    <Card>
  <Card.Header as="h5">Detalhes</Card.Header>
  <Card.Body>
    <Card.Text>
      <p>Tipo de apresentação: <strong>Pôster</strong></p>
      <p>Eixo temático: <strong>Alimentação e saúde</strong></p>
      <p>Palavras-chave: <strong>Alimentos funcionais, alimentação escolar.</strong></p>
      <strong>Autores</strong>
      <p>Galileo Galilei</p>
      <p>Berta Lange de Morretes</p>
      <p>Isaac Newton</p>
      <p>Cesar Lattes</p>

      <span>Universidade Estadual de Campinas</span>
      <span>Universidade de São Paulo</span>
      <span>Instituto Nacional de Pesquisas Espaciais</span>
      <span>Universidade Federal do Rio de Janeiro</span>

    </Card.Text>
  </Card.Body>
</Card>
</CardContainer>
  );
}

export default DetailsCard;