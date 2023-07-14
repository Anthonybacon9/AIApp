import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import Button from '../Button';
//import Clarifai from 'clarifai';

//const app = new Clarifai.App({
  //apiKey: 'f337456f3841410898eb5e0c04a8e61e',
//});

export default function CameraScreen() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
        //analyzeImage(data.uri);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert('Picture Saved!');
        setImage(null);
      } catch (e) {
        console.log(e);
      }
    }
  };


  if (hasCameraPermission === false) {
    return <Text>No Access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera style={styles.camera} type={type} flashMode={flash} ref={cameraRef}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 75,
              backgroundColor: '#000',
            }}
          >
            <Button
              icon={'flash'}
              color={flash === Camera.Constants.FlashMode.off ? '#808080' : '#f1f1f1'}
              onPress={() => {
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                );
              }}
            />
            <Button icon={'custom'} onPress={() => {}} />
            <Button
              icon={'retweet'}
              onPress={() => {
                setType(type === CameraType.back ? CameraType.front : CameraType.back);
              }}
            />
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}
      <View>
        {image ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 50,
            }}
          >
            <Button title={'Retake'} icon="retweet" onPress={() => setImage(null)} />
            <Button title={'Save'} icon="check" onPress={saveImage} />
          </View>
        ) : (
          <Button title={'Take a Picture'} icon="camera" onPress={takePicture} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  camera: {
    flex: 1,
    borderRadius: 20,
  },
});