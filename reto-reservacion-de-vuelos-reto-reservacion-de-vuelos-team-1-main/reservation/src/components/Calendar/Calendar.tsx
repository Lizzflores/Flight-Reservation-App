import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {View, Dimensions} from 'react-native';
import CalendarPicker, {
  DateChangedCallback,
} from 'react-native-calendar-picker';
//redux
import {useDispatch} from 'react-redux';
import {addDate} from '../../redux/slices/booking.slice';
import {Moment} from 'moment';

export const Calendar: React.FC = () => {
  const dispatch = useDispatch();

  const handleDate = (date: string) => {
    dispatch(addDate(date));
  };

  const onDateChange = (date: Moment, type: 'START_DATE' | 'END_DATE') => {
    if (type === 'START_DATE') {
      handleDate(date.format('MMMM D, yyyy'));
    }
  };

  return (
    <View>
      <CalendarPicker
        onDateChange={onDateChange as DateChangedCallback}
        width={Dimensions.get('window').width * 0.8}
        height={Dimensions.get('window').height * 0.7}
        minDate={new Date()}
        previousComponent={
          <Ionicons name="chevron-back-outline" size={30} color="#6170f7" />
        }
        nextComponent={
          <Ionicons name="chevron-forward-outline" size={30} color="#6170f7" />
        }
        selectedDayColor="#6170f7"
        selectedDayTextColor="#ffffff"
        todayBackgroundColor="lightgray"
        todayTextStyle={{color: '#000000'}}
      />
    </View>
  );
};
