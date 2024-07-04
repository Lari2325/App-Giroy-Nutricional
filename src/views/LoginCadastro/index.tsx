import React from 'react';
import colors from '../Theme/colors';
import ImagemLogo from './assets/Logo-White.png';
import Botao from '../../components/Botao';
import { useNavigation } from '@react-navigation/native';
import Font from "../../models/Styleds/Fonts";

import {
    ContainerLoginCadastro,
    LogoBemVindo,
} from '../../models/Styleds/LoginCadastro/styled';

function LoginCadastro() {
    
    Font();

    const navigation = useNavigation();

    const goToNextLoginView = () => {
        navigation.navigate('LoginView');
    };

    const goToNextCadastro = () => {
        navigation.navigate('Cadastro');
    };

    return (
        <ContainerLoginCadastro>
            <LogoBemVindo source={ImagemLogo} />

            <Botao 
                title="Fazer Login" 
                pressedColor="#d4d4d4" 
                color="#fff" 
                textColor={colors.tertiary} 
                onPress={goToNextLoginView}
            />

            <Botao 
                title="Cadastrar" 
                pressedColor="#d4d4d4" 
                color="#fff" 
                textColor={colors.tertiary} 
                onPress={goToNextCadastro}
            />
        </ContainerLoginCadastro>
    );
}

export default LoginCadastro;