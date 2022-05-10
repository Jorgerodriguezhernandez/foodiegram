import { View, StyleSheet, Button, Text, Card, Image, TouchableOpacity } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';

const BarraTop = (props) => {

    const prueba = () => {
        console.log('prueba');
    }

    return (
        <View style={styles.navhome}>
            <View style={styles.logo}>
                <Image style={{ position: "relative", width: 234, height: 98, }}
                    source={require("../assets/foodygram.png")}></Image>
            </View>
            <View style={styles.botonesTopBar}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => prueba()}>
                    <EvilIcons name="search" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.botonesTopBar}>
            <TouchableOpacity onPress={() => prueba()}>
                    <Ionicons name="options-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>
                
            
        </View>

    )
}
const styles = StyleSheet.create({
    
    navhome: {
        position: "relative",
        flexDirection: "row",
        backgroundColor: '#1b0e5c',
        height: 45,
        width: "100%",
        marginTop: 35,
        borderBottomEndRadius: 2,
        borderBottomStartRadius: 2,
    },
    logo:{
      marginTop: -12,
      left: -40,
      marginRight: "10%"
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    },
    
    botonesTopBar:{
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: "flex-end",
        paddingLeft: "2%",
    }
});


export default BarraTop;