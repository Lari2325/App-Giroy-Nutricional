import { useState } from "react";
import { supabase } from "../../db";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

const useLoginViewmodels = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState(''); 

  const goToNextEsqueceuSenhaView = () => {
    navigation.navigate('EsqueceuSenha');
  };

  const NavegarTelaInicial = () => {
    navigation.navigate('TelaInicial');
  };

  const handleLogin = async () => {
    const { data, error } = await supabase
      .from('cliente')
      .select('id, nome') 
      .eq('email', email)
      .eq('senha', senha)
      .single();

    if (error) {
      Alert.alert("Erro", "Email ou senha inválidos");
    } else {
      if (data) {
        setNomeUsuario(data.nome);
        NavegarTelaInicial();
      }
    }
  };

  return { email, senha, nomeUsuario, setEmail, setSenha, handleLogin, goToNextEsqueceuSenhaView };
};

export default useLoginViewmodels;