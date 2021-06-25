import React, { useState,useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from "expo-constants";

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText
} from './styles';

import NewPetInput from '../../components/NewPetInput';
import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const [name_petField, setNamePetField] = useState('');
    const [ageField, setAgeField] = useState('');
    const [weightField, setWeightField] = useState('');
    const [breedField, setBreedField] = useState('');
    const [sex_pet, setBreedField] = useState('');


    const handleNewPetRegister = async () => {
        if(name_petField != '' && ageField != '' && weightField != '' && breedField != '' && sex_pet != '' ){

            let json = await Api.NewPet(name_petField,ageField,weightField,breedField,sex_pet);
            
            if(json != null){
                alert('Salvo com sucesso!');

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });
            }else{
                alert('Preencha todos os campos!')
            }
        }
    }

    return (
        <Container>
            

        </Container>
    )

}