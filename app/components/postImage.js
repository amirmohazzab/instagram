import React from 'react'
import {Image} from 'react-native'




const postImage = ({number}) => {

    
    return ( 
        <Image
        style={{
            marginHorizontal: 5,
            borderColor: 'pink',
            borderWidth: 2,
            width: 80,
            height: 80,
            borderRadius: 40
        }}
        source={require('../../assets/Stories/{number}.jpg')}
    />
     );
}
 
export default postImage;