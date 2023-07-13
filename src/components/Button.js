import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Button({ title, onPress, icon, color }) {
  let content;

  if (icon === 'custom') {
    const customIconSource = require('./icons/paws.png');
    content = <Image source={customIconSource} style={styles.customIcon} />;
  } else {
    content = <Entypo name={icon} size={28} color={icon === 'flash' ? color : '#f1f1f1'} />;
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {content}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customIcon: {
    width: 28,
    height: 28,
    tintColor: '#f1f1f1',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#f1f1f1',
    marginLeft: 10,
  },
});