import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

let model;

export async function loadModel() {
  model = await mobilenet.load();
}

export async function classifyImage(imageData) {
  const imageTensor = tf.browser.fromPixels(imageData).toFloat();
  const resizedImage = tf.image.resizeBilinear(imageTensor, [224, 224]);
  const expandedImage = tf.expandDims(resizedImage);

  const predictions = await model.classify(expandedImage);

  imageTensor.dispose();
  resizedImage.dispose();
  expandedImage.dispose();

  return predictions;
}

//this code needs to be replaced with my pytorch model that has been turned into this