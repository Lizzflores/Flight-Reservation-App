import React from 'react';
import {View, Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {placesData} from '../../../assets/places_data';
import {useNavigation} from '@react-navigation/native';
import CardFlight from '../../../components/CardFlight/CardFlight';
import {PrimaryButton} from '../../../components/PrimaryButton/PrimaryButton';
import {styles} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigation/Navigator';
import {useSelector} from 'react-redux';
import {RootState} from '../../../types/types';
import {DropDownDestination} from '../../../components/DropDownDestination/DropDownDestination';

export const DestinationScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const {originCountry, originCity, destinationCountry} = useSelector(
    (state: RootState) => state.counter,
  );

  return (
    <View style={styles.container}>
      {originCountry ? (
        <CardFlight originCity={originCity} originCountry={originCountry} />
      ) : (
        <View />
      )}
      <View style={styles.middleContainer}>
        <Text style={styles.header}>Where will you be flying to?</Text>
        <DropDownDestination width={wp('70%')} data={placesData} />
      </View>
      <PrimaryButton
        title="Next"
        onPress={() => {
          navigation.navigate('SelectDateScreen');
        }}
        isActive={Boolean(destinationCountry)}
        width={wp('70%')}
      />
    </View>
  );
};
