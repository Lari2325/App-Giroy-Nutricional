import Descricao from "../../components/Descricao";

import {
    LinhaDivisao,
    ContainerDivisao
} from "../../models/Styleds/Cadastro/styled";

function Divisao(){
    return (
        <ContainerDivisao>
            <LinhaDivisao />
            <Descricao title="ou" />
            <LinhaDivisao />
        </ContainerDivisao>
    )
}

export default Divisao;