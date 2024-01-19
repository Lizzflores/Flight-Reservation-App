import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  pickerContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  scroll: {
    backgroundColor: '#FFFFFF',
    width: 250,
    height: 215,
  },
  containerArrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowLeft: {
    flex: 1,
    position: 'absolute',
    top: -132,
    zIndex: 1,
    left: 0,
  },
  arrowRight: {
    flex: 1,
    position: 'absolute',
    top: -132,
    zIndex: 1,
    right: 0,
  },
});
export default styles;
