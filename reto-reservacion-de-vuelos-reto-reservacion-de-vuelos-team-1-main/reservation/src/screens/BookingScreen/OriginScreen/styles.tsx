import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
  },
  middleContainer: {
    height: windowHeight * 0.5,
    justifyContent: 'space-between',
    marginBottom: windowHeight * 0.18,
  },
  header: {
    marginTop: windowHeight * 0.185,
    fontSize: 30,
    color: '#000000',
    fontWeight: '800',
    marginBottom: 19,
  },
});
export default styles;
