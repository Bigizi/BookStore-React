import React from 'react';

function NewBook() {
  const styles = {
    frm: {
      display: 'flex',
      flexDirection: 'column',
      width: '180px',
      gap: '5px',
    },
  };
  return (
    <div className="add-new-book">
      <h1>Add New Book</h1>
      <form className="frm" style={styles.frm}>
        <input type="text" placeholder="Book Title" />
        <input type="text" placeholder="Book Author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default NewBook;
