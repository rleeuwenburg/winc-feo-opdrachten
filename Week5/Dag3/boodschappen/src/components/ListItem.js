import React from 'react';

function ListItem(item) {
  return (
    <li key={item.id} className='list-item' value={item.title}>
      {item.title}
    </li>
  );
}

export default ListItem;
