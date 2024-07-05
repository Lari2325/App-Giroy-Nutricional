import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cadastro } from "../../../models/Styleds/Cadastro";
import colors from "../../Theme/colors";
import Botao from "../../../components/Botao";
import InformacoesViewModel from "../../../viewmodels/Cadastro/Tabs"; 

import {
    ContainerScrollView,
    BotaoPeso,
    BotaoTexto,
    Input,
    ContainerBotoes,
    LarguraBotao,
    ContainerBoxInf,
    InputContainer,
    SmallInput
} from '../../../models/Styleds/Cadastro/styled';

import TituloFormulario from "../../../components/TituloFormulario";
import Titulo from "../../../components/Titulo";

const InformacoesView = () => {

    const {
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
        metaPeso,
        setMetapeso,
        unit,
        setUnit,
        peso,
        setPeso,
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
        NavegarTelaInicial
    }  = InformacoesViewModel();

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
    
        if (currentIndex === 1) {
            return (
                <ContainerBoxInf>
                    <Input
                        keyboardType="numeric"
                        placeholder="Digite seu peso"
                        value={peso}
                        onChangeText={setPeso}
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

        if (currentIndex === 2) {
            return (
                <ContainerBoxInf>
                    <Input
                        keyboardType="numeric"
                        placeholder="Digite a meta de peso"
                        value={metaPeso}
                        onChangeText={setMetapeso}
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
                                currentIndex === Cadastro.length - 1 ? () => { insertData(); NavegarTelaInicial(); } : handleNext
                            }
                        />
                    )}
                </View>
            </ContainerScrollView>
        </ScrollView>
    );
};

export default InformacoesView;