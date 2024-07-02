import TituloFormulario from "../../components/TituloFormulario";
import styled from "styled-components/native";
import Input from "../../components/Input";
import { IconButton } from 'react-native-paper';
import colors from "../Theme/colors";
import Botao from "../../components/Botao";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

    const navigation = useNavigation();

    const voltarPaginaLogin = () => {
        navigation.navigate('LoginView');
    }

    const CadastrarInformacoes = () => {
        navigation.navigate('CadastroConfirmacao');
    }

    return (
        <ContainerFormEstilizado>
            <TituloFormulario name="Nome:" />
            <ContainerInput>
                <IconButtonWrapper>
                    <IconButton icon="account" iconColor="#fff" size={20} onPress={() => {}} />
                </IconButtonWrapper>
                <Input placeholder="Digite seu nome completo:" />
            </ContainerInput>

            <TituloFormulario name="E-mail:" />
            <ContainerInput>
                <IconButtonWrapper>
                    <IconButton icon="email" iconColor="#fff" size={20} onPress={() => {}} />
                </IconButtonWrapper>
                <Input placeholder="Digite seu e-mail:" />
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

            <TituloFormulario name="Confirme sua senha:" />
            <ContainerInput>
                <IconButtonWrapper>
                    <IconButton icon="lock" iconColor="#fff" size={20} onPress={() => {}} />
                </IconButtonWrapper>
                <Input 
                    secureTextEntry={true}
                    placeholder="Confirme sua senha:" 
                />
            </ContainerInput>

            <Botao 
                title="Cadastrar" 
                onPress={CadastrarInformacoes}
            />

            <ContainerEsqueciMinhaSenha>
                <TouchableOpacity
                    onPress={voltarPaginaLogin}
                >
                    <TituloFormulario name="Já tenho uma conta!" />
                </TouchableOpacity>
            </ContainerEsqueciMinhaSenha>

        </ContainerFormEstilizado>
    )
}

export default Form;