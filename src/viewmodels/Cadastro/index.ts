import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { supabase } from "../../db";
import { Alert } from "react-native";

const useCadastroViewmodels = () => {
    const navigation = useNavigation();
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const voltarPaginaLogin = () => {
        navigation.navigate('LoginView');
    };

    const validarEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validarSenha = (senha) => {
        return senha.length >= 6;
    };

    const handleRegister = async () => {
        
        if (!nome || !email || !senha || !confirmarSenha) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        if (!validarEmail(email)) {
            Alert.alert("Erro", "Por favor, insira um email válido.");
            return;
        }

        if (!validarSenha(senha)) {
            Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        if (senha !== confirmarSenha) {
            Alert.alert("Erro", "As senhas não coincidem.");
            return;
        }

        const { data, error } = await supabase
            .from('cliente')
            .insert([
                { nome, email, senha }
            ]);

        if (error) {
            Alert.alert("Erro", "Não foi possível cadastrar o usuário.");
            console.error(error);
        } else {
            Alert.alert("Sucesso", "Usuário cadastrado com sucesso.");
            navigation.navigate('LoginView');
        }
    };

    return {
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
    };
};

export default useCadastroViewmodels;