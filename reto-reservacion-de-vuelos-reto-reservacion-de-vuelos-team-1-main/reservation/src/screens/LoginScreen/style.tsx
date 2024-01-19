import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-evenly',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 26,
    color: '#5C6EF8',
    fontWeight: '800',
    marginBottom: 20,
  },
  checboxContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  textOr: {
    color: 'gray',
    fontSize: 16,
    marginVertical: 10,
  },
  textAccount: {
    color: 'gray',
    fontSize: 20,
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
});

export default styles;
