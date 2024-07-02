import styled from "styled-components/native";
import Descricao from "../../components/Descricao.";

export const LinhaDivisao = styled.View`
    width: 40%;
    height: 2px;
    background-color: black;
`
export const ContainerDivisao = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`

function Divisao(){
    return (
        <ContainerDivisao>
            <LinhaDivisao></LinhaDivisao>
            <Descricao title="ou" />
            <LinhaDivisao></LinhaDivisao>
        </ContainerDivisao>
    )
}

export default Divisao;