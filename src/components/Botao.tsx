import React, { useState } from 'react';
import colors from '../views/Theme/colors';
import styled from 'styled-components/native';
import { TouchableWithoutFeedback } from 'react-native';

type ButtonProps = {
    title: string;
    onPress?: () => void;
    color?: string;
    textColor?: string;
    pressedColor?: string;
};

const ButtonWrapper = styled.View<{ backgroundColor: string }>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    padding: 15px 20px;
    margin-top: 20px;
    width: 100%;
`;

const ButtonText = styled.Text<{ color: string }>`
    text-transform: uppercase;
    color: ${({ color }) => color};
    font-size: 16px;
    text-align: center;
    font-family: 'GilroyBold';
`;

const Botao = ({ title, onPress, color, textColor, pressedColor }: ButtonProps) => {
    const defaultColor = color || colors.primary;
    const defaultTextColor = textColor || colors.white;
    const defaultPressedColor = pressedColor || colors.tertiary;
    const [backgroundColor, setBackgroundColor] = useState(defaultColor);

    const onPressIn = () => {
        setBackgroundColor(defaultPressedColor);
    };

    const onPressOut = () => {
        setBackgroundColor(defaultColor);
    };

    return (
        <TouchableWithoutFeedback onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
            <ButtonWrapper backgroundColor={backgroundColor}>
                <ButtonText color={defaultTextColor}>{title}</ButtonText>
            </ButtonWrapper>
        </TouchableWithoutFeedback>
    );
};

export default Botao;