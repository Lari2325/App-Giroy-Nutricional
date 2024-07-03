import React from 'react';
import { View, Text } from "react-native";
import Titulo from "../../components/Titulo";
import Descricao from "../../components/Descricao.";
import Font from "../../models/Fonts";

import {
  Container,
  ImagePerfil,
  ContainerPerfil,
  ContainerAnaliseResumida,
  ContainerTelaInicial,
  ContainerCalorias,
  ContainerInformacaoAnalisa,
  ContainerInformacoesAnalisa
} from "../../models/TelaInicial/styled";

import colors from "../Theme/colors";
import useLoginViewmodels from "../../viewmodels/Login/RealizarLogin";

const TelaInicialView = () => {
  const { nomeUsuario } = useLoginViewmodels();

  Font();

  return (
    <Container>
      <ContainerPerfil>
        <View>
          <ImagePerfil
            source={{
              uri: 'https://img.freepik.com/fotos-gratis/homem-retrato-rindo_23-2148859448.jpg',
            }}
          />
        </View>
        <View>
          <Titulo textTransform='none' marginBottom='0px' textAlign='start' name='Bem vindo (a)' />
          <Text>
            <Descricao title={nomeUsuario} />
          </Text>
        </View>
      </ContainerPerfil>

      <ContainerTelaInicial>
        <ContainerAnaliseResumida>
          <ContainerCalorias>
            <Text>
              <Descricao color={colors.tertiary} title="Calorias" />
            </Text>
            <Text>
              <Descricao color={colors.quaternary} title="600" />
            </Text>
          </ContainerCalorias>
          <ContainerInformacoesAnalisa>
            <ContainerInformacaoAnalisa>
              <View>
                <Text>
                  <Descricao color={colors.tertiary} title="Meta base" />
                </Text>
                <Text>
                  <Descricao color={colors.quaternary} title="15g" />
                </Text>
              </View>
            </ContainerInformacaoAnalisa>

            <ContainerInformacaoAnalisa>
              <View>
                <Text>
                  <Descricao color={colors.tertiary} title="Alimentos" />
                </Text>
                <Text>
                  <Descricao color={colors.quaternary} title="15g" />
                </Text>
              </View>
            </ContainerInformacaoAnalisa>

            <ContainerInformacaoAnalisa>
              <View>
                <Text>
                  <Descricao color={colors.tertiary} title="Exercicios" />
                </Text>
                <Text>
                  <Descricao color={colors.quaternary} title="15g" />
                </Text>
              </View>
            </ContainerInformacaoAnalisa>
          </ContainerInformacoesAnalisa>
        </ContainerAnaliseResumida>
      </ContainerTelaInicial>
    </Container>
  );
};

export default TelaInicialView;