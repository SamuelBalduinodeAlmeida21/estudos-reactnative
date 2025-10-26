import { View, Text, TouchableOpacity } from 'react-native';

interface IMyBtProps{
    order?: number; /*se colocarmos ponto de interrogação logo após a propriedade, 
    ela passa a ser OPCIONAL, ou seja, podemos declarar ela ou não*/
    children: React.ReactNode;
    onPress: () => void;
}

export const MyBt = (props: IMyBtProps) => {
    return(
    <TouchableOpacity onPress={props.onPress}>
        <View>
            <Text>
                {props.order}
                {props.children}
            </Text>
        </View>
    </TouchableOpacity>
    )
}