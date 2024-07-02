import styled from "styled-components/native";
import colors from "../Theme/colors";
import Botao from "../../components/Botao";
import { useNavigation } from "@react-navigation/native";

export const ContainerFormEstilizado = styled.View`
    margin-top: 10px;
`

export const ContainerEsqueciMinhaSenha = styled.View`
    align-items: center;
    margin-top: 10px;
`

export const ContainerInput = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
    gap: 20px;
    margin-top: 10px;
`

export const Input = styled.TextInput`
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

export const IconButtonWrapper = styled.View`
    background: ${colors.primary};
    position: absolute;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
`

function Form(){

    const navigation = useNavigation();

    const goToNextLoginView = () => {
        navigation.navigate('LoginView');
    };

    return (
        <ContainerFormEstilizado>
            <ContainerInput>
                <Input placeholder="" />
                <Input placeholder="" />
                <Input placeholder="" />
                <Input placeholder="" />
                <Input placeholder="" />
            </ContainerInput>
            <Botao 
                title="Enviar" 
                onPress={goToNextLoginView}
            />
        </ContainerFormEstilizado>
    )
}

export default Form;