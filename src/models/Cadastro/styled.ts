import styled from 'styled-components/native';
import colors from '../../views/Theme/colors';

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
};