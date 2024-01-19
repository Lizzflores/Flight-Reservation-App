import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidht = Dimensions.get('window').width;
const styles = StyleSheet.create({
  column: {
    flex: 1,
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 26,
    color: '#5C6EF8',
    fontWeight: '800',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logoutBar: {
    width: windowWidht * 0.86,
    height: windowHeight * 0.14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    color: '#000000',
    fontWeight: '800',
    marginBottom: 5,
    alignSelf: 'center',
  },
  subHeader: {
    fontSize: 20,
    color: 'gray',
    fontWeight: '700',
    marginBottom: 5,
    alignSelf: 'center',
  },
  noFlightsContainer: {
    height: windowHeight * 0.7,
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  icon: {},
});

export default styles;
