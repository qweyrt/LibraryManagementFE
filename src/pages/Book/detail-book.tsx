

import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { GetBookById } from './BookService/getBookById';



interface Book {
    bookId: number,
    title: string,
    author: string,
    categoryId: number,
    image: string,
    description: string

}

export function DetailBook() {
    let { bookId } = useParams<any>();
    const [book, setBook] = useState<Book>();
    const [error, setError] = useState(null);
    useEffect(() => {
        (async () => {
            GetBookById(bookId)
                .then((res) => res.data)
                .then((data) => {
                    setBook(data);
                })
                .catch((err) => setError(err));
        })();
    }, []);

    return (
        
        <div className="container">
            {book &&
                <div className="row">
                    <div className="col-4">
                        <img className="imgDetail" src={book.image} alt="" /></div>
                    <div className="col-6 ">
                        <h5> ID : {book.bookId}</h5>
                        <h3> {book.title} </h3>
                        <h4> {book.author} </h4>
                        <div>{book.description}</div>

                    </div>

                </div>
            }
        </div>


    );
}
export default DetailBook;