import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Filter, Clock, Star } from 'lucide-react-native';

const categories = [
  { name: 'All', active: true },
  { name: 'Meditation', active: false },
  { name: 'Fitness', active: false },
  { name: 'Sleep', active: false },
  { name: 'Focus', active: false },
];

const discoverItems = [
  {
    id: 1,
    title: '7-Day Mindfulness Challenge',
    instructor: 'Sarah Johnson',
    duration: '10-15 min',
    rating: 4.8,
    participants: '12.3k',
    image:
      'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Meditation',
  },
  {
    id: 2,
    title: 'HIIT Workout Basics',
    instructor: 'Mike Chen',
    duration: '20-30 min',
    rating: 4.9,
    participants: '8.7k',
    image:
      'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fitness',
  },
  {
    id: 3,
    title: 'Deep Sleep Stories',
    instructor: 'Emma Wilson',
    duration: '30-45 min',
    rating: 4.7,
    participants: '15.2k',
    image:
      'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Sleep',
  },
  {
    id: 4,
    title: 'Focus Flow Sessions',
    instructor: 'David Kim',
    duration: '25 min',
    rating: 4.8,
    participants: '9.1k',
    image:
      'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Focus',
  },
];

export default function DiscoverScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 py-4">
          <Text className="text-2xl font-inter-bold text-gray-900 mb-4">
            Discover
          </Text>

          {/* Search Bar */}
          <View className="flex-row items-center space-x-3 mb-6">
            <View className="flex-1 flex-row items-center bg-gray-100 rounded-xl px-4 py-3">
              <Search size={20} color="#6b7280" />
              <TextInput
                placeholder="Search programs, instructors..."
                className="flex-1 ml-3 font-inter text-gray-900"
                placeholderTextColor="#9ca3af"
              />
            </View>
            <TouchableOpacity className="p-3 bg-joy-purple rounded-xl">
              <Filter size={20} color="white" />
            </TouchableOpacity>
          </View>

          {/* Categories */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mb-6"
          >
            <View className="flex-row space-x-3">
              {categories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  className={`px-6 py-3 rounded-full ${
                    category.active ? 'bg-joy-purple' : 'bg-gray-100'
                  }`}
                >
                  <Text
                    className={`font-inter-medium ${
                      category.active ? 'text-white' : 'text-gray-600'
                    }`}
                  >
                    {category.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Trending Section */}
        <View className="px-6 mb-6">
          <Text className="text-xl font-inter-semibold text-gray-900 mb-4">
            Trending Now
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {discoverItems.slice(0, 2).map((item) => (
              <TouchableOpacity key={item.id} className="mr-4">
                <View className="w-80 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <Image
                    source={{ uri: item.image }}
                    className="w-full h-48"
                    resizeMode="cover"
                  />
                  <View className="p-4">
                    <View className="flex-row items-center justify-between mb-2">
                      <Text className="text-xs font-inter-medium text-joy-purple bg-purple-100 px-2 py-1 rounded-full">
                        {item.category}
                      </Text>
                      <View className="flex-row items-center">
                        <Star size={14} color="#f59e0b" fill="#f59e0b" />
                        <Text className="ml-1 text-sm font-inter-medium text-gray-600">
                          {item.rating}
                        </Text>
                      </View>
                    </View>
                    <Text className="text-lg font-inter-semibold text-gray-900 mb-1">
                      {item.title}
                    </Text>
                    <Text className="text-sm font-inter text-gray-600 mb-2">
                      by {item.instructor}
                    </Text>
                    <View className="flex-row items-center justify-between">
                      <View className="flex-row items-center">
                        <Clock size={14} color="#6b7280" />
                        <Text className="ml-1 text-sm font-inter text-gray-600">
                          {item.duration}
                        </Text>
                      </View>
                      <Text className="text-sm font-inter text-gray-500">
                        {item.participants} joined
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* All Programs */}
        <View className="px-6 pb-8">
          <Text className="text-xl font-inter-semibold text-gray-900 mb-4">
            All Programs
          </Text>
          <View className="space-y-4">
            {discoverItems.map((item) => (
              <TouchableOpacity key={item.id}>
                <View className="flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <Image
                    source={{ uri: item.image }}
                    className="w-24 h-24"
                    resizeMode="cover"
                  />
                  <View className="flex-1 p-4">
                    <View className="flex-row items-center justify-between mb-2">
                      <Text className="text-xs font-inter-medium text-joy-purple bg-purple-100 px-2 py-1 rounded-full">
                        {item.category}
                      </Text>
                      <View className="flex-row items-center">
                        <Star size={14} color="#f59e0b" fill="#f59e0b" />
                        <Text className="ml-1 text-sm font-inter-medium text-gray-600">
                          {item.rating}
                        </Text>
                      </View>
                    </View>
                    <Text className="text-base font-inter-semibold text-gray-900 mb-1">
                      {item.title}
                    </Text>
                    <Text className="text-sm font-inter text-gray-600 mb-2">
                      by {item.instructor}
                    </Text>
                    <View className="flex-row items-center justify-between">
                      <View className="flex-row items-center">
                        <Clock size={14} color="#6b7280" />
                        <Text className="ml-1 text-sm font-inter text-gray-600">
                          {item.duration}
                        </Text>
                      </View>
                      <Text className="text-sm font-inter text-gray-500">
                        {item.participants} joined
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
