import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AddUser() {
  const [nom, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [number, setNumber] = useState(0);
  const [numTel, setTel] = useState(0);
  const [sex, setSex] = useState('');
  const addUser = async () => {
    const users = { number, nom, prenom, numTel, sex };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_PROD}/api/user`,
        users
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='md:container m-auto flex items-center justify-center mt-20'>
      <form className='w-full max-w-sm'>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='number'
            >
              Number:
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-vert'
              id='number'
              type='text'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='name'
            >
              Nom:
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-vert'
              id='name'
              type='text'
              value={nom}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='prenom'
            >
              Prénom:
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-vert'
              id='prenom'
              type='text'
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='tel'
            >
              NumTel:
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-vert'
              id='tel'
              type='number'
              value={numTel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='sex'
            >
              Sex:
            </label>
          </div>
          <div className='md:w-2/3'>
            <select
              className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-vert'
              id='sex'
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            >
              <option value='' disabled>
                Select
              </option>
              <option value='homme'>Homme</option>
              <option value='femme'>Femme</option>
            </select>
          </div>
        </div>

        <div className='md:flex md:items-center'>
          <div className='md:w-1/3'></div>
          <div className='md:w-2/3'>
            <Link to='/'>
              <button
                className='shadow bg-vert focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 ml-16 rounded'
                type='button'
                onClick={addUser}
              >
                Ajouter
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
