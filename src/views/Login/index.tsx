import React from 'react';
import Form from "./Form";
import Divisao from "./Divisao";
import { Text, View } from "react-native";
import RedesSociais from "./RedesSociais";
import { useNavigation } from "@react-navigation/native";
import TituloFormulario from "../../components/TituloFormulario";
import { Button } from 'react-native-paper';
import Font from "../../models/Fonts/";

import {
    ContainerFazerCadastro,
    ContainerLogin,
    TituloLogin
} from '../../models/Login/styled';


function LoginView(){

    Font();

    const navigation = useNavigation();

    const goToNextCadastroView = () => {
        navigation.navigate('Cadastro');
    };

    return (
        <ContainerLogin>
            <View>
                <View>
                    <TituloLogin>Seja</TituloLogin>
                    <TituloLogin>Bem-vindo(a)</TituloLogin>
                </View>
                <Form />
            </View>
            <Divisao />
            <View>
                <RedesSociais />
            </View>

            <ContainerFazerCadastro>
                <Button
                 onPress={goToNextCadastroView}
                >
                    <Text>
                        <TituloFormulario name="Não tenho uma conta" />
                    </Text>
                </Button>
            </ContainerFazerCadastro>

        </ContainerLogin>
    )
}

export default LoginView;