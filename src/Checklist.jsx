import React, { useState } from 'react';

const Checklist = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Tarea 1', completed: false },
    { id: 2, text: 'Tarea 2', completed: false },
    { id: 3, text: 'Tarea 3', completed: false },
  ]);

  const toggleItemCompletion = (itemId) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    });
  };

  return (
    <div className='list'>
      <h1>Lista de Chequeo</h1>
      {items.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => toggleItemCompletion(item.id)}
          />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Checklist;
