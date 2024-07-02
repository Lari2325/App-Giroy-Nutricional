import React from "react";
import styled from "styled-components/native";
import colors from "../views/Theme/colors";

type TituloFormularioProps = {
    color?: string;
    fontSize? : string;
    textAlign? : string;
    name: string;
    marginTop? : string;
    marginBottom? : string;
};

const TituloFormularioEstilizado = styled.Text<{ color?: string, fontSize? : string, textAlign? : string, marginTop? : string, marginBottom? : string }>`
    font-weight: bold;
    font-family: 'GilroyBold';
    margin-top: 10px;
    margin-top: ${(props) => props.marginTop ?? '10px'};
    margin-bottom: ${(props) => props.marginBottom ?? '10px'};
    color: ${(props) => props.color ?? colors.primary}; 
    font-size: ${(props) => props.fontSize ?? '20px'};
    text-align: ${(props) => props.textAlign ?? 'start'};
`;

const TituloFormulario = (props: TituloFormularioProps) => {
    return (
        <TituloFormularioEstilizado marginTop={props.marginTop} marginBottom={props.marginBottom} textAlign={props.textAlign} fontSize={props.fontSize} color={props.color}>
            {props.name}
        </TituloFormularioEstilizado>
    );
};

export default TituloFormulario;