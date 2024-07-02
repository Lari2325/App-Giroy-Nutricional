import React from 'react';
import styled from "styled-components/native";
import colors from '../Theme/colors';
import { useFonts } from "expo-font";
import Form from "./Form";
import { View } from "react-native";

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

function CodigoValidacaoEmailView(){

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
                    <TituloLogin>Insira o codigo enviado ao seu e-mail</TituloLogin>
                </View>
                <Form />
            </View>
        </ContainerLogin>
    )
}

export default CodigoValidacaoEmailView;