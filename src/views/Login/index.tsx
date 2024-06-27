import styled from "styled-components/native";
import colors from '../Theme/colors';
import { useFonts } from "expo-font";
import Form from "./Form";
import Divisao from "./Divisao";
import { View } from "react-native";
import RedesSociais from "./RedesSociais";
import { Link } from "@react-navigation/native";
import TituloFormulario from "../../components/TituloFormulario";

export const ContainerFazerCadastro = styled.View`
    align-items: center;
    margin-top: 50px;
`

export const ContainerLogin = styled.View`
    flex: 1;
    padding: 50px 10px;
    justify-content: space-between;
    background-color: ${colors.secondary};
`
    
export const TituloLogin = styled.Text`
    color:  ${colors.primary};
    font-size: 40px;
    font-family: 'GilroyBold';
`

function LoginView(){

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
                <Link to={{ screen: 'Profile', params: { id: 'jane' } }}>
                    <TituloFormulario name="Esqueceu sua senha?" />
                </Link>
            </ContainerFazerCadastro>
        </ContainerLogin>
    )
}

export default LoginView;