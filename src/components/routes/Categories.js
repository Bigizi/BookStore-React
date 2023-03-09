import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/Categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <p>{categories}</p>
      <button type="button" onClick={() => dispatch(checkStatus())}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
