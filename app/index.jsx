import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className='items-center justify-center flex-1 bg-white'>
      <Text className='text-3xl font-pblack'>AIShare</Text>
      <StatusBar style='auto' />
      <Link href='/home' style={{ color: 'blue' }}>
        Go to Home
      </Link>
    </View>
  );
}
