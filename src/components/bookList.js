import React from "react"
import { Link } from "gatsby"

const BookList = ({books}) => (
    <ul>
        {books && books.map((item, i) => {
            let book = item.node.frontmatter
            return (
                <li>
                    <Link to={book.path}>{book.title}</Link>
                </li>
            )
        })}
    </ul>
)

export default BookList