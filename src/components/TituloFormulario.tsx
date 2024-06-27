import React from "react";
import styled from "styled-components/native";
import colors from "../views/Theme/colors";

type TituloFormularioProps = {
    color?: string;
    fontSize? : string;
    name: string;
};

const TituloFormularioEstilizado = styled.Text<{ color?: string, fontSize? : string }>`
    font-weight: bold;
    font-family: 'GilroyBold';
    margin-top: 10px;
    margin-bottom: 10px;
    color: ${(props) => props.color ?? colors.primary}; 
    font-size: ${(props) => props.fontSize ?? '20px'};
`;

const TituloFormulario = (props: TituloFormularioProps) => {
    return (
        <TituloFormularioEstilizado fontSize={props.fontSize} color={props.color}>
            {props.name}
        </TituloFormularioEstilizado>
    );
};

export default TituloFormulario;