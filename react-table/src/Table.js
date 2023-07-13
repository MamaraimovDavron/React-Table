import React from "react";
import './Table.css';


const books = [
    {
        b_name: 'The Code Breaker',
        b_author: 'Walter Isaacson',
        b_price: 50
    },
    {
        b_name: 'The Cult of We',
        b_author: 'Eliot Brown',
        b_price: 100
    },
    {
        b_name: 'How to avoid a climate disaster',
        b_author: 'Bill Gates',
        b_price: 200
    },
    {
        b_name: 'Broken',
        b_author: 'Jenny Lawson',
        b_price: 120
    },
    {
        b_name: 'What I Mean',
        b_author: 'Joan Didion',
        b_price: 140
    },

]

const Table = () => {
   return(
    <div className="container mt-2">
        <div className="row">
            <table className="table table-hover table-light">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Book Name</th>
                        <th>Book Author</th>
                        <th>Book Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.b_name}</td>
                                    <td>{item.b_author}</td>
                                    <td>{item.b_price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
   );
}

export default Table;