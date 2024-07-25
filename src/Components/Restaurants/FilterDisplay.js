import { Link } from "react-router-dom";
import "../../styles/cuisine.css";

const FilterDisplay = (props) => {
    const rests = props.restaurants;

    if (rests) {
        if (rests.length > 0) {
            return (
                <>
                    {rests.map((item) => (
                        <Link to={`/details/${item.restaurant_id}`} key={item._id} style={{ textDecoration: "none" }}>
                            <div className="card rests mb-4">
                                <div className="row w-100 mx-auto justify-content-start">
                                    <div className="col-12">
                                        <div className="row justify-content-around" id='card-content'>
                                            <div className="col-3" >
                                                <img
                                                    className="rounded-5 mt-3"
                                                    src={item.restaurant_thumb}
                                                    alt={item.restaurant_name}
                                                    width="160px"
                                                    height="140px"
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </div>
                                            <div className="col-8">
                                                <h1 className="h1 fw-bold ms-1 mt-4">
                                                    {item.restaurant_name}
                                                </h1>
                                                <h5 className="ms-1 p-1">
                                                    {item.address}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="hr" />
                                    <div className="col-12 cuisine-details mt-2">
                                        <table className="table table-borderless mx-lg-4">
                                            <tbody>
                                                <tr>
                                                    <td key="cuisine" className="heading">CUISINES:</td>
                                                    {item.cuisines.map((cus) => (
                                                        <td key={cus.cuisine_name} className="fw-semibold cuisine-body">{cus.cuisine_name}</td>
                                                    ))}
                                                </tr>
                                                <tr>
                                                    <td key="cost" className="heading">COST FOR TWO</td>
                                                    <td key={item.cost} className="fw-semibold cuisine-body">
                                                        <span>&#8377;</span>{item.cost}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </>
            )
        } else {
            return (
                <div>
                    <p>No restaurants found in this category :(</p>
                </div>
            )
        }
    }

};

export default FilterDisplay;
