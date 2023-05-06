import React, { useEffect } from 'react'

export default function BookDescription(props) {
  return (
    <div>
      <p className="text-justify font-roboto indent-5 whitespace-pre-line">{props.desc && props?.desc.replace(/\n/g, '\n')}</p>
    </div>
  )
}
