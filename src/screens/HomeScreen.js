import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Fonts, Colors } from '../constants';
import Button from '../components/Button';

export default function HomeScreen({ isExtended, setIsExtended }) {
  return (
    <View style={styles.container}>
      <Image style={styles.bgImage} source={require('../../assets/images/background.png')} />
      <View style={styles.section}>
        <Text style={{ fontSize: 20, color: Colors.white, fontFamily: Fonts.primaryRegular }}>Home</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.titleDescription}>The smartest Way to build your mobile app</Text>
        <Text style={styles.title}>React Native Starter</Text>
      </View>
      <View style={[styles.section, styles.sectionLarge]}>
        <Text style={styles.description}> A powerful starter project that bootstraps development of your mobile application and saves you 20000*</Text>
        <View style={styles.priceContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text styleName="bold" style={styles.price}>{isExtended ? '$199.95' : '$49.95'}</Text>
          </View>
          <TouchableOpacity style={styles.priceLink} onPress={() => isExtended ? setIsExtended(false) : setIsExtended(true)}>
            <Text style={styles.priceLinkText}>{isExtended ? 'Multiple Applications License' : 'Single Application License'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Button
          style={{ alignSelf: 'stretch' }}
          primary
          bgColor="#FF1358"
          caption="Purchase now!"
          onPress={this.onPurchasePress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    fontSize: 15,
    color: '#C3C3C3',
    textAlign: 'center',
    color: '#19e7f7',
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: Fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    fontSize: 30,
    marginTop: 30,
    color: Colors.white,
    fontFamily: Fonts.primaryBold,
  },
  price: {
    fontSize: 50,
    color: Colors.white,
    marginBottom: 5,
    fontFamily: Fonts.primaryBold,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  priceLinkText: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.primaryRegular,
  },
});
