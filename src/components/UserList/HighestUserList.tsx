// components/UserList.tsx
import React from 'react';

type User = {
  _id: string;
  username?: string;
  score: number;
};

type UserListProps = {
  users: User[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {users.map((user) => (
        <div key={user?._id} className="bg-orange p-4 rounded-md shadow-md">
          <p className="text-black-600">user: <span className='font-bold'>{user?.username}</span> </p>
          <p className="text-black-600">Score: <span className=' font-bold'>{user?.score}</span> </p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
