import React, { useState } from "react";
import { View, StyleSheet, ActivityIndicator, Text, FlatList } from "react-native";
import PostItem from "../../components/PostItem";
import usePosts from "../../hooks/usePosts";
import { useScrollToTop } from '@react-navigation/native';


export default function FeedScreen() {
    const { posts, loading, error } = usePosts();

    const ref = React.useRef(null);
    useScrollToTop(ref);

    console.log('Loading:', loading, 'Error:', error);

    if (loading) return (
        <View style={styles.infoContainer}>
            <ActivityIndicator size="large" />
        </View>
    );

    if (error) return (
        <View style={styles.infoContainer}>
            <Text>Error loading posts: {error || error.toString()}</Text>
        </View>
    );

    return (
        <FlatList
            ref={ref}
            style={styles.container}
            data={posts}
            renderItem={({ item }) => <PostItem post={item} />}
            keyExtractor={(item) => item.id}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    infoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});