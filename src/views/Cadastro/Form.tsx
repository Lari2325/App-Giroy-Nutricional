import React from 'react';
import { TouchableOpacity } from 'react-native';
import TituloFormulario from "../../components/TituloFormulario";
import Input from "../../components/Input";
import { IconButton } from 'react-native-paper';
import Botao from "../../components/Botao";

import {
    ContainerFormEstilizado,
    ContainerEsqueciMinhaSenha,
    ContainerInput,
    IconButtonWrapper,
} from "../../models/Styleds/Cadastro/styled";
import useCadastroViewmodels from '../../viewmodels/Cadastro';

function Form() {
    const {
        nome,
        setNome,
        email,
        setEmail,
        senha,
        setSenha,
        confirmarSenha,
        setConfirmarSenha,
        handleRegister,
        voltarPaginaLogin
    } = useCadastroViewmodels();

    return (
        <ContainerFormEstilizado>
            <TituloFormulario name="Nome:" />
            <ContainerInput>
                <IconButtonWrapper>
                    <IconButton icon="account" iconColor="#fff" size={20} onPress={() => {}} />
                </IconButtonWrapper>
                <Input 
                    placeholder="Digite seu nome completo:" 
                    value={nome}
                    onChangeText={setNome}
                />
            </ContainerInput>

            <TituloFormulario name="E-mail:" />
            <ContainerInput>
                <IconButtonWrapper>
                    <IconButton icon="email" iconColor="#fff" size={20} onPress={() => {}} />
                </IconButtonWrapper>
                <Input 
                    placeholder="Digite seu e-mail:" 
                    value={email}
                    onChangeText={setEmail}
                />
            </ContainerInput>

            <TituloFormulario name="Senha:" />
            <ContainerInput>
                <IconButtonWrapper>
                    <IconButton icon="lock" iconColor="#fff" size={20} onPress={() => {}} />
                </IconButtonWrapper>
                <Input 
                    secureTextEntry={true}
                    placeholder="Digite sua senha:" 
                    value={senha}
                    onChangeText={setSenha}
                />
            </ContainerInput>

            <TituloFormulario name="Confirme sua senha:" />
            <ContainerInput>
                <IconButtonWrapper>
                    <IconButton icon="lock" iconColor="#fff" size={20} onPress={() => {}} />
                </IconButtonWrapper>
                <Input 
                    secureTextEntry={true}
                    placeholder="Confirme sua senha:" 
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                />
            </ContainerInput>

            <Botao 
                title="Cadastrar" 
                onPress={handleRegister}
            />

            <ContainerEsqueciMinhaSenha>
                <TouchableOpacity
                    onPress={voltarPaginaLogin}
                >
                    <TituloFormulario name="Já tenho uma conta!" />
                </TouchableOpacity>
            </ContainerEsqueciMinhaSenha>
        </ContainerFormEstilizado>
    );
}

export default Form;