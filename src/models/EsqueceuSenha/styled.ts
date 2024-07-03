import styled from "styled-components/native";
import colors from "../../views/Theme/colors";

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

const ContainerFormEstilizado = styled.View`
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

export {
    ContainerLogin,
    TituloLogin,
    ContainerFormEstilizado,
    ContainerInput,
    IconButtonWrapper
};