import { View, StyleSheet, Button, Text, Card, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';

const Tarjeta = (props) => {

    const prueba = () => {
        console.log('prueba');
    } 
    return (
        <View style={styles.container2}>
            <ImageBackground source={require("../assets/Hamburguesa-1.jpg")} style={styles.image2} imageStyle={{ borderRadius: 10 }} resizeMode="cover">
                <View style={styles.botonesTopBar}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => prueba()}>
                        <EvilIcons name="search" size={34} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.botonesTopBar2}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => prueba()}>
                        <EvilIcons name="search" size={34} color="white" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container2: {
        alignItems: "center",
        justifyContent: "center",
        width: "70%",
        marginTop: 40,
        flexDirection: "row",
        flexWrap:"wrap",
    },
    image2: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    botonesTopBar: {
        marginTop:"82%",
        backgroundColor: 'rgb(27, 14, 92)',
        width:"30%",
        height: 42,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 10,
        borderBottomStartRadius: 10,
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: "center",
        opacity:0.7,
    },
    botonesTopBar2: {
        backgroundColor: 'rgb(27, 14, 92)',
        width:"30%",
        height: 42,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 10,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: "81.7%",
        opacity: 0.7,
    },
    


});


export default Tarjeta;