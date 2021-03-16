import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SearchingBar.css'
import actions from '../../duck/actions'


  const SearchingBar = ({shareToggleClass, addValue}) => {

    const inputValue = useSelector(state => state.inputValue);
    const dispatch = useDispatch(inputValue)
    
    const [toggleClass, setToggleClass] = useState(false);
    const [query, setQuery] = useState('');

    const search = event => {
        if(event.key === "Enter") {
            setToggleClass(true);
            shareToggleClass({toggleClass})
            dispatch({type: 'addValue', payload: query})
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