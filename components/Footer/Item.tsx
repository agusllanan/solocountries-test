import React from 'react';

interface Link {
  name: string;
  link: string;
}

interface ItemProps {
  Links: Link[];
  title: string;
}

const Item = ({ Links, title }: ItemProps) => {
  return (
    <ul>
      <h1 className='mb-1 font-work pb-[8px]'>{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className='justify-content-end font-poppins text-gray-900 hover:text-teal-400 duration-300
          text-xs cursor-pointer leading-[15px]'
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
