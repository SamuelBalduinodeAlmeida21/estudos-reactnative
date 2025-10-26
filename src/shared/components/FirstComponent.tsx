import { View, Text } from "react-native";


interface IFirstCompnentProps{
    order: number;
}
export const FirstComponent = (props: IFirstCompnentProps) => {

    return (
        <View>
            <Text>Primeiríssimo component {props.order}</Text>
        </View>
    );

} 