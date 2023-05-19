import React, { useState } from "react";
import IndexNav from "../components/IndexPageComp/IndexNav";
import "../index.css"
import { Link } from "react-router-dom";
import IndexFooter from "../components/IndexPageComp/IndexFooter";

const CartPage = () => {

    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", price: 9.90 },
        { id: 2, name: "Product 2", price: 14.00 },
        { id: 3, name: "Product 3", price: 29.90 }
      ]);
    
    const handleRemove = (productId) => {
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
    };

    const total = products.reduce((totals, product) => {
        return totals + product.price;
    }, 0);

    return (
        <>
            <IndexNav />
            <div className="container my-4">
                <h1>Shopping Cart</h1>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <h2>Product List</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                    <tr key={product.id}>
                                        <td className="w-20%">{product.id}</td>
                                        <td className="text-left">{product.name}</td>
                                        <td>${product.price}</td>
                                        <td className="text-right">
                                            <button
                                                class="btn save-btn add-to-cart"
                                                data-id="1"
                                                onClick={() => handleRemove(product.id)}
                                                >Remove</button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-4">
                            <h2>Checkout Summary</h2>
                            <table class="table">
                                <tr>
                                    <td>Subtotal:</td>
                                    <td>{total}</td>
                                </tr>
                                <tr>
                                    <td>Tax:</td>
                                    <td>$0</td>
                                </tr>
                                <tr>
                                    <td>Total:</td>
                                    <td>{total}</td>
                                </tr>
                            </table>
                            <div>
                                <Link to={"/Index/Courses"} className="btn save-btn mr-4">Back to Courses</Link>
                                <button className="btn save-btn checkout">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <IndexFooter />
        </>
    );
};

export default CartPage;