import React, { useState } from 'react';
import './SearchingBar.css'
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store/store';
import updateValue from '../../duck/reducer'

  const SearchingBar = ({shareToggleClass}) => {
    

    const dispatch = useDispatch();
    const [toggleClass, setToggleClass] = useState(false);
    const [query, setQuery] = useState('');

    const search = event => {
        if(event.key === "Enter") {
            setToggleClass(true);
            shareToggleClass({toggleClass})
            dispatch(updateValue(query))
        }
    }
    return (
        <input type = "text"
          placeholder = "Search.."
          className = {toggleClass ? "Active" : "unActive"}
          onChange = {e => setQuery(e.target.value)}
          value = {query}
          onKeyPress = {search}
        />
    )
}

export default SearchingBar;