import React from "react";

// props here defined as search filter in different parts of an application may require different props
const SearchFilter = ({
  className,
  datatestid,
  label,
  name,
  onChange,
  onSubmit,
  placeholder,
  required,
  searchField,
  searchChange,
  type,
  value,
}) => {
  return (
    <div>
      <section>
        <span>{<i className="fas fa-search" />}</span>
        <input
          className={className}
          datatestid={datatestid}
          label={label}
          searchField={searchField}
          searchChange={searchChange}
          name={name}
          onChange={onChange}
          onSubmit={onSubmit}
          placeholder={placeholder}
          required={required}
          type={type}
          value={value}
        />
      </section>
    </div>
  );
};
export default SearchFilter;
