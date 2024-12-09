import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';


export default function SucessOrder({navigation}) {
  return (
    <ImageBackground
      source={{ uri: 'https://s3-alpha-sig.figma.com/img/2be9/2355/b449896ba33813c7a3a1de422a47e24b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SBNyEXRZ1r5d0yqfFHkqCCPcpod26UyArylWx2-I9CvHYa0odE9LQettN53F71OX1C18lUjiQRP5UrsXf3sVXfljuyHPdpsf5-ZMZH3D11TfkM3wemmjSyNpMmfrqGTNe~Ye9hPgDoSXObA4gnxSi~JHtF9Y88MzWo2VeoY9hrDQeCqT~L0gfAFjLnDAWTwijmoXNwWw1BCy0fjSGo8GCdjq3HfSpD-Bt4MVUprDaOqVAvmLiSyQta3xnYGO3y9dckyC6g4r4t9DwL3t3xy4kO5Auz1xfwoolqYfXbe7zYVkYvMeB9DLrvfv4Qu0DZuD~fvZkaF1YqAVydW-sRFfqA__' }}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.titleText}>Sucess!</Text>
        <Text style={styles.subtitleText}>Your order will be delivered soon.
        Thank you for choosing our app!</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: 812,
    width:'100%',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  titleText: {
    fontSize: 28,
    color: '#222222',
    fontWeight: 'bold',
    marginBottom: 30,
    top:80,
  },
  subtitleText: {
    fontSize: 14,
    color: '#222222',
    marginBottom: 30,
    top:60,
    marginRight:10,
    marginLeft:10,
  },
  button: {
    backgroundColor: '#Db3022',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 35,
    top:40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
