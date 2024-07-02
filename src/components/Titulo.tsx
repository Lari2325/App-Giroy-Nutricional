import React from "react";
import styled from "styled-components/native";
import colors from "../views/Theme/colors";

type TituloProps = {
    name: string;
    color?: string;
    textAlign?: string;
    marginBottom?: string;
}

const TituloEstilizado = styled.Text<{textAlign? : string, color?: string,  marginBottom?: string}>`
    color: ${(props)=> props.color ?? colors.tertiary};
    font-weight: bold;
    font-size: 25px;
    margin-bottom: ${(props)=> props.marginBottom ?? '30px'};
    text-transform: uppercase;
    text-align: ${(props)=> props.textAlign ?? 'center'};
`;

const Titulo = (props : TituloProps)=> {
    return (
        <TituloEstilizado textAlign={props.textAlign} marginBottom={props.marginBottom} color={props.color}>
            {props.name}
        </TituloEstilizado>
    )
}

export default Titulo;