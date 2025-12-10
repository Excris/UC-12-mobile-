import { View,Text, TextInput, BackHandler, TouchableOpacity} from 'react-native';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {} from 'expo-linear-gradient';

export default function headersBar() {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20}
                color="#888"/>
                {/*Placeholder seria para aplicar uma descrição internar dentro do input  */}
                <TextInput placeholder="Buscar, Jogos, consoles..."/>
            </View>
            <View style={styles.accountContainer}>
                <TouchableOpacity>
                <Ionicons name='person-circle-outline' size={30} style={styles.accountIcon}/>
                <Text style={styles.accountText}>Minha conta</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <MaterialCommunityIcons  name='cart-outine' size={30}
                    color='#fff'/>
                    <View style={styles.cart}/>
                </TouchableOpacity>

            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    searchContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 8,
        margin: 10,
        height: 40,
        backgroundColor:'Rgba(0,0,0,0.4)',
    },
    searchIcon:{
        marginRight: 8,
    },
    searchInput:{
        flex: 1,
        color: '#fff',
    }

});