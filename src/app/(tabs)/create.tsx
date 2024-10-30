import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CreateScreen() {
    return (
        <View style={styles.container}>
            <Text>Nothing to see here 👀</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
