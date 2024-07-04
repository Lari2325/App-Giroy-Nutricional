import { useFonts } from "expo-font";

function Font(){

    const [loaded]  = useFonts({
        GilroyBold: require('../../../views/Fonts/Gilroy-Bold.ttf'),
    });
    
    if(!loaded){
        return null;
    }
}

export default Font;