import React from 'react';
import {View, Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigation/Navigator';
import CardFlight from '../../../components/CardFlight/CardFlight';
import {PrimaryButton} from '../../../components/PrimaryButton/PrimaryButton';
import styles from './style';
import {PassengersSelector} from '../../../components/PassengersSelector/PassengersSelector';
import {useSelector} from 'react-redux';
import {RootState} from '../../../types/types';

export const PassengersScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const {
    originCountry,
    originCity,
    destinationCity,
    destinationCountry,
    passengers,
    selectedDate,
  } = useSelector((state: RootState) => state.counter);

  return (
    <View style={styles.column}>
      {originCountry ? (
        <CardFlight
          originCountry={originCountry}
          originCity={originCity}
          destinationCity={destinationCity}
          destinationCountry={destinationCountry}
          selectedDate={selectedDate}
        />
      ) : (
        <View />
      )}
      <View style={styles.middleContainer}>
        <Text style={styles.header}>How many passengers?</Text>
        <PassengersSelector />
      </View>
      <PrimaryButton
        title="Next"
        onPress={() => {
          navigation.navigate('RequestReceivedScreen');
        }}
        isActive={Boolean(passengers)}
        width={wp('70%')}
      />
    </View>
  );
};
