import React from 'react';

const EditableField = ({ initialValue, onSave, isEditing, onChange }) => {
  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={initialValue}
            onChange={onChange}
          />
        </div>
      ) : (
        <div>{initialValue}</div>
      )}
    </div>
  );
};

export default EditableField;
