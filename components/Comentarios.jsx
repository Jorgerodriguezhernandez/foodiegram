import { View, StyleSheet, Button, Text, Card, Image, TouchableOpacity } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';

const Comentarios = (props) => {

    const prueba = () => {
        console.log('prueba');
    }

    return (

        <View style={styles.container}>

            <View style={styles.Comentario}>
                <View style={styles.cabecera}>
                    <Image style={styles.imagenPerfil}
                        source={require("../assets/PerritoLindo.png")}></Image>
                    <Text style={{ color: "white", font: "bold", fontSize: 18, marginLeft: "5%" }}>PerritoLindo34</Text>
                </View>

                <View style={styles.mensaje}>
                    <Text style={{ color: "black", font: "bold", fontSize: 18, marginLeft: "5%", marginTop: "2%" }}>De las mejores recetas que he probado</Text>
                </View>

            </View>

            <View style={styles.Comentario}>
                <View style={styles.cabecera}>
                    <Image style={styles.imagenPerfil}
                        source={require("../assets/PerritoLindo.png")}></Image>
                    <Text style={{ color: "white", font: "bold", fontSize: 18, marginLeft: "5%" }}>PerritoLindo34</Text>
                </View>

                <View style={styles.mensaje}>
                    <Text style={{ color: "black", font: "bold", fontSize: 18, marginLeft: "5%", marginTop: "2%" }}>De las mejores recetas que he probado</Text>
                </View>

            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: "10%",
        width: "70%",
        borderRadius: 20,
    },
    imagenPerfil: {
        position: "relative",
        borderRadius: 100,
        height: "70%",
        width: "14%",
        marginLeft: "5%",
        marginTop: "2%",
    },
    cabecera: {
        backgroundColor: 'rgb(27, 14, 92)',
        width: "100%",
        height: "30%",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    mensaje: {
        backgroundColor: '#CCCCCC',
        borderRadius: 10,
    },
    Comentario: {
        marginTop: 10,
        backgroundColor: '#CCCCCC',
        height:"auto",
    }

});


export default Comentarios;