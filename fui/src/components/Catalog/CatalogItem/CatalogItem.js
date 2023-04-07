import { Link } from "react-router-dom";

export const CatalogItem = ({
    _id,
    name,
    image,
    price,
}) => {
    return (
        <div className="col-md-4">
            <div className="box_main">
                <p className="chair_text">{name}</p>
                <div className="image_3" href="#"><img src={image} /></div>
                <p className="chair_text">${price}</p>
                <div className="buy_bt">
                    <Link to={`/catalog/${_id}`}>Details</Link>
                </div>
            </div>
        </div>
    );
}