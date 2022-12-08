import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const HeaderLeft = (props) => {
    const navigation = useNavigation();

    return <TouchableOpacity onPress={() => {
        navigation.goBack();
    }}>
        <Entypo name="chevron-left" size={24} color="#ffffff" />
    </TouchableOpacity>
}

export default HeaderLeft;