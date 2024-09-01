import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        margin:10,
        padding:5,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#d7d7d7',
        backgroundColor:'#ffffff',
    },
    inner_container:{
        borderRadius:13,
        backgroundColor:'#ef5350',
        alignSelf:'baseline',
        paddingLeft:7,
        paddingRight:7,
        marginTop:5,
    },
    location:{
        color:'white',
        fontWeight:'bold',
    },
    title:{
        fontWeight:'bold',
        fontSize:15,
    },
    levels:{
        flex:1,
        marginTop:5,
        marginRight:10,
        alignItems:'flex-end',
        color:'#f05e5b',
        alignSelf:'flex-end',
        fontWeight:'bold',
    },
});