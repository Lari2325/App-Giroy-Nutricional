import React from 'react';
import { View, Text } from "react-native";
import Titulo from "../../components/Titulo";
import Descricao from "../../components/Descricao";
import Font from "../../models/Styleds/Fonts";
import {
  Container,
  ImagePerfil,
  ContainerPerfil,
  ContainerAnaliseResumida,
  ContainerTelaInicial,
  ContainerCalorias,
  ContainerInformacaoAnalisa,
  ContainerInformacoesAnalisa
} from "../../models/Styleds/TelaInicial/styled";

import colors from "../Theme/colors";
import useLoginViewmodels from "../../viewmodels/Login/RealizarLogin";

const TelaInicialView: React.FC = () => {
  const { nomeUsuario, fotoUsuario, alturaUsuario } = useLoginViewmodels();

  Font();

  return (
    <Container>
      <ContainerPerfil>
        <View>
          <ImagePerfil
            source={{
              uri: fotoUsuario ? fotoUsuario : 'https://img.freepik.com/fotos-premium/icone-de-simbolo-de-neon-de-pessoa-elemento-de-interface-ui-ux-de-renderizacao-3d-simbolo-escuro-e-brilhante_187882-2497.jpg?uid=P92197013&ga=GA1.1.414826843.1702319527&semt=ais_user-customized',
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
              <Descricao color={colors.quaternary} title={alturaUsuario} />
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