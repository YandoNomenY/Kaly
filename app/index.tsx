import { useRouter } from "expo-router";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
export default function WelcomeScreen(){
    const router = useRouter();
    return (
        <View style={styles.container} >
            {/*  Logo de l'application  */}
            <Image 
            source={require('../assets/wheat.png')}
            style={styles.logo} />

            {/*  Nom de l'application  */}
            <Text style={styles.title}>Kaly</Text>
            <Text style={styles.subtitle}>Kalinao, Kajinao</Text>


        </View>
    )

    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
        },
        logo: {
            width: 40,
            height: 70,
            marginBottom: 0,
            resizeMode: 'contain',
            marginLeft: 10
        },
        title: {
            fontSize: 22,
            fontWeight: '200',
            color: "#31511E",
            marginBottom: 10,
            fontFamily: 'sans-serif',
        },
        subtitle: {
            fontSize: 13,
            color: '#666',
            marginBottom: 40,
            textAlign: 'center',
          },
    })