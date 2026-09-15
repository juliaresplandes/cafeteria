import { StyleSheet, Text, View } from "react-native";


export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Cafeteria da Julia</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
    padding: 20,
    alignItems: "center",
    marginBlock: 20
  },
  footerText: {
    fontSize: 14,
    color: "#9b9b9b",
    textAlign: "center"
  }
});