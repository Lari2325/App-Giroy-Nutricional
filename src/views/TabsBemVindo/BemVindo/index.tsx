import React from 'react';
import styled from 'styled-components/native';
import colors from '../../Theme/colors';
import TituloFormulario from '../../../components/TituloFormulario';
import { IconButton } from 'react-native-paper';

const ContainerBemVindo = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${colors.secondary};
    padding: 50px 10px;
`

const ContainerArrow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

function BemVindo(){
    return(
        <ContainerBemVindo>
            <ContainerArrow>
                <TituloFormulario name="Arraste para o lado" />
                <IconButton icon="arrow-right" iconColor={colors.tertiary} size={20} onPress={() => {}} />
            </ContainerArrow>
        </ContainerBemVindo>
    )
}

export default BemVindo;