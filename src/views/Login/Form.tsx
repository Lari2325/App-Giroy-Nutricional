import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TituloFormulario from "../../components/TituloFormulario";
import Input from "../../components/Input";
import Botao from "../../components/Botao";
import useLoginViewmodels from "../../viewmodels/Login/RealizarLogin";

import {
  ContainerFormEstilizado,
  ContainerEsqueciMinhaSenha,
  ContainerInput,
  IconButtonWrapper
} from "../../models/Login/styled";

const Form = () => {
  const {
    email,
    setEmail,
    senha,
    setSenha,
    handleLogin,
    goToNextEsqueceuSenhaView
  } = useLoginViewmodels();

  return (
    <ContainerFormEstilizado>
      <TituloFormulario name="E-mail:" />
      <ContainerInput>
        <IconButtonWrapper>
          {/* Ícone do usuário */}
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
          {/* Ícone de senha */}
        </IconButtonWrapper>
        <Input 
          secureTextEntry={true}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
        />
      </ContainerInput>
      <Botao
        onPress={handleLogin}
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