import React from 'react'
//import './Search.css'
import { Form } from "react-bootstrap";

const Search = (props) => {
    return (
        <Form className="search-form text-center" onSubmit={(e) => props.onSubmit(e)}>
            <input
                className="search-input"
                value={props.value}
                onChange={(e) => props.onChange(e)}
                name="Search"
                placeholder="Search"
                type="text"
                autoFocus
            />
        </Form>
    )
}

export default Search