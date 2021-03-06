import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SCREEN_NAMES } from 'src/navigation/constants';

import NavHeader from 'src/components/nav-header';

import AboutApp from 'src/screens/drawer/about';

const StackCreator = createStackNavigator();

export default () => {
  return (
    <StackCreator.Navigator
      screenOptions={{
        header: props => {
          return <NavHeader {...props} />;
        },
      }}
    >
      <StackCreator.Screen
        options={{
          title: 'About this app',
        }}
        name={SCREEN_NAMES.aboutApp}
        component={AboutApp}
      />
    </StackCreator.Navigator>
  );
};
