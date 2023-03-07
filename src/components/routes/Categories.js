import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/Categories';

const Categories = () => {
  const dispatch = useDispatch();
  // const handleClick = () => {
  //   // console.log('Under construction');
  // };

  return (
    <div className="categories">
      <h1>Categories</h1>
      <button type="button" onClick={() => dispatch(checkStatus())}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
