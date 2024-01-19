import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
  },
  middleContainer: {
    alignItems: 'center',
    height: windowHeight * 0.5,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 30,
    color: '#000000',
    fontWeight: '800',
    marginBottom: 20,
  },
});
