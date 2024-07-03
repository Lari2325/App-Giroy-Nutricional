import styled from "styled-components/native"
import colors from "../../views/Theme/colors"

const ContainerFormEstilizado = styled.View`
    margin-top: 10px;
`

const ContainerInput = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
    gap: 20px;
    margin-top: 10px;
`

const Input = styled.TextInput`
    border-color: ${colors.primary};
    border-width: 2px;
    position: relative;
    text-align: center;
    flex-direction: row;
    gap: 20px;
    margin-top: 10px;
    width: 15%;
    height: 50px;
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
    ContainerInput,
    Input,
    ContainerLogin,
    TituloLogin
};