import React from 'react';
import { useFonts } from "expo-font";
import Form from "./Form";
import { View } from "react-native";
import Font from "../../models/Styleds/Fonts";

import {
    ContainerLogin,
    TituloLogin
} from "../../models/Styleds/CodigoValidacaoEmail/styled"


function CodigoValidacaoEmailView(){

    Font();

    return (
        <ContainerLogin>
            <View>
                <View>
                    <TituloLogin>Insira o codigo enviado ao seu e-mail</TituloLogin>
                </View>
                <Form />
            </View>
        </ContainerLogin>
    )
}

export default CodigoValidacaoEmailView;