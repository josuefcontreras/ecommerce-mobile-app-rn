import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Args = {
  name: React.ComponentProps<typeof Ionicons>['name'];
};

const AuthFormIcon = ({name}: Args) => {
  return <Ionicons name={name} size={35} color={'#ffffff'} />;
};

export {AuthFormIcon};
