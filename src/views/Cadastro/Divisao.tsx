import Descricao from "../../components/Descricao.";

import {
    LinhaDivisao,
    ContainerDivisao
} from "../../models/Cadastro/styled";

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