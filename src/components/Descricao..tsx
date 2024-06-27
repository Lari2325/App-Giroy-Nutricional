import React from 'react';
import styled, { DefaultTheme } from 'styled-components/native';

type TextoDescricaoProps = {
    title: string;
    color?: string;
};

const TextoDivisao = styled.Text<{ textColor: string }>`
    font-size: 20px;
    color: ${({ textColor }) => textColor || 'black'};
    font-family: 'GilroyBold';
`;

const Descricao = (props: TextoDescricaoProps) => {
    return (
        <TextoDivisao textColor={props.color}>
            {props.title}
        </TextoDivisao>
    );
};

export default Descricao;