import React from "react";
import { Image, Text, View, StyleSheet, useWindowDimensions } from "react-native";
import { Ionicons, Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
import { Post } from "../model/Post";
import moment from "moment";
import Avatar from "./Avatar";

interface PostItemProps {
    post: Post
}

export default function PostItem({ post }: PostItemProps) {
    const { width } = useWindowDimensions();
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Avatar post={post} />
                <View style={styles.headerText}>
                    <Text style={styles.username}>{post.name}</Text>
                    <Text style={styles.location}>{post.location}</Text>
                </View>
            </View>

            <Image source={{ uri: post.image }} style={[styles.image, { width, height: width }]} />

            <View style={styles.iconsRow}>
                <AntDesign
                    name={post.liked ? 'heart' : 'hearto'}
                    size={24}
                    color={post.liked ? 'crimson' : 'black'}
                    style={styles.icon}
                />
                <Ionicons name="chatbubble-outline" size={24} style={styles.icon} />
                <Feather name="send" size={24} style={styles.icon} />
                <Feather name="bookmark" size={24} style={styles.bookmarkIcon} />
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.likesCount}>
                    {post.likes.toLocaleString() || 0} Likes
                </Text>
                <Text style={styles.caption}>
                    <Text style={styles.captionUsername}>
                        {/* forcing a space to avoid each text having its own block, in that case if the description it's too long, it would appear below the username instead of wrapping everything together */}
                        {post.name}{' '}
                    </Text>
                    {post.description}
                </Text>
                <Text style={styles.commentsCount}>
                    View all {post.comments.toLocaleString()} comments
                </Text>
                <Text style={styles.date}>
                    {moment(post.createdAt).fromNow()}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    header: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        marginLeft: 8,
        justifyContent: 'center'
    },
    username: {
        fontWeight: '600',
    },

    location: {
        fontWeight: '400',
    },
    image: {
        aspectRatio: 4 / 3,
    },
    iconsRow: {
        flexDirection: 'row',
        padding: 12,
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    bookmarkIcon: {
        marginLeft: 'auto',
    },
    detailsContainer: {
        paddingHorizontal: 12,
        paddingBottom: 12,
    },
    likesCount: {
        fontWeight: '600',
    },
    caption: {
        marginTop: 2,
    },
    captionUsername: {
        fontWeight: '600',
    },
    commentsCount: {
        marginTop: 4,
        color: 'gray',
    },
    date: {
        marginTop: 4,
        fontWeight: 400,
        fontSize: 12,
        color: 'gray',
    },

});