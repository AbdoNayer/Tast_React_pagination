import React, { useState } from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

  const pageNumbers = [];
  
  const [newNumber, setNewNumber]               = useState(1);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  function getNum (num){
    if(pageNumbers.lastIndexOf(num) !== -1){
        setNewNumber(num)
        paginate(num)
    }
  }

  return (
    <ul className='pagination text-center d-flex align-items-center justify-content-center'>
            <li className='page-item'>
                <a onClick={() => getNum(newNumber - 1)} className='page-link'>
                    Prev
                </a>
            </li>
            {
                pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => getNum(number)} className='page-link'>
                            {number}
                        </a>
                    </li>
                ))
            }
            <li className='page-item'>
                <a onClick={() => getNum(newNumber + 1)} className='page-link'>
                    Next
                </a>
            </li>
      </ul>
  );
};

export default Pagination;