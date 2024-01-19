import React from 'react';
import {View, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const theme = isDarkMode ? DarkTheme : DefaultTheme;

  return (
    <Provider store={store}>
      <View style={[backgroundStyle, {flex: 1}]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <NavigationContainer theme={theme}>
          <Navigation />
        </NavigationContainer>
      </View>
    </Provider>
  );
}

export default App;
