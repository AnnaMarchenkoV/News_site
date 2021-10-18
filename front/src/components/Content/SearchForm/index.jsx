import React from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import classes from './Search.module.css';

const SearchForm = ({ onSubmitSearch }) => {
  const onSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const selectOption = data.get('select');
    const tempSearch = data.get('search');
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
            className={classes.search__value}
          />
        </Form.Group>
        <Button className="mb-3" variant="primary" type="submit">Search</Button>
      </Form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmitSearch: PropTypes.string.isRequired,
};

export default SearchForm;
