import styled from 'styled-components/native';
import colors from '../../../views/Theme/colors';

const ContainerScrollView = styled.View`
    flex: 1;
    width: 100%;
    padding: 80px 20px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.white};
`;

const BotaoPeso = styled.TouchableOpacity`
    width: 100%;
    padding: 15px 20px;
    background-color: ${colors.primary};
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
`;

const BotaoTexto = styled.Text`
    color: ${colors.white};
    font-size: 18px;
    text-transform: uppercase;
    font-family: 'GilroyBold';
`;

const Input = styled.TextInput`
    width: 100%;
    border-color: ${colors.tertiary};
    border-width: 2px;
    padding: 12px 15px;
    font-size: 18px;
    margin-bottom: 12px;
`;

const ContainerBotoes = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

const LarguraBotao = styled.View`
    flex: 1;
    margin-right: 10px;
`;

const ContainerBoxInf = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const InputContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const SmallInput = styled.TextInput`
    width: 48%;
    border-color: ${colors.tertiary};
    border-width: 2px;
    padding: 12px 15px;
    font-size: 18px;
    margin-bottom: 12px;
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
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
`

const ContainerLogin = styled.SafeAreaView`
    flex: 1;
    padding: 25px 10px 0 10px;
    justify-content: space-between;
    background-color: ${colors.white};
`
    
const TituloLogin = styled.Text`
    color:  ${colors.primary};
    font-size: 40px;
    font-family: 'GilroyBold';
`

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

export {
    ContainerScrollView,
    BotaoPeso,
    BotaoTexto,
    Input,
    ContainerBotoes,
    LarguraBotao,
    ContainerBoxInf,
    InputContainer,
    SmallInput,
    LinhaDivisao,
    ContainerDivisao,
    ContainerLogin,
    TituloLogin,
    ContainerFormEstilizado,
    ContainerEsqueciMinhaSenha,
    ContainerInput,
    IconButtonWrapper,
    IconContainer,
    BoxRedeSocial,
};