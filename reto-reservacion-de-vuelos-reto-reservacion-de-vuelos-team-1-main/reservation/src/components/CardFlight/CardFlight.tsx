import {View, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import styles from './style';
import {useRoute} from '@react-navigation/native';

interface CardFlightProps {
  originCountry?: string;
  originCity?: string;
  destinationCountry?: string;
  destinationCity?: string;
  passengers?: string;
  selectedDate?: string;
}

const CardFlight: React.FC<CardFlightProps> = ({
  originCountry,
  originCity,
  destinationCountry,
  destinationCity,
  passengers,
  selectedDate,
}) => {
  const route = useRoute();

  return (
    <View
      style={
        route.name == 'MyFlightsScreen'
          ? styles.myFlightsContainer
          : styles.flightContainer
      }>
      <View style={styles.originAndDestination}>
        <View style={styles.origin}>
          <Text style={styles.title}>{originCountry}</Text>
          <Text style={styles.text}>{originCity}</Text>
        </View>
        <Ionicons
          style={styles.icon}
          name="airplane-sharp"
          size={30}
          color="#6170f7"
        />
        <View style={styles.destination}>
          <Text style={styles.title}>{destinationCountry}</Text>
          <Text style={styles.text}>{destinationCity}</Text>
        </View>
      </View>

      <View style={styles.containerDateAndPassengers}>
        <Text style={styles.text2}>{selectedDate}</Text>
        {passengers && (
          <Text style={styles.text2}>{`${passengers} passengers`}</Text>
        )}
      </View>
    </View>
  );
};

export default CardFlight;
