import { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getAllPosts } from '../../lib/appwrite';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';
import { images } from '../../constants';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const reponse = await getAllPosts();
        setData(reponse);
      } catch (error) {
        Alert.alert('Error', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    // Refresh videos to see if any new ones have been added
    setRefreshing(false);
  };

  return (
    <SafeAreaView className='bg-primary'>
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className='text-3xl text-white'>{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-6'>
            <View className='justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-pmedium text-sm text-gray-100'>
                  Welcome Back
                </Text>
                <Text className='text-2xl font-psemibold text-white'>KG</Text>
              </View>
              <View className='mt-1.5'>
                <Image
                  source={images.logoSmall}
                  className='w-9 h-10'
                  resizeMode='contain'
                />
              </View>
            </View>
            <SearchInput />
            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-gray-100 text-lg font-pregular mb-3'>
                Trending Videos
              </Text>
              {/* ?? is saying if it doesnt exist make an empty array */}
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title='No videos found'
            subtitle='Be the first one to upload a video'
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
