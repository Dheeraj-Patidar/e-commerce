import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayusers, deleteuser } from '../redux/UserDetailSlice';

export default function AdminPage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userdetails.user);

  
    dispatch(displayusers());

  const handleDelete = (id) => {
    dispatch(deleteuser(id));
  };

  return (
    <div className="p-6 mt-30 ">
      <div className="grid grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform hover:scale-105 transition duration-300 ease-in-out"
          >
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
              <p className="text-sm text-gray-600">{user.email}</p>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handleDelete(user.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
