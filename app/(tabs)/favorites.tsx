import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart, BookOpen, Star, Clock, Filter } from 'lucide-react-native';

const favoriteCategories = [
  { name: 'All', active: true, count: 24 },
  { name: 'Meditations', active: false, count: 12 },
  { name: 'Workouts', active: false, count: 6 },
  { name: 'Journals', active: false, count: 6 },
];

const favoriteItems = [
  {
    id: 1,
    title: 'Morning Mindfulness',
    type: 'Meditation',
    duration: '15 min',
    rating: 4.8,
    lastUsed: '2 days ago',
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400',
    instructor: 'Sarah Johnson',
  },
  {
    id: 2,
    title: 'Strength Training Basics',
    type: 'Workout',
    duration: '30 min',
    rating: 4.9,
    lastUsed: '1 week ago',
    image: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=400',
    instructor: 'Mike Chen',
  },
  {
    id: 3,
    title: 'Gratitude Practice',
    type: 'Journal',
    duration: '10 min',
    rating: 4.7,
    lastUsed: '3 days ago',
    image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=400',
    instructor: 'Emma Wilson',
  },
  {
    id: 4,
    title: 'Deep Sleep Meditation',
    type: 'Meditation',
    duration: '45 min',
    rating: 4.8,
    lastUsed: '1 day ago',
    image: 'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=400',
    instructor: 'David Kim',
  },
  {
    id: 5,
    title: 'HIIT Cardio Blast',
    type: 'Workout',
    duration: '20 min',
    rating: 4.9,
    lastUsed: '5 days ago',
    image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=400',
    instructor: 'Lisa Rodriguez',
  },
];

export default function FavoritesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row justify-between items-center px-6 py-4">
          <View>
            <Text className="text-2xl font-inter-bold text-gray-900">Favorites</Text>
            <Text className="text-base font-inter text-gray-600">Your saved content</Text>
          </View>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
            <Filter size={20} color="#6b7280" />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View className="px-6 py-4">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row space-x-3">
              {favoriteCategories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  className={`px-4 py-2 rounded-full flex-row items-center ${
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
                  <Text
                    className={`ml-2 text-xs px-2 py-1 rounded-full ${
                      category.active 
                        ? 'bg-white/20 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {category.count}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Stats */}
        <View className="mx-6 mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
          <View className="flex-row justify-between items-center">
            <View className="items-center">
              <Text className="text-2xl font-inter-bold text-joy-purple">24</Text>
              <Text className="text-sm font-inter text-gray-600">Total Favorites</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-inter-bold text-joy-purple">12</Text>
              <Text className="text-sm font-inter text-gray-600">This Month</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-inter-bold text-joy-purple">4.8</Text>
              <Text className="text-sm font-inter text-gray-600">Avg Rating</Text>
            </View>
          </View>
        </View>

        {/* Recently Added */}
        <View className="px-6 mb-6">
          <Text className="text-xl font-inter-semibold text-gray-900 mb-4">Recently Added</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {favoriteItems.slice(0, 3).map((item) => (
              <TouchableOpacity key={item.id} className="mr-4">
                <View className="w-64 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <Image
                    source={{ uri: item.image }}
                    className="w-full h-32"
                    resizeMode="cover"
                  />
                  <View className="p-4">
                    <View className="flex-row items-center justify-between mb-2">
                      <Text className="text-xs font-inter-medium text-joy-purple bg-purple-100 px-2 py-1 rounded-full">
                        {item.type}
                      </Text>
                      <TouchableOpacity>
                        <Heart size={18} color="#ec4899" fill="#ec4899" />
                      </TouchableOpacity>
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
                      <View className="flex-row items-center">
                        <Star size={14} color="#f59e0b" fill="#f59e0b" />
                        <Text className="ml-1 text-sm font-inter-medium text-gray-600">
                          {item.rating}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* All Favorites */}
        <View className="px-6 pb-8">
          <Text className="text-xl font-inter-semibold text-gray-900 mb-4">All Favorites</Text>
          <View className="space-y-4">
            {favoriteItems.map((item) => (
              <TouchableOpacity key={item.id}>
                <View className="flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <Image
                    source={{ uri: item.image }}
                    className="w-20 h-20"
                    resizeMode="cover"
                  />
                  <View className="flex-1 p-4">
                    <View className="flex-row items-center justify-between mb-2">
                      <Text className="text-xs font-inter-medium text-joy-purple bg-purple-100 px-2 py-1 rounded-full">
                        {item.type}
                      </Text>
                      <TouchableOpacity>
                        <Heart size={18} color="#ec4899" fill="#ec4899" />
                      </TouchableOpacity>
                    </View>
                    <Text className="text-base font-inter-semibold text-gray-900 mb-1">
                      {item.title}
                    </Text>
                    <Text className="text-sm font-inter text-gray-600 mb-2">
                      by {item.instructor}
                    </Text>
                    <View className="flex-row items-center justify-between">
                      <View className="flex-row items-center space-x-3">
                        <View className="flex-row items-center">
                          <Clock size={14} color="#6b7280" />
                          <Text className="ml-1 text-sm font-inter text-gray-600">
                            {item.duration}
                          </Text>
                        </View>
                        <View className="flex-row items-center">
                          <Star size={14} color="#f59e0b" fill="#f59e0b" />
                          <Text className="ml-1 text-sm font-inter text-gray-600">
                            {item.rating}
                          </Text>
                        </View>
                      </View>
                      <Text className="text-xs font-inter text-gray-500">
                        {item.lastUsed}
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