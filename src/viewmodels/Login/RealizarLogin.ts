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
  const [nascimentoUsuario, setNascimentoUsuario] = useState('');
  const [metaPesoUsuario, setMetaPesoUsuario] = useState('');
  const [alturaUsuario, setAlturaUsuario] = useState('');
  const [sexoUsuario, setSexoUsuario] = useState('');
  const [objetivoUsuario, setObjetivoUsuario] = useState('');
  const [atividadeDiariaUsuario, setAtividadeDiariaUsuario] = useState('');
  const [tipoDietaUsuario, setTipoDietaUsuario] = useState('');
  const [problemasSaudeUsuario, setProblemasSaudeUsuario] = useState('');
  const [refeicoesUsuario, setRefeicoesUsuario] = useState('');

  useEffect(() => {
    const loadUser = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        const user = await fetchUserFromToken(token);
        if (user) {
          setNomeUsuario(user.nome);
          setFotoUsuario(user.foto);
          setNascimentoUsuario(user.dt_nascimento);
          setMetaPesoUsuario(user.meta_peso);
          setAlturaUsuario(user.altura);
          setSexoUsuario(user.sexo);
          setObjetivoUsuario(user.objetivo);
          setAtividadeDiariaUsuario(user.atividade_diaria);
          setTipoDietaUsuario(user.tipo_dieta);
          setProblemasSaudeUsuario(user.problemas_saude);
          setRefeicoesUsuario(user.refeicoes);


        }
      }
    };
    loadUser();
  }, []);

  const fetchUserFromToken = async (token: string) => {
    const { data, error } = await supabase
      .from('cliente')
      .select(
        'nome, foto, dt_nascimento, meta_peso, altura, sexo, objetivo, atividade_diaria, tipo_dieta, problemas_saude, refeicoes'
      )
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
      .select(
        'id, nome, foto, dt_nascimento, meta_peso, altura, sexo, objetivo, atividade_diaria, tipo_dieta, problemas_saude, refeicoes'
      )
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
    if(
      !nascimentoUsuario || 
      !metaPesoUsuario || 
      !alturaUsuario  || 
      !sexoUsuario || 
      !objetivoUsuario || 
      !objetivoUsuario || 
      !atividadeDiariaUsuario || 
      !tipoDietaUsuario || 
      !problemasSaudeUsuario || 
      !problemasSaudeUsuario || 
      !refeicoesUsuario
    ){
      navigation.navigate('CadastroConfirmacao');
      return null;
    }else{
      navigation.navigate('TelaInicial');
    }
  };

  const goToNextEsqueceuSenhaView = () => {
    navigation.navigate('EsqueceuSenha');
  };

  return { email, senha, nomeUsuario, fotoUsuario, nascimentoUsuario, metaPesoUsuario, alturaUsuario, sexoUsuario, objetivoUsuario, atividadeDiariaUsuario, tipoDietaUsuario, problemasSaudeUsuario, refeicoesUsuario, setEmail, setSenha, handleLogin, goToNextEsqueceuSenhaView };
};

export default useLoginViewmodels;