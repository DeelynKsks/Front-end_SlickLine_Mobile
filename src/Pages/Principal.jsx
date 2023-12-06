import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import logo from '../../assets/app_media/ID_refsaHidro.png';
import ButtonTouchable from './../Components/ButtonTouchable';
import { moderateScale } from 'react-native-size-matters'
import { styles } from '../Styles/Styles';

function Principal({navigation}) {

  loginRedirection = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      {/* Contenedor de la imagen */}
      <View style={mystyle.logoContainer}>
        {/* Imagen con width y height al 100% del contenedor y resizeMode: 'contain' */}
        <Image
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          source={logo}
        />
      </View>
      <ButtonTouchable
        styleText={styles.buttonTextBlack}
        styleButton={styles.button}
        text={'Ingresar'}
        pressFunction={loginRedirection}
      />
    </View>
  );
}

export default Principal;

const mystyle = StyleSheet.create({
  logoContainer: {
    // Configuración de tamaño fijo para el contenedor de la imagen
    width: '90%',
    height: '17%',
    // Margen inferior para separar la imagen del texto
    marginBottom: 20,
  },
  // buttonLogin: {
  //   fontSize: moderateScale(10)
  // }
});
