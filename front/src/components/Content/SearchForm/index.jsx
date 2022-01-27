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
    const searchValue = data.get('search');
    const tempSearch = (searchValue[0] === '#' && selectOption === 'tags') ? searchValue.substring(1) : searchValue;
    onSubmitSearch({ tempSearch, selectOption });
  };
  return (
    <div className={classes.search}>
      <Form onSubmit={onSubmit} className={classes.search__form}>
        <Form.Select id="1172a1c2-75af-49dd-a244-dab3b4ce852a" aria-label="Default select example" name="select" className={classes.search__option}>
          <option id="556a35a4-f398-4ae1-af96-077935775e4d" value="all">All</option>
          <option id="c9329c2c-06ff-45d4-ad41-8b8b786c37d2" value="author">Author</option>
          <option id="f785f28e-3cb6-44f0-bbed-3f98b3a26308" value="tags">Tags</option>
        </Form.Select>
        <Form.Group>
          <Form.Control
            id="eaf7e4cb-6984-441d-9f18-7655a55f13de"
            type="text"
            placeholder="Search..."
            name="search"
            className={classes.search__value}
          />
        </Form.Group>
        <Button id="0b079f4d-4b9e-413b-b738-22b7590961fb" variant="primary" type="submit" className={classes.search__button}>Search</Button>
      </Form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmitSearch: PropTypes.string.isRequired,
};

export default SearchForm;
