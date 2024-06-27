import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native'; 
import colors from '../../Theme/colors';
import ImagemLogo from './assets/Logo-White.png';
import Botao from '../../../components/Botao';

const ContainerLoginCadastro = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary};
    padding: 50px 10px;
`;

const LogoBemVindo = styled.Image`
    width: 200px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 30px;
`;

function LoginCadastro() {

    const [loaded] = useFonts({
        GilroyBold: require('../../Fonts/Gilroy-Bold.ttf'),
    });
    
    if (!loaded) {
        return null;
    }

    return (
        <ContainerLoginCadastro>
            <LogoBemVindo source={ImagemLogo} />

            <Botao 
                title="Fazer Login" 
                pressedColor="#d4d4d4" 
                color="#fff" 
                textColor={colors.tertiary} 
            />

            <Botao 
                title="Cadastrar" 
                pressedColor="#d4d4d4" 
                color="#fff" 
                textColor={colors.tertiary} 
            />
        </ContainerLoginCadastro>
    );
}

export default LoginCadastro;