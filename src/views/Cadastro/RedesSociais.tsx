import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { IconButton } from 'react-native-paper';

import {
    IconContainer,
    BoxRedeSocial,
} from '../../models/Cadastro/styled';

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
