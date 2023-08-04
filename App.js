import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import tandaPanah from './assets/Vector.png'
import facebook from './assets/facebook.png'
import google from './assets/google.png'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View >
        <Text style={{
          fontSize: 34,
          fontWeight: 'bold'
        }}>Sign Up</Text>
        <TextInput style={{
          height: 64,
          width: 320,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 20,
          borderRadius: 10,
          paddingLeft: 10
        }} placeholder="Name" />
        <TextInput style={{
          height: 64,
          width: 320,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 20,
          borderRadius: 10,
          paddingLeft: 10
        }} placeholder="Email" />
        <TextInput style={{
          height: 64,
          width: 320,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 20,
          borderRadius: 10,
          paddingLeft: 10
        }} placeholder="Password" />
        <View style={{
          flexDirection: "row",
          alignItems :"center",
          justifyContent :"flex-end"
        }}>

          <Text style={{
            marginTop: 20,
            marginBottom: 20,
            textAlign: 'right',
            paddingRight : 10
          }}>Already have a acount ?</Text>
          <Image source={tandaPanah} style={{ width: 30, height: 15 }} />
        </View>
        <Button style={{
          marginTop: 40,
        }} title="Sign Up" />
        <Text style={{
          marginTop: 20,
          textAlign: 'center',
        }}>Or sign up with acount sosial media</Text>
        <View style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
          <Image source={facebook} style={{ width: 35, height: 35 }} />
          <Image source={google} style={{ width: 35, height: 35 }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 100,
    paddingLeft: 20,
  },
});