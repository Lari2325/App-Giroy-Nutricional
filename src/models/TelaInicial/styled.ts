import styled from "styled-components/native"
import colors from "../../views/Theme/colors"
import { Platform } from "react-native"

const Container = styled.ScrollView`
    flex: 1;
    background-color: ${colors.white};
`

const ImagePerfil = styled.Image`
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 100px;
`

const ContainerPerfil = styled.View`
    flex-direction: row;
    gap: 20px;
    padding: 30px 10px;
    align-items: center;
    justify-content: start;
    background: ${colors.secondary};
`

const ContainerTelaInicial = styled.View`
    padding: 30px 10px;
`

const ContainerAnaliseResumida = styled.View`
    background-color: ${colors.white};
    padding: 20px 15px;
    width: 100%;
    flex-direction: row;
    justify-content: start;
    ${Platform.select({
        ios: `
        shadow-color: #000;
        shadow-offset: { width: 0px, height: 4px };
        shadow-opacity: 0.3;
        shadow-radius: 5px;
        `,
        android: `
            elevation: 2;
        `,
    })}
`;

const ContainerCalorias = styled.View`
    alignItems: center;
    justify-content: center;
    width: 30%;
    height: 100%;
    background-color: ${colors.white};
    border-top-color: ${colors.tertiary};
    border-bottom-color: ${colors.secondary};
    border-left-color: ${colors.secondary};
    border-right-color: ${colors.tertiary};
    border-width: 2px;

     ${Platform.select({
        ios: `
        shadow-color: #000;
        shadow-offset: { width: 0px, height: 4px };
        shadow-opacity: 0.3;
        shadow-radius: 5px;
        `,
        android: `
            elevation: 2;
        `,
    })}
`

const ContainerInformacoesAnalisa = styled.View`
    background-color: ${colors.white};
    padding: 0 10px;
    width: 70%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`

const ContainerInformacaoAnalisa = styled.View`
    flex-direction: row;
    width: 47%;
`

export {
    Container,
    ImagePerfil,
    ContainerPerfil,
    ContainerAnaliseResumida,
    ContainerTelaInicial,
    ContainerCalorias,
    ContainerInformacaoAnalisa,
    ContainerInformacoesAnalisa
};