import { View, ViewStyle, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenWrapperProps {
    children: React.ReactNode;
    style?: ViewStyle;
    backgroundColor?: string;
}

export default function ScreenWrapper({ children, style, backgroundColor = '#ffffff' }: ScreenWrapperProps) {
    const insets = useSafeAreaInsets();

    return(
        <View 
            style={[
                styles.container,
                {
                    // appliquer dynamiquement la securite en haut
                    backgroundColor: backgroundColor,
                }, 
                style
            ]}
        >
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});