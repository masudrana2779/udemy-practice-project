import React from "react";
import './searchBox.style.css';

export const SearchBox = ({ placeholder, searchHandelar }) => (
    <input type="search"
        placeholder={placeholder}
        onChange={searchHandelar} />
)