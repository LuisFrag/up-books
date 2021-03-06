import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookDetails from './pages/Details';
import BottomTabNavigator from './components/BottomTabNavigator';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5',
          },
        }}
      >
        <Stack.Screen name="Home" component={BottomTabNavigator} />
        <Stack.Screen name="Details" component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
