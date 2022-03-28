import React from "react";

const Card = ({
  id,
  children,
  className,
  data,
  datatestid,
  label,
  name,
  options,
  value,
}) => {
  return (
    <section
      id={id}
      className={className}
      data={data}
      datatestid={datatestid}
      label={label}
      name={name}
      options={options}
      value={value}
    >
      {
        children
        // <div>
        // {data.map((options) => (
        //   <option key={options.id} value={options.value}>
        //     {options.label}
        //   </option>
        // ))}
        // </div>
      }
    </section>
  );
};

export default Card;
