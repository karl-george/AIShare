import { View, Text } from 'react-native';
import React from 'react';

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-gray-100 font-pmedium'>{title}</Text>
      <View className='items-center w-full h-16 px-4 border-2 border-black-200 bg-black-100 rounded-2xl focus:border-secondary'></View>
    </View>
  );
};

export default FormField;
