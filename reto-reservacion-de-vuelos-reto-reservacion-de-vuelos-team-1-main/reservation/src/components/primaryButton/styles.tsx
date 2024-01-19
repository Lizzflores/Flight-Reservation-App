import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: windowHeight * 0.15,
    justifyContent: 'center',
  },
  buttonInActive: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonActive: {
    backgroundColor: '#5C6EF8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: '8%',
    height: '100%',
    marginRight: '5%',
  },
});

export default styles;
