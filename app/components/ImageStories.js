import React from 'react'
import {View, Image, Text} from 'react-native'


const images = [
    require('../../assets/thumbnailStories/Thumbnail-1.jpg'),
    require('../../assets/thumbnailStories/Thumbnail-2.jpg'),
    require('../../assets/thumbnailStories/Thumbnail-3.jpg'),
    require('../../assets/thumbnailStories/Thumbnail-4.jpg'),
    require('../../assets/thumbnailStories/Thumbnail-5.jpg'),
    require('../../assets/thumbnailStories/Thumbnail-1.jpg'),
    require('../../assets/thumbnailStories/Thumbnail-2.jpg'),
    require('../../assets/thumbnailStories/Thumbnail-3.jpg'),
    require('../../assets/thumbnailStories/Thumbnail-4.jpg'),
    require('../../assets/thumbnailStories/Thumbnail-5.jpg'),
];

const ImageStories = ({name=null}) => {
    return ( 
        <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
            {
                images.map((image, index) => (
                    <View key={index} style={{justifyContent: "center", alignItems: "center"}}> 
                        <Image
                            style={{
                                marginHorizontal: 5,
                                borderColor: 'pink',
                                borderWidth: 2,
                                width: 80,
                                height: 80,
                                borderRadius: 40
                            }}
                            source={image}
                        />
                        {
                            name ? <Text style={{fontSize: 16}}> {name} </Text> : null
                        }
                        
                    </View>
                ))
            }
        </View>
     );
}
 
export default ImageStories;