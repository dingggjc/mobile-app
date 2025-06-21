import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Settings } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const featuredCards = [
  {
    id: 1,
    title: 'Morning Meditation',
    subtitle: 'Start your day with peace',
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400',
    gradient: ['#8b5cf6', '#ec4899'],
  },
  {
    id: 2,
    title: 'Yoga Flow',
    subtitle: 'Gentle movement for body',
    image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=400',
    gradient: ['#10b981', '#3b82f6'],
  },
  {
    id: 3,
    title: 'Mindful Breathing',
    subtitle: 'Center yourself in moments',
    image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=400',
    gradient: ['#f59e0b', '#f97316'],
  },
];

const quickActions = [
  { icon: '🧘', title: 'Meditate', color: 'bg-purple-100', textColor: 'text-purple-700' },
  { icon: '🏃', title: 'Exercise', color: 'bg-blue-100', textColor: 'text-blue-700' },
  { icon: '📖', title: 'Journal', color: 'bg-green-100', textColor: 'text-green-700' },
  { icon: '🎵', title: 'Music', color: 'bg-pink-100', textColor: 'text-pink-700' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row justify-between items-center px-6 py-4">
          <View>
            <Text className="text-2xl font-inter-bold text-gray-900">Good Morning</Text>
            <Text className="text-base font-inter text-gray-600">Welcome back to Joy</Text>
          </View>
          <View className="flex-row space-x-3">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
              <Bell size={20} color="#6b7280" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
              <Settings size={20} color="#6b7280" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Featured Section */}
        <View className="px-6 py-4">
          <Text className="text-xl font-inter-semibold text-gray-900 mb-4">Featured Today</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="space-x-4">
            {featuredCards.map((card) => (
              <TouchableOpacity key={card.id} className="mr-4">
                <View className="w-72 h-48 rounded-2xl overflow-hidden">
                  <Image
                    source={{ uri: card.image }}
                    className="w-full h-full absolute"
                    resizeMode="cover"
                  />
                  <LinearGradient
                    colors={[...card.gradient.map(color => color + '80'), ...card.gradient]}
                    className="flex-1 justify-end p-6"
                  >
                    <Text className="text-white text-xl font-inter-bold mb-1">{card.title}</Text>
                    <Text className="text-white/90 text-sm font-inter">{card.subtitle}</Text>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Quick Actions */}
        <View className="px-6 py-4">
          <Text className="text-xl font-inter-semibold text-gray-900 mb-4">Quick Actions</Text>
          <View className="flex-row flex-wrap justify-between">
            {quickActions.map((action, index) => (
              <TouchableOpacity
                key={index}
                className={`${action.color} w-[48%] p-6 rounded-2xl mb-4 items-center`}
              >
                <Text className="text-3xl mb-2">{action.icon}</Text>
                <Text className={`${action.textColor} font-inter-semibold text-base`}>
                  {action.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Daily Quote */}
        <View className="mx-6 my-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
          <Text className="text-center text-lg font-inter-medium text-gray-800 mb-2">
            "The joy of life comes from our encounters with new experiences."
          </Text>
          <Text className="text-center text-sm font-inter text-gray-600">
            — Christopher McCandless
          </Text>
        </View>

        {/* Recent Activity */}
        <View className="px-6 py-4 pb-8">
          <Text className="text-xl font-inter-semibold text-gray-900 mb-4">Recent Activity</Text>
          <View className="space-y-3">
            {[
              { title: 'Morning Meditation', time: '8:00 AM', duration: '15 min' },
              { title: 'Gratitude Journal', time: '9:30 AM', duration: '10 min' },
              { title: 'Yoga Session', time: '6:00 PM', duration: '30 min' },
            ].map((activity, index) => (
              <View key={index} className="bg-gray-50 p-4 rounded-xl flex-row justify-between items-center">
                <View>
                  <Text className="font-inter-medium text-gray-900">{activity.title}</Text>
                  <Text className="font-inter text-gray-600 text-sm">{activity.time}</Text>
                </View>
                <Text className="font-inter-semibold text-joy-purple">{activity.duration}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}