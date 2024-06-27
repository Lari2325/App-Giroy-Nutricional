import TituloFormulario from "../../components/TituloFormulario";
import styled from "styled-components/native";
import Input from "../../components/Input";
import { IconButton } from 'react-native-paper';
import colors from "../Theme/colors";
import Botao from "../../components/Botao";
import { Link } from "@react-navigation/native";

export const ContainerFormEstilizado = styled.View`
    margin-top: 10px;
`

export const ContainerEsqueciMinhaSenha = styled.View`
    align-items: center;
    margin-top: 10px;
`

export const ContainerInput = styled.View`
    position: relative;
    flex-direction: row;
    margin-top: 10px;
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
    return (
        <ContainerFormEstilizado>
            <TituloFormulario name="Nome:" />
            <ContainerInput>
                <IconButtonWrapper>
                    <IconButton icon="account" iconColor="#fff" size={20} onPress={() => {}} />
                </IconButtonWrapper>
                <Input placeholder="Digite seu nome completo:" />
            </ContainerInput>
            <TituloFormulario name="Senha:" />
            <ContainerInput>
                <IconButtonWrapper>
                    <IconButton icon="lock" iconColor="#fff" size={20} onPress={() => {}} />
                </IconButtonWrapper>
                <Input 
                    secureTextEntry={true}
                    placeholder="Digite sua senha:" 
                />
            </ContainerInput>
            <Botao title="Fazer login" />
            <ContainerEsqueciMinhaSenha>
                <Link to={{ screen: 'Profile', params: { id: 'jane' } }}>
                    <TituloFormulario name="Esqueceu sua senha?" />
                </Link>
            </ContainerEsqueciMinhaSenha>
        </ContainerFormEstilizado>
    )
}

export default Form;