import React from 'react';
import {FlatList} from 'react-native';
import Flights from '../../interfaces/Flights';
import CardFlight from '../CardFlight/CardFlight';

interface FlightsListProps {
  data: Flights[];
}

const FlightsList: React.FC<FlightsListProps> = ({data}) => {
  const renderItem = ({item}: {item: Flights}) => <CardFlight {...item} />;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default FlightsList;
