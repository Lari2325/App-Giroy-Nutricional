import TituloFormulario from "../../components/TituloFormulario";
import Input from "../../components/Input";
import { IconButton } from 'react-native-paper';
import Botao from "../../components/Botao";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
    ContainerFormEstilizado,
    ContainerEsqueciMinhaSenha,
    ContainerInput,
    IconButtonWrapper,
} from "../../models/Cadastro/styled";

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