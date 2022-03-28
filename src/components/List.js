import React from "react";
// import Card from "./Card"; for props.children

const List = ({
  id,
  children,
  className,
  // replace with api-response data
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
        //   <div>
        //   {data.map((item, i) => {
        //     return (
        //       <Card
        //         key={i}
        //         id={item.id}
        //         name={item.name}
        //       />
        //     );
        //   })}
        // </div>
      }
    </section>
  );
};
export default List;
