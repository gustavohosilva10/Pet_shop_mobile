import React, { useState,useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from "axios";
import Constants from "expo-constants";
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,

} from './styles';


import CompleteRegisterInput from '../../components/CompleteRegisterInput';
import Phone from '../../assets/phone.svg';
import Cellphone from '../../assets/cellphone.svg';
import Picture from '../../assets/picture.svg';
import Home from '../../assets/home.svg';
import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const [image, setImage] = useState();

    async function imagePickerCall() {
        
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    
          if (status !== "granted") {
            alert("Nós precisamos dessa permissão.");
            return;
          }
        }
    
        const data = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images
        });
    
        if (data.cancelled) {
          return;
        }
    
        if (!data.uri) {
          return;
        }
    
        setImage(data);
    }

    async function uploadImage() {
        const token = await AsyncStorage.getItem('token');
      
        const data = new FormData();
    
        data.append("image", {
          uri: image.uri,
          type: image.type,
        });
        
        let json = await Api.UploadImageProfile(image);
        if(json != null){
          alert('Salvo com sucesso!');
        }  
        /* await Axios.post('https://17e353461ff6.ngrok.io/api/store/saveProfilePicture', data,token);  */ 
      }

    const [addressField, setAddressField] = useState('');
    const [telephoneField, setTelephoneField] = useState('');
    const [cellphoneField, setCellphoneField] = useState(''); 
    const [cep_userField, setCep_userField] = useState('');

    const handleCompleteRegisterClick = async () => {
      if(addressField != '' && cellphoneField != '' && cep_userField != '') {

          let json = await Api.completeRegister(addressField,telephoneField,cellphoneField,cep_userField);
        
          if(json != null) {
            
              alert('Salvo com sucesso!');

              navigation.reset({
                  routes:[{name:'MainTab'}]
              });
              
          } else {
              alert('E-mail e/ou senha errados!');
          }

      } else {
          alert("Preencha os campos!");
      }
    }

    return (
        <Container>
            <Image
            source={{
            uri: image
                ? image.uri
                : "https://www.ovosliva.com.br/wp-content/uploads/2019/02/Em-constru%C3%A7%C3%A3o.jpg"
            }}
            style={styles.image}
            />

            <TouchableOpacity style={styles.button} onPress={imagePickerCall}>
                <Text style={styles.buttonText}>Escolher imagem</Text>
            </TouchableOpacity>
                
            <TouchableOpacity style={styles.button} onPress={uploadImage}>
                <Text style={styles.buttonText}>Enviar imagem</Text>
            </TouchableOpacity>

            <InputArea>

                    <CompleteRegisterInput
                        IconSvg={Home}
                        placeholder="Endereço"
                        value={addressField}
                        onChangeText={t=>setAddressField(t)}
                    />

                    <CompleteRegisterInput
                        IconSvg={Home}
                        placeholder="Cep"
                        value={cep_userField}
                        onChangeText={t=>setCep_userField(t)}
                    />


                    <CompleteRegisterInput
                        IconSvg={Phone}
                        placeholder="Telefone"
                        value={telephoneField}
                        onChangeText={t=>setTelephoneField(t)}
                    />

                    <CompleteRegisterInput
                        IconSvg={Cellphone}
                        placeholder="Celular"
                        value={cellphoneField}
                        onChangeText={t=>setCellphoneField(t)}
                    />

                    <CustomButton onPress={handleCompleteRegisterClick}>
                        <CustomButtonText>Salvar</CustomButtonText>
                    </CustomButton> 

            </InputArea>

        </Container>
    );

    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      width: 150,
      height: 50,
      borderRadius: 3,
      backgroundColor: "#E09B42",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20
    },
    buttonText: {
      color: "#fff"
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 50
    }
  });
