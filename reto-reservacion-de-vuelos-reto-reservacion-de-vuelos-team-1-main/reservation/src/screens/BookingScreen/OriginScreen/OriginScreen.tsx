import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {PrimaryButton} from '../../../components/PrimaryButton/PrimaryButton';
import {DropDown} from '../../../components/DropDown/DropDown';
import {placesData} from '../../../assets/places_data';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigation/Navigator';
import {useSelector} from 'react-redux';
import {RootState} from '../../../types/types';

const OriginScreen = () => {
  const {originCountry} = useSelector((state: RootState) => state.counter);

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <View style={styles.middleContainer}>
        <Text style={styles.header}>Where are you now?</Text>
        <DropDown width={wp('70%')} data={placesData} />
      </View>
      <PrimaryButton
        title="Next"
        onPress={() => {
          navigation.navigate('DestinationScreen');
        }}
        isActive={Boolean(originCountry)}
        width={wp('70%')}
      />
    </View>
  );
};

export default OriginScreen;
