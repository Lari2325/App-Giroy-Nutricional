import TituloFormulario from "../../components/TituloFormulario";
import Input from "../../components/Input";
import { IconButton } from 'react-native-paper';
import Botao from "../../components/Botao";
import { useNavigation } from "@react-navigation/native";
import Font from "../../models/Fonts/";

import {
    ContainerFormEstilizado,
    ContainerInput,
    IconButtonWrapper
} from '../../models/EsqueceuSenha/styled';

function Form(){

    Font();

    const navigation = useNavigation();

    const CodigoValidacaoEmail = ()=> [
        navigation.navigate('CodigoValidacaoEmail')
    ]

    return (
        <ContainerFormEstilizado>
            <TituloFormulario name="E-mail:" />
            <ContainerInput>
                <IconButtonWrapper>
                    <IconButton icon="account" iconColor="#fff" size={20} onPress={() => {}} />
                </IconButtonWrapper>
                <Input placeholder="Digite seu e-mail:" />
            </ContainerInput>
            <Botao 
                title="Enviar" 
                onPress={CodigoValidacaoEmail}
            />
        </ContainerFormEstilizado>
    )
}

export default Form;