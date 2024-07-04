import { useState, useEffect } from "react";
import { supabase } from "../../db";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLoginViewmodels = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [fotoUsuario, setFotoUsuario] = useState('');

  useEffect(() => {
    const loadUser = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        const user = await fetchUserFromToken(token);
        if (user) {
          setNomeUsuario(user.nome);
          setFotoUsuario(user.foto);
        }
      }
    };
    loadUser();
  }, []);

  const fetchUserFromToken = async (token: string) => {
    const { data, error } = await supabase
      .from('cliente')
      .select('nome, foto')
      .eq('token', token)
      .single();

    if (error) {
      return null;
    }
    return data;
  };

  const handleLogin = async () => {
    const { data, error } = await supabase
      .from('cliente')
      .select('id, nome, foto')
      .eq('email', email)
      .eq('senha', senha)
      .single();

    if (error) {
      Alert.alert("Erro", "Email ou senha inválidos");
    } else {
      if (data) {
        setNomeUsuario(data.nome);
        const token = generateToken();
        await supabase
          .from('cliente')
          .update({ token })
          .eq('id', data.id);
        await AsyncStorage.setItem('token', token);
        NavegarTelaInicial();
      }
    }
  };

  const generateToken = (): string => {
    return Math.random().toString(36).substring(2);
  };

  const NavegarTelaInicial = () => {
    navigation.navigate('TelaInicial');
  };

  const goToNextEsqueceuSenhaView = () => {
    navigation.navigate('EsqueceuSenha');
  };

  return { email, senha, nomeUsuario, fotoUsuario, setEmail, setSenha, handleLogin, goToNextEsqueceuSenhaView };
};

export default useLoginViewmodels;