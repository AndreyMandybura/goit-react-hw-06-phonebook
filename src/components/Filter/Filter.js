import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <div>
      <h4 className={s.header}>Find contacts by name</h4>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        className={s.filterInput}
      />
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;
