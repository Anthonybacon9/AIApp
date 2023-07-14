import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CameraScreen from './src/components/screens/CameraScreen';

import * as tf from '@tensorflow/tfjs'
import { fetch } from '@tensorflow/tfjs-react-native'
import * as mobilenet from '@tensorflow-models/mobilenet'

//import RegistrationScreen from './src/components/screens/RegistrationScreen';

//export default function App() {
  //return (
    //<View style={styles.container}>
      //<CameraScreen />
    //</View> 
  //);


//}

class App extends React.Component {
  state = {
    isTfReady: false,
    isModelReady: false
  }

  async componentDidMount() {
    await tf.ready()
    this.setState({
      isTfReady: true
    })
    this.model = await mobilenet.load()
    this.setState({ isModelReady: true })
}

  render() {
    return (
      <View style={styles.container}>
        <Text>TFJS ready? {this.state.isTfReady ? <Text>Yes</Text> : ''}</Text>
        <Text>
          Model ready?{' '}
          {this.state.isModelReady ? <Text>Yes</Text> : <Text>Loading Model...</Text>}
        </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    justifyContent: 'center',
    paddingBottom: 50,
  },
});


export default App