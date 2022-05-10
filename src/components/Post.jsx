import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Feather} from "@expo/vector-icons";

export default function Post(props) {
    return (
        <View style={styles.row}>
            <Text style={styles.title}>{props.post.title}</Text>
            <TouchableOpacity onPress={() => props.onDelete(props.post.id)}>
                <Feather name="trash" style={styles.iconStyle}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    iconStyle: {
        fontSize: 24
    }
})