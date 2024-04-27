import { useState } from 'react';
import { FlatList, Image, RefreshControl, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EmptyState from '../../components/EmptyState';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import VideoCard from '../../components/VideoCard';
import { images } from '../../constants';
import { getAllPosts, getLatestPosts } from '../../lib/appwrite';
import { useGlobalContext } from '../../context/GlobalProvider';
import useAppwrite from '../../lib/useAppwrite';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const { data: latestPosts } = useAppwrite(getLatestPosts);
  const { user, setUser, setIsLoggedIn } = useGlobalContext();

  const onRefresh = async () => {
    setRefreshing(true);
    // Refresh videos to see if any new ones have been added
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className='h-full bg-primary'>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className='px-4 my-6 space-y-6'>
            <View className='flex-row items-start justify-between mb-6'>
              <View>
                <Text className='text-sm text-gray-100 font-pmedium'>
                  Welcome Back,
                </Text>
                <Text className='text-2xl text-white font-psemibold'>
                  {user?.username}
                </Text>
              </View>
              <View className='mt-1.5'>
                <Image
                  source={images.logoSmall}
                  className='h-10 w-9'
                  resizeMode='contain'
                />
              </View>
            </View>
            <SearchInput />
            <View className='flex-1 w-full pt-5 pb-8'>
              <Text className='mb-3 text-lg text-gray-100 font-pregular'>
                Trending Videos
              </Text>
              {/* ?? is saying if it doesnt exist make an empty array */}
              <Trending posts={latestPosts ?? []} />
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
