import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Entypo as Icon } from '@expo/vector-icons';
import { Colors, Fonts } from '../constants';

export default function PagesScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.item}>
          <Icon name="documents" size={25} color={Colors.primary} />
          <Text style={styles.itemText}>Charts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Icon name="documents" size={25} color={Colors.primary} />
          <Text style={styles.itemText}>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Icon name="documents" size={25} color={Colors.primary} />
          <Text style={styles.itemText}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.item}>
          <Icon name="documents" size={25} color={Colors.primary} />
          <Text style={styles.itemText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Icon name="documents" size={25} color={Colors.primary} />
          <Text style={styles.itemText}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Icon name="documents" size={25} color={Colors.primary} />
          <Text style={styles.itemText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 10,
    borderColor: Colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: Colors.primaryLight,
    fontFamily: Fonts.primary,
  }
});
