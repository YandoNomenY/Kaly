import { Tabs } from "expo-router";

export default function TabsLayout() {
    return(
        <Tabs screenOptions={{
            tabBarStyle: {display: "contents"} // Cache la barre de navigation en bas
        }} 
        
        >
            <Tabs.Screen
                name="index"
                options={{ title: 'Acceuil', headerShown: true }}
            />
            <Tabs.Screen 
                name="aliments"
                options={{ title: 'Aliments'}}
            />
            <Tabs.Screen
                name="regimes"
                options={{ title: 'Régimes alimentaires'}}
            />
            <Tabs.Screen
                name="settings"
                options={{ title: 'Paramètres' }}
            />
        </Tabs>
    )
}