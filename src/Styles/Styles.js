import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: moderateScale(10)
    },
    buttonTextBlack: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: moderateScale(10)
    },
    button: {
      borderStyle: 'solid',
      borderWidth: moderateScale(1),
      borderRadius: moderateScale(5),
      borderColor: "#000000",
      backgroundColor: "#efd510",
      width: '50%',
      justifyContent: "center"
    },
  });