import styled from "styled-components/native";
import colors from "../views/Theme/colors";

export const InputFormularioEstilizado = styled.TextInput`
    width: 100%;
    height: 50px;
    border-bottom-color: ${colors.primary};
    border-bottom-width: 2px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 18px;
    font-family: 'GilroyBold';
    padding-left: 60px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
`

type PlaceholderInput = {
    placeholder: string,
    secureTextEntry?: boolean;
}

const Input = (props: PlaceholderInput) => {
    return (
        <InputFormularioEstilizado 
            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
        />
    )
}

export default Input;