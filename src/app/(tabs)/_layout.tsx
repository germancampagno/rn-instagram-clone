import { Tabs } from 'expo-router'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabsLayout() {
    return <Tabs screenOptions={{ tabBarActiveTintColor: 'black', tabBarShowLabel: false }}>
        <Tabs.Screen name='index' options={{
            headerTitle: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome name="home" size={26} color={color} />
        }} />
        <Tabs.Screen name='search' options={{
            headerTitle: 'Search',
            tabBarIcon: ({ color }) => <FontAwesome name="search" size={26} color={color} />
        }} />
        <Tabs.Screen name='create' options={{
            headerTitle: 'Create Post',
            tabBarIcon: ({ color }) => <FontAwesome name="plus-square-o" size={26} color={color} />
        }} />
        <Tabs.Screen name='reels' options={{
            headerTitle: 'Reels',
            tabBarIcon: ({ color }) => <FontAwesome name="video-camera" size={26} color={color} />
        }} />
        <Tabs.Screen name='profile' options={{
            headerTitle: 'Profile',
            tabBarIcon: ({ color }) => <FontAwesome name="user-circle-o" size={26} color={color} />
        }} />

    </Tabs>
}