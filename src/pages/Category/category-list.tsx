import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


let OnDelete = (id: number) => {
    var x = window.confirm("Are you sure you want to delete?");
    if (x) {
        axios.delete("https://localhost:5001/api/Category/" + id)
            .then(
                (res) => {
                    if (!(res.status === 200)) {
                        alert("Delete category failed!")
                    }
                    else {
                        alert("Delete category successfully!");
                    }
                }
            );
        return true;
    }
    else
        return false;

}


export function ListCategory() {
    const [category, setCategory]: [any, any] = useState([]);
    useEffect(() => {
        axios.get("https://localhost:5001/api/Category").then(data => {
            setCategory(data.data);
        });
    }, []);

    return (
        <div className="container ">
            <div className="row " >

                <Link className="btn btn-success" to="/addcategory">Add Category</Link>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Category ID</th>
                            <th scope="col">Category name</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {category &&
                            category.length > 0 &&
                            category.map((c: any) => (
                                <tr>
                                    <th scope="row">{c.categoryId}</th>
                                    <td>{c.categoryName}</td>
                                    <td><Link className="btn btn-primary" to={`/editcategory/${c.categoryId}`}>Edit</Link></td>
                                    <td> <button className="btn btn-danger" onClick={() => { OnDelete(c.categoryId) }}>Delete</button></td>


                                </tr>
                            ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}