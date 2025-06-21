import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, CreditCard as Edit, Award, TrendingUp, Calendar, Bell, Lock, CircleHelp as HelpCircle, LogOut } from 'lucide-react-native';

const stats = [
  { label: 'Sessions', value: '156', color: 'text-joy-purple' },
  { label: 'Streak', value: '12', color: 'text-joy-blue' },
  { label: 'Minutes', value: '2.4k', color: 'text-joy-green' },
  { label: 'Level', value: '8', color: 'text-joy-orange' },
];

const achievements = [
  { icon: '🏆', title: 'First Session', description: 'Completed your first meditation' },
  { icon: '🔥', title: '7-Day Streak', description: 'Meditated for 7 days straight' },
  { icon: '⭐', title: 'Early Bird', description: 'Morning session before 8 AM' },
  { icon: '🎯', title: 'Focused', description: 'Completed 50 focus sessions' },
];

const menuItems = [
  { icon: <Settings size={20} color="#6b7280" />, title: 'Settings', subtitle: 'App preferences' },
  { icon: <Bell size={20} color="#6b7280" />, title: 'Notifications', subtitle: 'Manage alerts' },
  { icon: <Lock size={20} color="#6b7280" />, title: 'Privacy', subtitle: 'Data & security' },
  { icon: <HelpCircle size={20} color="#6b7280" />, title: 'Help & Support', subtitle: 'Get assistance' },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row justify-between items-center px-6 py-4">
          <Text className="text-2xl font-inter-bold text-gray-900">Profile</Text>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
            <Settings size={20} color="#6b7280" />
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View className="items-center px-6 py-4">
          <View className="relative mb-4">
            <Image
              source={{ uri: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400' }}
              className="w-24 h-24 rounded-full"
              resizeMode="cover"
            />
            <TouchableOpacity className="absolute bottom-0 right-0 bg-joy-purple p-2 rounded-full">
              <Edit size={14} color="white" />
            </TouchableOpacity>
          </View>
          <Text className="text-xl font-inter-bold text-gray-900 mb-1">Alex Johnson</Text>
          <Text className="text-base font-inter text-gray-600 mb-4">Member since March 2024</Text>
          
          {/* Stats */}
          <View className="flex-row justify-between w-full bg-gray-50 p-4 rounded-2xl">
            {stats.map((stat, index) => (
              <View key={index} className="items-center">
                <Text className={`text-2xl font-inter-bold ${stat.color}`}>{stat.value}</Text>
                <Text className="text-sm font-inter text-gray-600">{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Current Level */}
        <View className="mx-6 mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-lg font-inter-semibold text-gray-900">Mindful Explorer</Text>
            <View className="flex-row items-center">
              <Award size={16} color="#8b5cf6" />
              <Text className="ml-1 text-sm font-inter-semibold text-joy-purple">Level 8</Text>
            </View>
          </View>
          <View className="bg-white/50 rounded-full h-2 mb-2">
            <View className="bg-joy-purple rounded-full h-2" style={{ width: '75%' }} />
          </View>
          <Text className="text-sm font-inter text-gray-600">
            750 / 1000 XP to next level
          </Text>
        </View>

        {/* Recent Achievements */}
        <View className="px-6 mb-6">
          <Text className="text-xl font-inter-semibold text-gray-900 mb-4">Recent Achievements</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row space-x-4">
              {achievements.map((achievement, index) => (
                <View key={index} className="bg-white border border-gray-100 rounded-2xl p-4 w-48 shadow-sm">
                  <Text className="text-3xl mb-2">{achievement.icon}</Text>
                  <Text className="font-inter-semibold text-gray-900 mb-1">{achievement.title}</Text>
                  <Text className="text-sm font-inter text-gray-600">{achievement.description}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Activity Overview */}
        <View className="px-6 mb-6">
          <Text className="text-xl font-inter-semibold text-gray-900 mb-4">This Week</Text>
          <View className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
            <View className="flex-row items-center justify-between mb-4">
              <View className="flex-row items-center">
                <TrendingUp size={20} color="#10b981" />
                <Text className="ml-2 font-inter-semibold text-gray-900">Progress</Text>
              </View>
              <Text className="text-sm font-inter-semibold text-joy-green">+12%</Text>
            </View>
            <View className="space-y-3">
              {[
                { day: 'Mon', sessions: 2, duration: '25 min' },
                { day: 'Tue', sessions: 1, duration: '15 min' },
                { day: 'Wed', sessions: 3, duration: '45 min' },
                { day: 'Thu', sessions: 1, duration: '20 min' },
                { day: 'Fri', sessions: 2, duration: '30 min' },
              ].map((day, index) => (
                <View key={index} className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <Text className="font-inter-medium text-gray-900 w-8">{day.day}</Text>
                    <View className="bg-joy-purple/20 rounded-full px-2 py-1 ml-2">
                      <Text className="text-xs font-inter-semibold text-joy-purple">
                        {day.sessions} sessions
                      </Text>
                    </View>
                  </View>
                  <Text className="text-sm font-inter text-gray-600">{day.duration}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View className="px-6 mb-6">
          <Text className="text-xl font-inter-semibold text-gray-900 mb-4">Account</Text>
          <View className="space-y-2">
            {menuItems.map((item, index) => (
              <TouchableOpacity key={index}>
                <View className="flex-row items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <View className="flex-row items-center">
                    <View className="p-2 bg-white rounded-lg mr-3">
                      {item.icon}
                    </View>
                    <View>
                      <Text className="font-inter-medium text-gray-900">{item.title}</Text>
                      <Text className="text-sm font-inter text-gray-600">{item.subtitle}</Text>
                    </View>
                  </View>
                  <Text className="text-gray-400">›</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Sign Out */}
        <View className="px-6 pb-8">
          <TouchableOpacity>
            <View className="flex-row items-center justify-center p-4 bg-red-50 rounded-xl border border-red-100">
              <LogOut size={20} color="#ef4444" />
              <Text className="ml-2 font-inter-semibold text-red-500">Sign Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}