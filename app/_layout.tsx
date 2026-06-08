import { SplashScreen, Stack } from 'expo-router';
import "../global.css";
import { useColorScheme } from 'react-native';
import { useFonts} from 'expo-font';
import { useEffect } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { DancingScript_400Regular } from '@expo-google-fonts/dancing-script';
import { Ephesis_400Regular } from '@expo-google-fonts/ephesis';
// 1. Empecher le splash screen de se cacher automatiquement
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const colorScheme = useColorScheme();

  // 2. Chargement des ressources globales (polices)
  const [loaded, error] = useFonts({
    'DancingScript': DancingScript_400Regular,
    'Ephesis-Regular': Ephesis_400Regular,
  });

  // 3. Gestion de l'affichage du splash screen
  useEffect(() => {
    if (loaded || error ){
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Tant que les ressources ne seront pas pretes, on ne rend rien
  if (!loaded && !error) {
    return null;
  }


  return (
    // 4. Encapsulation dans les Providers globaux 
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme} >
        {/* Structure de navigation racine */}
        <Stack
        screenOptions={{
        headerStyle: { backgroundColor: 'white' }, 
        headerTitle: 'Kaly',
        headerTintColor: '#31511E',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    </ThemeProvider>
  );
}