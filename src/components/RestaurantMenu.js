import {IMAGE_API} from '../Constant/restData';
const RestaurantMenu = ({name, imageId}) => {
    return (
        <main>
            <header>
                <img src={`${IMAGE_API}${imageId}`} alt=""/>
                <h2> {name} </h2>
            </header>
        </main>
    );
}

export default RestaurantMenu;