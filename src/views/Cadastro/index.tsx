import React from 'react';
import Font from "../../models/Fonts/";
import Form from "./Form";
import Divisao from "./Divisao";
import { View } from "react-native";
import RedesSociais from "./RedesSociais";
import { ScrollView } from 'react-native';

import {
    ContainerLogin,
    TituloLogin,
    ContainerScrollView
} from '../../models/Cadastro/styled';

function Cadastro(){

    Font();

    return (
        <ContainerLogin>
            <ScrollView>
                <ContainerScrollView>
                    <View>
                        <View>
                            <TituloLogin>Cadastrar</TituloLogin>
                        </View>
                        <Form />
                    </View>
                    <Divisao />
                    <View>
                        <RedesSociais />
                    </View>
                </ContainerScrollView>
            </ScrollView>
        </ContainerLogin>
    )
}

export default Cadastro;