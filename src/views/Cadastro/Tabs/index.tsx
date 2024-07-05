import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ScrollView, Platform } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cadastro } from "../../../models/Styleds/Cadastro";
import colors from "../../Theme/colors";
import Botao from "../../../components/Botao";
import { supabase } from '../../../db';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

import {
    ContainerScrollView,
    BotaoPeso,
    BotaoTexto,
    Input,
    ContainerBotoes,
    LarguraBotao,
    ContainerBoxInf,
    InputContainer,
    SmallInput,
} from '../../../models/Styleds/Cadastro/styled';

import TituloFormulario from "../../../components/TituloFormulario";
import Titulo from "../../../components/Titulo";
import { useNavigation } from "@react-navigation/native";

const InformacoesView = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState(null); 

    const loadUser = async () => {
        try {
            const userString = await AsyncStorage.getItem('token');
            if (userString) {
                setUser(userString); // Save token as user
            }
        } catch (error) {
            console.error('Erro ao carregar usuário logado:', error);
        }
    };

    useEffect(() => {
        loadUser();
    }, []);

    const NavegarTelaInicial = () => {
        navigation.navigate('TelaInicial');
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [weight, setWeight] = useState('');
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
    
            // Atualizar os dados do usuário
            const { data: updatedData, error: updateError } = await supabase
                .from('cliente')
                .update({
                    dt_nascimento: date,
                    meta_peso: parseFloat(weight),
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
            handleNext();
        } catch (error) {
            console.error('Erro ao salvar os dados:', error);
        }
    };    

    const renderInput = () => {
        const currentEntry = Cadastro[currentIndex];
    
        if (currentIndex === 0) {
            return (
                <ContainerBoxInf>
                    <BotaoPeso onPress={() => setShowDatePicker(true)}>
                        <BotaoTexto>{formatDate(date)}</BotaoTexto>
                    </BotaoPeso>
                    {showDatePicker && (
                        <DateTimePicker
                            value={date}
                            mode="date"
                            display="default"
                            onChange={onChangeDate}
                        />
                    )}
                </ContainerBoxInf>
            );
        }
    
        if (currentIndex === 1 || currentIndex === 2) {
            return (
                <ContainerBoxInf>
                    <Input
                        keyboardType="numeric"
                        placeholder={currentIndex === 1 ? "Digite seu peso" : "Digite a meta de peso"}
                        value={weight}
                        onChangeText={setWeight}
                    />
                    <ContainerBotoes>
                        <LarguraBotao>
                            <BotaoPeso onPress={() => setUnit('kg')} style={{ backgroundColor: unit === 'kg' ? colors.tertiary : colors.primary }}>
                                <BotaoTexto>kg</BotaoTexto>
                            </BotaoPeso>
                        </LarguraBotao>
                        <LarguraBotao>
                            <BotaoPeso onPress={() => setUnit('ibs')} style={{ backgroundColor: unit === 'ibs' ? colors.tertiary : colors.primary }}>
                                <BotaoTexto>ibs</BotaoTexto>
                            </BotaoPeso>
                        </LarguraBotao>
                    </ContainerBotoes>
                </ContainerBoxInf>
            );
        }
    
        if (currentIndex === 3) {
            return (
                <ContainerBoxInf>
                    {altura === 'Cm' ? (
                        <Input
                            keyboardType="numeric"
                            placeholder="Cm"
                            value={heightCm}
                            onChangeText={setHeightCm}
                        />
                    ) : (
                        <InputContainer>
                            <SmallInput
                                keyboardType="numeric"
                                placeholder="Ft"
                                value={heightFt}
                                onChangeText={setHeightFt}
                            />
                            <SmallInput
                                keyboardType="numeric"
                                placeholder="In"
                                value={heightIn}
                                onChangeText={setHeightIn}
                            />
                        </InputContainer>
                    )}
                    <ContainerBotoes>
                        <LarguraBotao>
                            <BotaoPeso onPress={() => setAltura('Cm')} style={{ backgroundColor: altura === 'Cm' ? colors.tertiary : colors.primary }}>
                                <BotaoTexto>Cm</BotaoTexto>
                            </BotaoPeso>
                        </LarguraBotao>
                        <LarguraBotao>
                            <BotaoPeso onPress={() => setAltura('Ft/In')} style={{ backgroundColor: altura === 'Ft/In' ? colors.tertiary : colors.primary }}>
                                <BotaoTexto>Ft/In</BotaoTexto>
                            </BotaoPeso>
                        </LarguraBotao>
                    </ContainerBotoes>
                </ContainerBoxInf>
            );
        }
    
        if (currentIndex === 4) {
            return (
                <ContainerBotoes>
                    <LarguraBotao>
                        <BotaoPeso onPress={() => { setSexo('F'); handleNext(); }} style={{ backgroundColor: sexo === 'F' ? colors.tertiary : colors.primary }}>
                            <BotaoTexto>Feminino</BotaoTexto>
                        </BotaoPeso>
                    </LarguraBotao>
                    <LarguraBotao>
                        <BotaoPeso onPress={() => { setSexo('M'); handleNext(); }} style={{ backgroundColor: sexo === 'M' ? colors.tertiary : colors.primary }}>
                            <BotaoTexto>Masculino</BotaoTexto>
                        </BotaoPeso>
                    </LarguraBotao>
                </ContainerBotoes>
            );
        }
    
        if (currentIndex === 5) {
            return (
                <ContainerBoxInf>
                    {currentEntry.objetivoPrincipal.map((item) => (
                        <BotaoPeso
                            key={item.id}
                            onPress={() => {handleSelectOption(item.nome, setObjetivo); handleNext();}}
                            style={{ backgroundColor: objetivo === item.nome ? colors.tertiary : colors.primary }}
                        >
                            <BotaoTexto>{item.nome}</BotaoTexto>
                        </BotaoPeso>
                    ))}
                </ContainerBoxInf>
            );
        }
    
        if (currentIndex === 6) {
            return (
                <ContainerBoxInf>
                    {currentEntry.objetivoPrincipal.map((item) => (
                        <BotaoPeso
                            key={item.id}
                            onPress={() => {handleSelectOption(item.nome, setAtividadeDiaria); handleNext();}}
                            style={{ backgroundColor: atividadeDiaria === item.nome ? colors.tertiary : colors.primary }}
                        >
                            <BotaoTexto>{item.nome}</BotaoTexto>
                        </BotaoPeso>
                    ))}
                </ContainerBoxInf>
            );
        }
    
        if (currentIndex === 7) {
            return (
                <ContainerBoxInf>
                    {currentEntry.objetivoPrincipal.map((item) => (
                        <BotaoPeso
                            key={item.id}
                            onPress={() => {handleSelectOption(item.nome, setTipoDieta); handleNext();}}
                            style={{ backgroundColor: tipoDieta === item.nome ? colors.tertiary : colors.primary }}
                        >
                            <BotaoTexto>{item.nome}</BotaoTexto>
                        </BotaoPeso>
                    ))}
                </ContainerBoxInf>
            );
        }
    
        if (currentIndex === 8) {
            return (
                <ContainerBoxInf>
                    {currentEntry.select.map((item) => (
                        <BotaoPeso
                            key={item.id}
                            onPress={() => handleSelectProblemaSaude(item.nome)}
                            style={{ backgroundColor: problemasSaude.includes(item.nome) ? colors.tertiary : colors.primary }}
                        >
                            <BotaoTexto>{item.nome}</BotaoTexto>
                        </BotaoPeso>
                    ))}
                </ContainerBoxInf>
            );
        }

        if (currentIndex === 9) {
            return (
                <ContainerBoxInf>
                    {currentEntry.select.map((item) => (
                        <BotaoPeso
                            key={item.id}
                            onPress={() => handleSelectRefeicoes(item.nome)}
                            style={{ backgroundColor: refeicoes.includes(item.nome) ? colors.tertiary : colors.primary }}
                        >
                            <BotaoTexto>{item.nome}</BotaoTexto>
                        </BotaoPeso>
                    ))}
                </ContainerBoxInf>
            );
        }
    
        return null;
    };    

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <ContainerScrollView>
                <Titulo name={Cadastro[currentIndex].titulo} />
                {Cadastro[currentIndex].subtitulo && (
                    <TituloFormulario marginBottom='30px' marginTop='-20px' textAlign='center' name={Cadastro[currentIndex].subtitulo} />
                )}

                {currentIndex >= 1 && (
                    <TouchableOpacity style={{ position: 'absolute', top: 40, left: 16 }} onPress={handleBack}>
                        <Icon name="arrow-back" size={24} color={colors.primary} />
                    </TouchableOpacity>
                )}

                {renderInput()}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20 }}>
                    {Cadastro[currentIndex].buttonNext && (
                        <Botao
                            color={colors.tertiary}
                            title={currentIndex === Cadastro.length - 1 ? "Enviar" : "Próximo"}
                            onPress={
                                currentIndex === Cadastro.length - 1 ? insertData : handleNext
                            }
                        />
                    )}
                </View>
            </ContainerScrollView>
        </ScrollView>
    );
};

export default InformacoesView;