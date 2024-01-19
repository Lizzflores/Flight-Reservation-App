import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
  },
  middleContainer: {
    height: windowHeight * 0.5,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 30,
    color: '#000000',
    fontWeight: '800',
    marginBottom: 5,
  },
});
export default styles;
