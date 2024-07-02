import React from 'react';
import styled from "styled-components/native";
import colors from '../Theme/colors';
import { useFonts } from "expo-font";
import Form from "./Form";
import Divisao from "./Divisao";
import { Text, View } from "react-native";
import RedesSociais from "./RedesSociais";
import { Link, useNavigation } from "@react-navigation/native";
import TituloFormulario from "../../components/TituloFormulario";
import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

export const ContainerFazerCadastro = styled.View`
    align-items: center;
    margin-top: 50px;
`

export const ContainerLogin = styled.View`
    flex: 1;
    padding: 50px 10px;
    justify-content: center;
    background-color: ${colors.white};
`
    
export const TituloLogin = styled.Text`
    color:  ${colors.primary};
    font-size: 40px;
    font-family: 'GilroyBold';
`

function EsqueceuSenhaView(){

    const [loaded]  = useFonts({
        GilroyBold: require('../Fonts/Gilroy-Bold.ttf'),
    });
    
    if(!loaded){
        return null;
    }

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