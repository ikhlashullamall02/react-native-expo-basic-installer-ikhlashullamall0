import { StyleSheet, Text, View , SafeAreaView } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";
const App = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/font/Inter-Black-900.otf"),
    "Inter-Italic": require("./assets/font/Inter-Black-Italic-900.otf"),
  });
  if (!fontsLoaded) {
    return <Text>Memuat Font</Text>;
  }
  return (
    <SafeAreaView>
      <View styles={styles.container}>
        <Text style={{ fontFamily: "Inter-Black" }}>Inter Black</Text>
        <Text style={{ fontFamily: "Inter-Italic" }}>Inter Italic</Text>
      </View>
    </SafeAreaView>
  )
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingTop: 55,
  }
})