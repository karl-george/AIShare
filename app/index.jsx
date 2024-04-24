import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  //Safeareaview for the most outside view of the app to ensure compatibility with all devices
  return (
    <SafeAreaView className='h-full bg-primary'>
      {/* ScrollView ensures that the content is scrollable for smaller screens */}
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='items-center justify-center w-full h-full px-4'>
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className='w-full max-w-[380px] h-[300px]'
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-3xl font-bold text-center text-white'>
              Discover Endless Possibilities with{' '}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>
            <Image
              source={images.path}
              className='w-[80px] h=[15px] absolute -bottom-5 -right-2'
              resizeMode='contain'
            />
          </View>
          <Text className='text-sm text-center text-gray-100 font-pregular mt-7'>
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title={'Continue with Email'}
            handlePress={() => {}}
            containerStyles='w-full mt-7'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
