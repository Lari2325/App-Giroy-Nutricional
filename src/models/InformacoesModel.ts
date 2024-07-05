import { supabase } from '../db';

const getUserData = async (token) => {
    try {
        const { data, error } = await supabase
            .from('cliente')
            .select('id, email')
            .eq('token', token)
            .single();

        if (error) {
            console.error('Erro ao buscar dados do usuário:', error);
            return null;
        }

        return data;
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        return null;
    }
};

const updateUserData = async (userData, newData) => {
    try {
        const { data, error } = await supabase
            .from('cliente')
            .update(newData)
            .eq('id', userData.id)
            .select();

        if (error) {
            console.error('Erro ao atualizar dados do usuário:', error);
            return null;
        }

        return data;
    } catch (error) {
        console.error('Erro ao atualizar dados do usuário:', error);
        return null;
    }
};

const insertUserWeight = async (userData, weight) => {
    try {
        const { data, error } = await supabase
            .from('peso')
            .insert({
                peso: parseFloat(weight),
                data: new Date(),
                id_cliente: userData.id
            });

        if (error) {
            console.error('Erro ao inserir peso do usuário:', error);
            return null;
        }

        return data;
    } catch (error) {
        console.error('Erro ao inserir peso do usuário:', error);
        return null;
    }
};

export {
    getUserData,
    updateUserData,
    insertUserWeight,
};