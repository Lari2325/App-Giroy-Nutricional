import React from 'react';
import Form from "./Form";
import { View } from "react-native";
import Font from "../../models/Styleds/Fonts";

import {
    ContainerLogin,
    TituloLogin
} from '../../models/Styleds/EsqueceuSenha/styled';

function EsqueceuSenhaView(){
    
    Font();
    
    return (
        <ContainerLogin>
            <View>
                <View>
                    <TituloLogin>Redefinição de senha</TituloLogin>
                </View>
                <Form />
            </View>
        </ContainerLogin>
    )
}

export default EsqueceuSenhaView;