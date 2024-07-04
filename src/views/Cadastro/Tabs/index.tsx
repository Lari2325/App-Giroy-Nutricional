import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, Platform } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cadastro } from "../../../models/Styleds/Cadastro";
import colors from "../../Theme/colors";
import Botao from "../../../components/Botao";

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

    const NavegarTelaInicial = ()=> {
        navigation.navigate('TelaInicial');
    }

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
    const [selectedOptions, setSelectedOptions] = useState([]);

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

    const handleSelectOption = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
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

        if (currentIndex === 5 || currentIndex === 6 || currentIndex === 7) {
            return (
                <ContainerBoxInf>
                    {currentEntry.objetivoPrincipal.map((item) => (
                        <BotaoPeso
                            key={item.id}
                            onPress={() => { setObjetivo(item.nome); handleNext(); }}
                            style={{ backgroundColor: objetivo === item.nome ? colors.tertiary : colors.primary }}
                        >
                            <BotaoTexto>{item.nome}</BotaoTexto>
                        </BotaoPeso>
                    ))}
                </ContainerBoxInf>
            );
        }

        if (currentIndex === 8 || currentIndex === 9 || currentIndex === 10) {
            return (
                <ContainerBoxInf>
                    {currentEntry.select.map((item) => (
                        <BotaoPeso
                            key={item.id}
                            onPress={() => handleSelectOption(item.nome)}
                            style={{ backgroundColor: selectedOptions.includes(item.nome) ? colors.tertiary : '#FFFFFF', borderWidth: 1, borderColor: '#CCCCCC', padding: 10, margin: 5 }}
                        >
                            <BotaoTexto style={{ color: selectedOptions.includes(item.nome) ? '#FFFFFF' : '#000000' }}>{item.nome}</BotaoTexto>
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
                                currentIndex === Cadastro.length - 1 ? NavegarTelaInicial : handleNext
                            } 
                        />
                    )}
                </View>
            </ContainerScrollView>
        </ScrollView>
    );
};

export default InformacoesView;