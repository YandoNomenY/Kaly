import { Tabs } from "expo-router";
import { Platform, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabsLayout() {
    return(
        <Tabs screenOptions={{
            // 1. Couleurs des etats actifs/inactifs:
            tabBarActiveTintColor: '#31511E',
            tabBarInactiveTintColor: '#000000',

            // Nom de l'application
            headerTitle: 'Kaly',
            headerTintColor: 'white',
            headerShown: true,
            headerStyle: {
               
                backgroundColor: '#31511E',
                
            },

            // 2. Styles de la barre de navigation
            tabBarStyle: {
             position: 'absolute',
             bottom: Platform.OS === 'ios' ? 30 : 0, // ajustement selon l'OS
             left: 20,  
             right: 20,
             height: 100,
             backgroundColor: 'white',
             borderRadius: 0,
             borderTopWidth: 0, // Border par défaut

             // Omdrage 
             ...Platform.select({
                ios: {
                    shadowColor: '#000',
                    shadowOffset:  { width: 0, height: 4},
                    shadowOpacity: 0.08,
                    shadowRadius: 12,
                },
                android: {
                    elevation: 8,
                },
             }),
            },

            // 3. Alignement des elements internes de la barre
            tabBarItemStyle: {
                paddingVertical: 0,
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: 600,
                marginTop: 0,
            }
        }} 
        
        >
            
            <Tabs.Screen
                name="home"
                options={{ 
                    tabBarLabel: 'Acceuil',
                    tabBarIcon: ({ color, focused}) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen 
                name="aliments"
                options={{ 
                    headerTitle: 'Aliments',
                    
                    tabBarIcon: ({ color, focused }) => (
                        <FontAwesome6 name="bowl-food" size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="regimes"
                options={{ 
                    headerTitle: 'Régimes',
                    tabBarIcon: ({ color, focused }) => (
                        <AntDesign name={'hdd'} size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{ 
                    headerTitle: 'Paramètres',
                    tabBarIcon: ({ color, focused }) => (
                        focused ? <Fontisto name="player-settings" size={24} color={color} /> : <AntDesign name={'setting'} size={24} color="black" /> 
                    )
                }}
            />
        </Tabs>
    )
}