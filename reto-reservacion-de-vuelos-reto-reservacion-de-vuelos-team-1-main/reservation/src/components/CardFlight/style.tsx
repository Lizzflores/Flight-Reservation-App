import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  flightContainer: {
    flexDirection: 'column',
    width: 390,
    height: windowHeight * 0.17,
    justifyContent: 'center',
    padding: 10,
  },
  myFlightsContainer: {
    flexDirection: 'column',
    width: 390,
    height: windowHeight * 0.2,
    justifyContent: 'center',
    padding: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: 'gray',
  },
  originAndDestination: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  origin: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    color: '#000000',
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    margin: 10,
  },
  icon: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 30,
    zIndex: 1,
    right: windowWidth * 0.41,
  },
  destination: {
    alignItems: 'flex-end',
    flexDirection: 'column',
    flex: 1,
  },
  containerDateAndPassengers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text2: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default styles;
