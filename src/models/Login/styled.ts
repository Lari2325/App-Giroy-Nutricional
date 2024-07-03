import styled from "styled-components/native"
import colors from "../../views/Theme/colors"

const ContainerFormEstilizado = styled.View`
    margin-top: 10px;
`

const ContainerEsqueciMinhaSenha = styled.View`
    align-items: center;
    margin-top: 10px;
`

const ContainerInput = styled.View`
    position: relative;
    flex-direction: row;
    margin-top: 10px;
`

const IconButtonWrapper = styled.View`
    background: ${colors.primary};
    position: absolute;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
`


const IconContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    gap: 20px;
`;

const BoxRedeSocial = styled.View`
    background-color: ${colors.primary};
`;

const LinhaDivisao = styled.View`
    width: 40%;
    height: 2px;
    background-color: black;
`

const ContainerDivisao = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
`

const ContainerFazerCadastro = styled.View`
    align-items: center;
    margin-top: 50px;
`

const ContainerLogin = styled.View`
    flex: 1;
    padding: 50px 10px;
    justify-content: center;
    background-color: ${colors.white};
`
    
const TituloLogin = styled.Text`
    color:  ${colors.primary};
    font-size: 40px;
    font-family: 'GilroyBold';
`

export {
    ContainerFormEstilizado,
    ContainerEsqueciMinhaSenha,
    ContainerInput,
    IconButtonWrapper,
    IconContainer,
    BoxRedeSocial,
    LinhaDivisao,
    ContainerDivisao,
    ContainerFazerCadastro,
    ContainerLogin,
    TituloLogin
}