import { router, usePathname } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { icons } from '../constants';

const SearchInput = ({ initialQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || '');

  return (
    <View className='flex-row items-center w-full h-16 px-4 border-2 border-black-200 bg-black-100 rounded-2xl focus:border-secondary space-x-4'>
      <TextInput
        className='text-base mt-0.5 text-white flex-1 font-pregular'
        value={query}
        placeholder='Search for a video topic'
        placeholderTextColor='#cbcbe0'
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert('Missing query', 'Please enter a search query');
          }

          if (pathname.startsWith('/search')) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image source={icons.search} className='h-5 w-5' resizeMode='contain' />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
