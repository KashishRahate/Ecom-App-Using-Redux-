import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponents";
import { allProducts } from "../redux/actions/product-actions";
import axios from "axios";
import { useEffect } from "react";

const AllProducts = () => {
    const products = useSelector((state)=>state);

    const dispatch = useDispatch();

    const getAllProducts = async() => {
        const result = await axios
        .get('https://fakestoreapi.com/products')
        .catch((error)=>{
            console.log(error);
        });
        //console.log(result.data);
        dispatch(allProducts(result.data));
    }

    useEffect(()=>{
        getAllProducts();
    }, []); //execute only once when component loads

    console.log("From store: ", products);

    return(
        <div className="ui grid container margin-top-style">
            <ProductComponent />
        </div>
    )
}

export default AllProducts;