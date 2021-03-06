import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { white, black, blueHorizon, randomColors } from '../utils/colors';
import { randomItem } from '../utils/helpers';

const DeckItem = ({ item, questionsCount }) => (
  <View style={styles.overflowWorkaround}>
    <View style={styles.badge}>
      <Text style={[styles.text, { fontSize: 12 }]}>{questionsCount}</Text>
    </View>
    <View style={[styles.deck, { backgroundColor: randomItem(randomColors) }]}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  overflowWorkaround: {
    padding: 10,
    position: 'relative'
  },
  deck: {
    minHeight: 100,
    marginBottom: 10,
    justifyContent: 'center',
    elevation: 5,
    borderRadius: 4,
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowColor: black,
    shadowOffset: { height: 2, width: 2 },
    position: 'relative'
  },
  text: {
    textAlign: 'center',
    color: white,
    fontSize: 16
  },
  badge: {
    justifyContent: 'center',
    borderRadius: 50,
    width: 30,
    height: 30,
    backgroundColor: blueHorizon,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 100,
    elevation: 100
  }
});

export default DeckItem;
