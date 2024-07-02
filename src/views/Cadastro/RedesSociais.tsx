import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { IconButton } from 'react-native-paper';
import styled from 'styled-components/native';
import colors from '../Theme/colors';

const IconContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    gap: 20px;
`;

const BoxRedeSocial = styled.View`
    background-color: ${colors.primary};
`;

function RedesSociais(){
    return (
        <IconContainer>
            <TouchableWithoutFeedback onPress={() => {}}>
                <BoxRedeSocial>
                    <IconButton icon="facebook" iconColor="#fff" size={20} />
                </BoxRedeSocial>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {}}>
                <BoxRedeSocial>
                    <IconButton icon="google" iconColor="#fff" size={20} />
                </BoxRedeSocial>
            </TouchableWithoutFeedback>
        </IconContainer>
    )
}

export default RedesSociais;
