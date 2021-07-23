import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

// Hooks
import {Provider as AuthProvider} from './src/context/AuthContext';
import Navigation from './src/navigation';

function App() {
  const colorScheme = useColorScheme();

  return (
    <AuthProvider>
      <SafeAreaView style={ownStyle.container}>
        <Navigation colorScheme={colorScheme} />
      </SafeAreaView>
    </AuthProvider>
  );
}

const ownStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
