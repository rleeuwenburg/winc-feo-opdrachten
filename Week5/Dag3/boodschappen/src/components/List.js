import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        { id: 1, title: 'ontsmettingsmiddel' },
        { id: 2, title: 'zakdoekjes' },
        { id: 3, title: 'mondkapjes' },
        { id: 4, title: 'water' }
      ]
    };
  }

  render() {
    const items = this.state.groceryItems;
    const listItems = items.map(item => {
      return <ListItem key={item.id} title={item.title} />;
    });
    return <ul>{listItems}</ul>;
  }
}

export default List;
