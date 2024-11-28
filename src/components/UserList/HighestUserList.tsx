// // components/UserList.tsx
// import React from 'react';

// type User = {
//   _id: string;
//   username?: string;
//   score: number;
// };

// type UserListProps = {
//   users: User[];
// };

// const UserList: React.FC<UserListProps> = ({ users }) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {users.map((user) => (
//         <div key={user?._id} className="bg-orange p-4 rounded-md shadow-md">
//           <p className="text-black-600">user: <span className='font-bold'>{user?.username}</span> </p>
//           <p className="text-black-600">Score: <span className=' font-bold'>{user?.score}</span> </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UserList;

// // components/UserList.tsx
// import React from 'react';

// type User = {
//   _id: string;
//   username?: string;
//   score: number;
// };

// type UserListProps = {
//   users: User[];
// };

// const UserList: React.FC<UserListProps> = ({ users }) => {
//   // Find the user with the highest score
//   const topScorer = users.reduce((maxUser, user) => (user.score > maxUser.score ? user : maxUser), users[0]);

//   return (
//     <div className="bg-orange-500 min-h-screen p-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {users.map((user) => (
//           <div
//             key={user?._id}
//             className={`p-4 rounded-md shadow-md bg-white ${user?._id === topScorer?._id ? 'border-4 border-yellow-500' : ''}`}
//           >
//             <p className="text-black-600">
//               user: <span className="font-bold">{user?.username}</span>
//             </p>
//             <p className="text-black-600">
//               Score: <span className="font-bold">{user?.score}</span>
//             </p>
//             {user?._id === topScorer?._id && (
//               <p className="text-3xl text-yellow-500">🏆</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserList;

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
  // Find the user with the highest score
  const topScorer = users.reduce((maxUser, user) => (user.score > maxUser.score ? user : maxUser), users[0]);

  return (
    <div className="bg-orange-500 min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <div
            key={user?._id}
            className={`p-4 rounded-md shadow-md bg-white ${user?._id === topScorer?._id ? 'border-4 border-yellow-500' : ''}`}
          >
            <p className={`text-black-600 ${user?._id === topScorer?._id ? 'text-yellow-600' : ''}`}>
              user: <span className="font-bold">{user?.username}</span>
            </p>
            <p className={`text-black-600 ${user?._id === topScorer?._id ? 'text-yellow-600' : ''}`}>
              Score: <span className="font-bold">{user?.score}</span>
            </p>
            {user?._id === topScorer?._id && (
              <p className="text-3xl text-yellow-500">🏆</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;

