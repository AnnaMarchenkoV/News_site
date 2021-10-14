/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import classes from './Search.module.css';

const SearchForm = ({ value, onSubmitSearch }) => {
  const [tempSearch, setTempSearch] = useState(value);

  const onSubmit = (event) => {
    event.preventDefault();
    const selectOption = event.target.select.value;
    onSubmitSearch({ tempSearch, selectOption });
  };
  return (
    <div className={classes.search}>
      <Form onSubmit={onSubmit} className={classes.search__form}>
        <Form.Select aria-label="Default select example" name="select" className={classes.search__option}>
          <option value="all">All</option>
          <option value="author">Author</option>
          <option value="tags">Tags</option>
        </Form.Select>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Search..."
            name="search"
            onChange={(event) => { setTempSearch(event.currentTarget.value); }}
            className={classes.search__value}
          />
        </Form.Group>
        <Button className="mb-3" variant="primary" type="submit">Search</Button>
      </Form>
    </div>
  );
};

export default SearchForm;
