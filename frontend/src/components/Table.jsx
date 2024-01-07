import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export default function Table() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    // Update the data whenever the currentPage or searchTerm changes
    fetchData();
  }, [currentPage, searchTerm]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_PROD}/api/users`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const itemsPerPage = 7;
  const pageCount = data ? Math.ceil(data.length / itemsPerPage) : 0;

  const offset = currentPage * itemsPerPage;
  const filteredData = data?.filter(
    (item) =>
      item.prenom &&
      item.prenom.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentPageData = filteredData?.slice(offset, offset + itemsPerPage);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(0);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_PROD}/api/user/${id}`);
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='md:container m-auto'>
      <div>
        <Link to={'/user'}>
          <div className='flex flex-row-reverse mt-16'>
            <button className='bg-vert text-white px-4 py-3 font-bold rounded-xl text-l w-24 text drop-shadow-xl'>
              Ajouter
            </button>
          </div>
        </Link>
      </div>
      <div className='mt-4'>
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder='Search by name'
          className='p-2 border border-gray-300 rounded-md'
        />
      </div>
      <div className='mt-4'>
        <table className='min-w-full divide-y divide-gray-200'>
          {/* Table header */}
          <thead>
            <tr>
              <th className='border px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider '>
                N°
              </th>
              <th className='border px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Prénom
              </th>
              <th className='border px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Nom
              </th>
              <th className='border px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Sexe
              </th>
              <th className='border px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Tel
              </th>
              <th className='border px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Operation
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {currentPageData.map((item) => (
              <tr key={item.id}>
                <td className='border px-6 py-4 whitespace-nowrap'>
                  {item.number}
                </td>
                <td className='border px-6 py-4 whitespace-nowrap'>
                  {item.prenom}
                </td>
                <td className='border px-6 py-4 whitespace-nowrap'>
                  {item.nom}
                </td>
                <td className='border px-6 py-4 whitespace-nowrap'>
                  {item.sex}
                </td>
                <td className='border px-6 py-4 whitespace-nowrap'>
                  {item.numTel}
                </td>
                <td className='border px-6 py-4 whitespace-nowrap'>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className='bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={'flex items-center justify-center mt-8'}
          previousLinkClassName={'bg-gray-200 px-3 py-2 rounded-l-md'}
          nextLinkClassName={'bg-gray-200 px-3 py-2 rounded-r-md'}
          disabledClassName={'text-gray-400 cursor-not-allowed'}
          activeClassName={'bg-blue-500 text-white px-3 py-2'}
          pageClassName={'bg-gray-200 px-3 py-2'}
          breakClassName={'bg-gray-200 px-3 py-2'}
          marginPagesDisplayed={2}
          pageRangeDisplayed={7}
        />
      </div>
    </div>
  );
}
