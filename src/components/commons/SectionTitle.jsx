import React from 'react'

export default function SectionTitle(props) {
  return (
    <div>
      <h2 className="font-bold text-lg lg:text-xl xl:text-2xl text-primary">{props.title}</h2>
      <div className="divider my-0"></div>
    </div>
  );
}

