import { Tabs } from "expo-router";
import { Platform, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function TabsLayout() {
    return(
        <Tabs screenOptions={{
            // 1. Couleurs des etats actifs/inactifs:
            tabBarActiveTintColor: '#31511E',
            tabBarInactiveTintColor: '#000000',

            // 2. Styles de la barre de navigation
            tabBarStyle: {
             position: 'absolute',
             bottom: Platform.OS === 'ios' ? 30 : 2, // ajustement seulement l'OS
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
                name="index"
                options={{ 
                    title: 'Acceuil', headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen 
                name="aliments"
                options={{ 
                    title: 'Aliments',
                    tabBarIcon: ({ color, focused }) => (
                        <FontAwesome6 name="bowl-food" size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="regimes"
                options={{ 
                    title: 'Régimes',
                    tabBarIcon: ({ color, focused }) => (
                        <AntDesign name={'hdd'} size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{ 
                    title: 'Paramètres',
                    tabBarIcon: ({ color, focused }) => (
                        focused ? <Fontisto name="player-settings" size={24} color={color} /> : <AntDesign name={'setting'} size={24} color="black" /> 
                    )
                }}
            />
        </Tabs>
    )
}