import Botao from "../../components/Botao";
import { useNavigation } from "@react-navigation/native";

import {
    ContainerFormEstilizado,
    ContainerInput,
    Input
} from "../../models/Styleds/CodigoValidacaoEmail/styled";

function Form(){

    const navigation = useNavigation();

    const goToNextLoginView = () => {
        navigation.navigate('LoginView');
    };

    return (
        <ContainerFormEstilizado>
            <ContainerInput>
                <Input placeholder="" />
                <Input placeholder="" />
                <Input placeholder="" />
                <Input placeholder="" />
                <Input placeholder="" />
            </ContainerInput>
            <Botao 
                title="Enviar" 
                onPress={goToNextLoginView}
            />
        </ContainerFormEstilizado>
    )
}

export default Form;