import {View} from 'react-native';
import {Picker} from 'react-native-wheel-pick';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import styles from './style';
//redux
import {useDispatch} from 'react-redux';
import {addPassengers} from '../../redux/slices/booking.slice';

export const PassengersSelector = () => {
  const dispatch = useDispatch();
  const handlePassengers = (passengers: string) => {
    dispatch(addPassengers(passengers));
  };
  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.scroll}
          textSize={30}
          selectTextColor="#6170F7"
          isShowSelectBackground={false}
          isShowSelectLine={false}
          selectedValue="1"
          pickerData={[
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
          ]}
          onValueChange={(value: string) => {
            handlePassengers(value);
          }}
        />
        <View style={styles.containerArrow}>
          <Ionicons
            style={styles.arrowLeft}
            name="caret-forward"
            size={46}
            color="#6170F7"
          />
          <Ionicons
            style={styles.arrowRight}
            name="caret-back"
            size={46}
            color="#6170F7"
          />
        </View>
      </View>
    </View>
  );
};
