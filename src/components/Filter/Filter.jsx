import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/contacts/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = filter => dispatch(setFilter(filter));

  const changeFilterValue = e => {
    handleFilterChange(e.currentTarget.value);
  };  

    return (
        <label>
          Find contacts by name
          <input
            type="text"
            onChange={changeFilterValue}
          />
        </label>
      )
};
  
  export default Filter;