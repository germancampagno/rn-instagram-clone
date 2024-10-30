import { useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Post } from "../model/Post";

interface PostItemProps {
    post: Post
}

const getInitials = (name: string): string => {
    const parts = name.split(' ');
    let initials = '';
    for (let i = 0; i < parts.length; i++) {
        if (parts[i].length > 0) {
            initials += parts[i][0];
        }
    }
    return initials;
};

export default function Avatar({ post }: PostItemProps) {
    const [error, setError] = useState<boolean>(false);

    return (
        <View style={styles.avatar}>
            {error ?
                <Image source={{ uri: post.avatar }} style={styles.avatar} onError={(e) => {
                    setError(true);
                }} />
                :
                <View style={styles.initials}>
                    <Text style={styles.initialsText} adjustsFontSizeToFit={true} numberOfLines={1}>{getInitials(post.name)}</Text>
                </View>
            }
        </View>

    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 36,
        alignItems: 'center'
    },
    initials: {
        width: 36,
        height: 36,
        borderRadius: 36,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    initialsText: {
        color: 'black',
        fontSize: 12,
        padding: 2,
    }
})