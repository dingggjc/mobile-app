import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, Mic, Image, FileText, Music, Video, Sparkles } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const createOptions = [
  {
    icon: <Camera size={24} color="white" />,
    title: 'Photo Journal',
    subtitle: 'Capture moments',
    gradient: ['#8b5cf6', '#ec4899'],
  },
  {
    icon: <Mic size={24} color="white" />,
    title: 'Voice Note',
    subtitle: 'Record thoughts',
    gradient: ['#10b981', '#3b82f6'],
  },
  {
    icon: <FileText size={24} color="white" />,
    title: 'Text Entry',
    subtitle: 'Write freely',
    gradient: ['#f59e0b', '#f97316'],
  },
  {
    icon: <Music size={24} color="white" />,
    title: 'Mood Playlist',
    subtitle: 'Curate music',
    gradient: ['#ec4899', '#8b5cf6'],
  },
  {
    icon: <Video size={24} color="white" />,
    title: 'Video Log',
    subtitle: 'Record yourself',
    gradient: ['#3b82f6', '#10b981'],
  },
  {
    icon: <Image size={24} color="white" />,
    title: 'Mood Board',
    subtitle: 'Visual inspiration',
    gradient: ['#f97316', '#f59e0b'],
  },
];

const templates = [
  'Daily Gratitude',
  'Morning Intentions',
  'Evening Reflection',
  'Goal Setting',
  'Mood Tracker',
  'Memory Keeper',
];

export default function CreateScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 py-4">
          <View className="flex-row items-center mb-2">
            <Sparkles size={24} color="#8b5cf6" />
            <Text className="text-2xl font-inter-bold text-gray-900 ml-2">Create</Text>
          </View>
          <Text className="text-base font-inter text-gray-600">
            Express yourself and capture your journey
          </Text>
        </View>

        {/* Quick Start */}
        <View className="px-6 py-4">
          <Text className="text-xl font-inter-semibold text-gray-900 mb-4">Quick Start</Text>
          <View className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 mb-6">
            <Text className="text-lg font-inter-semibold text-gray-900 mb-2">
              How are you feeling today?
            </Text>
            <TextInput
              placeholder="Share your thoughts, feelings, or experiences..."
              multiline
              numberOfLines={4}
              className="bg-white p-4 rounded-xl border border-gray-200 font-inter text-gray-900 text-base"
              placeholderTextColor="#9ca3af"
              textAlignVertical="top"
            />
            <TouchableOpacity className="bg-joy-purple py-3 px-6 rounded-xl mt-4 self-start">
              <Text className="text-white font-inter-semibold">Save Entry</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Create Options */}
        <View className="px-6 py-4">
          <Text className="text-xl font-inter-semibold text-gray-900 mb-4">Create Something New</Text>
          <View className="space-y-4">
            {createOptions.map((option, index) => (
              <TouchableOpacity key={index}>
                <LinearGradient
                  colors={option.gradient}
                  className="flex-row items-center p-6 rounded-2xl"
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <View className="bg-white/20 p-3 rounded-full mr-4">
                    {option.icon}
                  </View>
                  <View className="flex-1">
                    <Text className="text-white text-lg font-inter-semibold mb-1">
                      {option.title}
                    </Text>
                    <Text className="text-white/90 font-inter">
                      {option.subtitle}
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Templates */}
        <View className="px-6 py-4 pb-8">
          <Text className="text-xl font-inter-semibold text-gray-900 mb-4">Templates</Text>
          <Text className="text-sm font-inter text-gray-600 mb-4">
            Get started with guided prompts and structures
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {templates.map((template, index) => (
              <TouchableOpacity
                key={index}
                className="w-[48%] bg-gray-50 p-4 rounded-xl mb-3 border border-gray-100"
              >
                <Text className="font-inter-semibold text-gray-900 text-center">
                  {template}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Drafts */}
        <View className="px-6 py-4 pb-8">
          <Text className="text-xl font-inter-semibold text-gray-900 mb-4">Recent Drafts</Text>
          <View className="space-y-3">
            {[
              { title: 'Morning thoughts...', time: '2 hours ago', type: 'Text' },
              { title: 'Sunset photo', time: '1 day ago', type: 'Photo' },
              { title: 'Voice memo', time: '3 days ago', type: 'Audio' },
            ].map((draft, index) => (
              <TouchableOpacity key={index}>
                <View className="bg-gray-50 p-4 rounded-xl flex-row justify-between items-center">
                  <View className="flex-1">
                    <Text className="font-inter-medium text-gray-900">{draft.title}</Text>
                    <Text className="font-inter text-gray-600 text-sm">{draft.time}</Text>
                  </View>
                  <Text className="font-inter-semibold text-joy-purple text-sm">
                    {draft.type}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}