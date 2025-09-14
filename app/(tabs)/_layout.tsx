import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E5E5EA',
        },
        tabBarActiveTintColor: '#8B5CF6', // Purple accent
        tabBarInactiveTintColor: '#8E8E93',
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <SymbolView
              name="house.fill"
              size={size || 24}
              tintColor={color || '#8E8E93'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="boxes"
        options={{
          title: 'Boxes',
          tabBarIcon: ({ color, size }) => (
            <SymbolView
              name="archivebox.fill"
              size={size || 24}
              tintColor={color || '#8E8E93'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: 'Add',
          tabBarIcon: ({ color, size }) => (
            <SymbolView
              name="plus.circle.fill"
              size={size || 24}
              tintColor={color || '#8E8E93'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: 'Progress',
          tabBarIcon: ({ color, size }) => (
            <SymbolView
              name="chart.bar.fill"
              size={size || 24}
              tintColor={color || '#8E8E93'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <SymbolView
              name="person.crop.circle.fill"
              size={size || 24}
              tintColor={color || '#8E8E93'}
            />
          ),
        }}
      />
    </Tabs>
  );
}