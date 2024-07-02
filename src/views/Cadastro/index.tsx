import React from 'react';
import styled from "styled-components/native";
import colors from '../Theme/colors';
import { useFonts } from "expo-font";
import Form from "./Form";
import Divisao from "./Divisao";
import { View } from "react-native";
import RedesSociais from "./RedesSociais";
import { ScrollView } from 'react-native';

export const ContainerFazerCadastro = styled.View`
    align-items: center;
    margin-top: 0px;
`

export const ContainerLogin = styled.SafeAreaView`
    flex: 1;
    padding: 25px 10px 0 10px;
    justify-content: space-between;
    background-color: ${colors.white};
`

export const ContainerScrollView = styled.View`
    padding: 50px 0px;
`
    
export const TituloLogin = styled.Text`
    color:  ${colors.primary};
    font-size: 40px;
    font-family: 'GilroyBold';
`

function Cadastro(){

    const [loaded]  = useFonts({
        GilroyBold: require('../Fonts/Gilroy-Bold.ttf'),
    });
    
    if(!loaded){
        return null;
    }

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