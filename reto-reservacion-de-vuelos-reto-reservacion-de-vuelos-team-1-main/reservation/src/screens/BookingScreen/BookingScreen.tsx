import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {PrimaryButton} from '../../components/PrimaryButton/PrimaryButton';
import {DropDown} from '../../components/DropDown/DropDown';

export const BookingScreen = () => {
  return (
    <View style={styles.column}>
      <Text style={styles.header}>Where are now?</Text>
      <PrimaryButton title="Next" onPress={() => {}} isActive={true} />
    </View>
  );
};
