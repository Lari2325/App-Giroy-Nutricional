import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import TituloFormulario from "../../components/TituloFormulario";
import Input from "../../components/Input";
import Botao from "../../components/Botao";
import useLoginViewmodels from "../../viewmodels/Login/RealizarLogin";

import {
  ContainerFormEstilizado,
  ContainerEsqueciMinhaSenha,
  ContainerInput,
  IconButtonWrapper
} from "../../models/Styleds/Login/styled";

const Form: React.FC = () => {
  const {
    email,
    setEmail,
    senha,
    setSenha,
    handleLogin,
    goToNextEsqueceuSenhaView
  } = useLoginViewmodels();

  const onLoginPress = () => {
    console.log('Login button pressed');
    handleLogin();
  };

  return (
    <ContainerFormEstilizado>
      <TituloFormulario name="E-mail:" />
      <ContainerInput>
        <IconButtonWrapper>
        </IconButtonWrapper>
        <Input 
          placeholder="Digite seu E-mail"
          value={email}
          onChangeText={setEmail} 
        />
      </ContainerInput>
      <TituloFormulario name="Senha:" />
      <ContainerInput>
        <IconButtonWrapper>
        </IconButtonWrapper>
        <Input 
          secureTextEntry={true}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
        />
      </ContainerInput>
      <Botao
        onPress={onLoginPress}
        title="Fazer login"
      />
      <ContainerEsqueciMinhaSenha>
        <TouchableOpacity onPress={goToNextEsqueceuSenhaView} >
          <Text>
            <TituloFormulario name="Esqueceu sua senha?" />
          </Text>
        </TouchableOpacity>
      </ContainerEsqueciMinhaSenha>
    </ContainerFormEstilizado>
  );
};

export default Form;