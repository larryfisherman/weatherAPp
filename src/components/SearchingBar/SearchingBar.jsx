import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SearchingBar.css'
import actions from '../../duck/actions'
import store from '../../store/store';
import inputSlice from '../../duck/reducer';


  const SearchingBar = ({shareToggleClass}) => {
    
    const [toggleClass, setToggleClass] = useState(false);
    const [query, setQuery] = useState('');

    const search = event => {
        if(event.key === "Enter") {
            setToggleClass(true);
            shareToggleClass({toggleClass})
            store.dispatch(inputSlice.actions.updateValue(query))
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