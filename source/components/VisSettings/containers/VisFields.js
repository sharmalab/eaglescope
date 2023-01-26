import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function VisFields({
  title, fields, setFields, isArr,
}) {
  const handleFieldsChange = (index, e) => {
    const data = [...fields];
    data[index] = e.target.value;
    setFields(data);
  };

  const removeFields = (index) => {
    const data = [...fields];
    data.splice(index, 1);
    setFields(data);
  };

  const addFields = () => {
    setFields([...fields, '']);
  };
  return (
    <div>
      <div>{title}</div>
      {fields.map((Field, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          style={{
            marginRight: '10px',
          }}
        >
          <label>
            <input
              className="visSettings-input"
              type="text"
              value={Field}
              onChange={(e) => handleFieldsChange(index, e)}
            />
            {fields.length > 2 && (
              <button
                onClick={() => removeFields(index)}
                type="button"
                style={{
                  border: 'none',
                  background: 'none',
                }}
              >
                <FontAwesomeIcon icon="fa-solid fa-minus" size="1x" className="icon" />
              </button>
            )}
          </label>
        </div>
      ))}
      {isArr && (
        <button
          type="button"
          style={{
            backgroundColor: 'rgb(0, 123, 255)',
            border: 'none',
            color: '#fff',
            padding: '0.375rem 0.75rem',
            marginRight: '5px',
          }}
          onClick={addFields}
        >
          Add Field
        </button>
      )}
    </div>
  );
}

export default VisFields;

VisFields.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  setFields: PropTypes.func.isRequired,
  isArr: PropTypes.bool.isRequired,
};
