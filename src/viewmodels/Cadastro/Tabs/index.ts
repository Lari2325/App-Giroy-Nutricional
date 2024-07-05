import { Alert, Platform } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { Cadastro } from "../../../models/Styleds/Cadastro";
import { supabase } from "../../../db";

const InformacoesViewModel = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState(null); 

    const loadUser = async () => {
        try {
            const userString = await AsyncStorage.getItem('token');
            if (userString) {
                setUser(userString); 
            }
        } catch (error) {
            console.error('Erro ao carregar usuário logado:', error);
        }
    };

    useEffect(() => {
        loadUser();
    }, []);

    const NavegarTelaInicial = () => {

        if(currentIndex === 9){
            if (refeicoes.length === 0) {
                Alert.alert("Erro", "Selecione pelo menos uma opção");
                console.error('Sessão refeições inválida:', altura);
                return;
            }
        }

        navigation.navigate('TelaInicial');
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [metaPeso, setMetapeso] = useState('');
    const [peso, setPeso] = useState('');
    const [unit, setUnit] = useState('kg');
    const [altura, setAltura] = useState('Cm');
    const [heightFt, setHeightFt] = useState('');
    const [heightIn, setHeightIn] = useState('');
    const [heightCm, setHeightCm] = useState('');
    const [sexo, setSexo] = useState('F');
    const [objetivo, setObjetivo] = useState('');
    const [problemasSaude, setProblemasSaude] = useState([]);
    const [tipoDieta, setTipoDieta] = useState('');
    const [atividadeDiaria, setAtividadeDiaria] = useState('');
    const [refeicoes, setRefeicoes] = useState([]);

    const handleNext = () => {
        if(currentIndex === 0){
            if (date) {
                const selectedDate = new Date(date);
                const currentDate = new Date();
                const age = currentDate.getFullYear() - selectedDate.getFullYear();
                const monthDiff = currentDate.getMonth() - selectedDate.getMonth();
                const dayDiff = currentDate.getDate() - selectedDate.getDate();
    
                if (age > 18 || (age === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)))) {
                } else {
                    Alert.alert("Erro", "Idade minima de 18 anos");
                    return;
                }
            } else {
                return;
            }
        }

        if(currentIndex === 1){
            const parsedPeso = parseFloat(peso);
            if (!parsedPeso || isNaN(parsedPeso) || parsedPeso < 25) {
                Alert.alert("Erro", "Peso inválido");
                console.error('Peso inválido:', peso);
                return;
            }
        }

        if(currentIndex === 2){
            const parsedMetaPeso = parseFloat(metaPeso);
            if (!parsedMetaPeso || isNaN(parsedMetaPeso) || parsedMetaPeso < 25) {
                Alert.alert("Erro", "Peso inválido");
                console.error('Peso inválido:', metaPeso);
                return;
            }
        }

        if(currentIndex === 3){
            if(altura === 'Cm'){
                const parsedAltura = parseFloat(heightCm);

                if (!parsedAltura || isNaN(parsedAltura) || parsedAltura < 120) {
                    Alert.alert("Erro", "Altura inválida");
                    console.error('Altura inválida:', heightCm);
                    return;
                }
            } else {
                const parsedAltura = parseFloat(heightFt) * 30.48 + parseFloat(heightIn) * 2.54;

                if (!parsedAltura || isNaN(parsedAltura) || parsedAltura < 120) {
                    Alert.alert("Erro", "Altura inválida");
                    console.error('Altura inválida: Ft/In');
                    return;
                }
            }
        }

        if(currentIndex === 8){
            if (problemasSaude.length === 0) {
                Alert.alert("Erro", "Selecione pelo menos uma opção");
                console.error('Sessão doenças inválida:', altura);
                return;
            }
        }

        if (currentIndex < Cadastro.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
    };

    const handleSelectOption = (option, setter) => {
        setter(option);
    };    

    const handleSelectProblemaSaude = (problema) => {
        if (problemasSaude.includes(problema)) {
            setProblemasSaude(problemasSaude.filter(item => item !== problema));
        } else {
            setProblemasSaude([...problemasSaude, problema]);
        }
    };
    
    const handleSelectRefeicoes = (refeicao) => {
        if (refeicoes.includes(refeicao)) {
            setRefeicoes(refeicoes.filter(item => item !== refeicao));
        } else {
            setRefeicoes([...refeicoes, refeicao]);
        }
    };  

    const insertData = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            
            if (!token) {
                console.error('Token de usuário não encontrado. Usuário não está logado.');
                return;
            }
    
            const { data: userData, error: userError } = await supabase
                .from('cliente')
                .select('id, email')
                .eq('token', token)
                .single();
    
            if (userError) {
                console.error('Erro ao buscar dados do usuário:', userError);
                return;
            }
    
            console.log('Dados do usuário:', userData);
    
            const { data: updatedData, error: updateError } = await supabase
                .from('cliente')
                .update({
                    dt_nascimento: date,
                    meta_peso: parseFloat(metaPeso),
                    altura: altura === 'Cm' ? parseFloat(heightCm) : parseFloat(heightFt) * 30.48 + parseFloat(heightIn) * 2.54,
                    sexo,
                    objetivo,
                    atividade_diaria: atividadeDiaria,
                    tipo_dieta: tipoDieta,
                    problemas_saude: problemasSaude,
                    refeicoes: refeicoes,
                })
                .eq('id', userData.id)
                .select();
    
            if (updateError) {
                console.error('Erro ao atualizar dados do usuário:', updateError);
                return;
            }
    
            console.log('Dados atualizados com sucesso:', updatedData);

            const { data: pesoData, error: pesoError } = await supabase
                .from('peso')
                .insert({
                    peso: parseFloat(peso),
                    data: new Date(),
                    id_cliente: userData.id
                });
    
            if (pesoError) {
                console.error('Erro ao inserir peso do usuário:', pesoError);
                return;
            }
    
            console.log('Peso inserido com sucesso:', pesoData);

            handleNext();
        } catch (error) {
            console.error('Erro ao salvar os dados:', error);
        }
    };    

    return {
        currentIndex,
        setSexo,
        setObjetivo,
        setTipoDieta,
        setAtividadeDiaria,
        handleNext,
        handleBack,
        onChangeDate,
        formatDate,
        handleSelectOption,
        handleSelectProblemaSaude,
        handleSelectRefeicoes,
        insertData,
        setUnit,
        altura,
        showDatePicker,
        setAltura,
        heightFt,
        setHeightFt,
        heightIn,
        setHeightIn,
        setShowDatePicker,
        heightCm,
        objetivo,
        date,
        sexo,
        setHeightCm,
        tipoDieta,
        problemasSaude,
        refeicoes,
        atividadeDiaria,
        NavegarTelaInicial,
        setMetapeso,
        metaPeso,
        setPeso,
        peso,
        unit
    };
};

export default InformacoesViewModel;