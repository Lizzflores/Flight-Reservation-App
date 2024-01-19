import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Image} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import styles from './style';
import {AddButton} from '../../components/AddButton/AddButton';
import FlightsList from '../../components/FlightsList/FlightsList';
import {FIREBASE_AUTH} from '../../../config/firebase-config';
import {AnchorButton} from '../../components/AnchorButton/AnchorButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/Navigator';
import {getDocs, query, where} from 'firebase/firestore';
import {FIREBASE_FLIGHTS} from '../../../config/firebase-config';
import {useSelector} from 'react-redux';
import {RootState} from '../../types/types';
import Flights from '../../interfaces/Flights';
import Snackbar from 'react-native-snackbar';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

export const MyFlightsScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isFocused = useIsFocused();

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const userIdValue = useSelector((state: RootState) => state.counter.userId);

  const [flights, setFlights] = useState<Flights[] | undefined>([]);

  const fetchFlights = async () => {
    try {
      const q = query(FIREBASE_FLIGHTS, where('uid', '==', userIdValue));
      const querySnapshot = await getDocs(q);
      const dataArray = querySnapshot.docs.map(doc => ({
        ...doc.data(),
      }));
      setFlights(dataArray);
    } catch (error) {
      Snackbar.show({
        text: error.message,
        backgroundColor: 'red',
      });
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      setIsLoading(true);
      fetchFlights();
    }
  }, [isFocused, userIdValue]);

  const handleLogOut = () => {
    FIREBASE_AUTH.signOut();
  };

  return (
    <View style={styles.column}>
      {isLoading ? (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#5C6EF8" />
        </View>
      ) : flights && flights.length > 0 ? (
        <>
          <View style={styles.logoutBar}>
            <Text style={styles.screenTitle}>My Flights</Text>
            <Ionicons
              style={styles.icon}
              name="log-out-outline"
              size={33}
              color="#5C6EF8"
              onPress={() => {
                handleLogOut();
              }}
            />
          </View>
          <FlightsList data={flights} />
          <AddButton
            onPress={() => {
              navigation.navigate('OriginScreen');
            }}
          />
        </>
      ) : (
        <>
          <View style={styles.logoutBar}>
            <Text style={styles.screenTitle}>My Flights</Text>
            <Ionicons
              style={styles.icon}
              name="log-out-outline"
              size={33}
              color="#5C6EF8"
              onPress={() => {
                handleLogOut();
              }}
            />
          </View>
          <View style={styles.noFlightsContainer}>
            <Text style={styles.header}>No Flights Found</Text>
            <Text style={styles.subHeader}>Want to flight?</Text>
            <Image
              style={styles.image}
              source={require('../../../assets/noFly.png')}
            />
          </View>
          <AddButton
            onPress={() => {
              navigation.navigate('OriginScreen');
            }}
          />
        </>
      )}
    </View>
  );
};
