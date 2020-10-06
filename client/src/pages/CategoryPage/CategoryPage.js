import React from 'react';
import { connect } from 'react-redux';

import { selectCategory } from '../../redux/menu/menuSelector';
import GroupItem from '../../components/GroupItem/GroupItem';
import './CategoryPage.scss';

const Categorypage = ({ category }) => {
  console.log(category);
  const { title, items } = category;
  return (
    <div className="category-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <GroupItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(Categorypage);
