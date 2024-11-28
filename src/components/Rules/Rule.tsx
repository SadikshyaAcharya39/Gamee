// // components/GameRules.tsx
// import React from 'react';
// import NavBar from '../NavBar';

// const GameRules: React.FC = () => {
//     return (
//         <>
//             <NavBar />
//             <div className="container mx-auto my-8">
//                 <span className='text-4xl mb-3'>
//                     Be our top scorer
//                 </span>
//                 <h1 className="text-3xl font-bold mb-4">Game Rules</h1>
//                 <ul className="list-disc pl-5">
//                     <li>Rule 1: Get your account.</li>
//                     <li>Rule 2: Login to your account.</li>
//                     <li>Rule 3: Go to game.</li>
//                     <li>Rule 4: Guess the correct answer.</li>
//                 </ul>
//             </div>
//         </>
//     );
// };

// export default GameRules;



// components/GameRules.tsx
// import React from 'react';
// import NavBar from '../NavBar';

// const GameRules: React.FC = () => {
//     return (
//         <>
//             <NavBar />
//             <div className="bg-orange-100 min-h-screen">
//                 <div className="container mx-auto my-8 p-6">
//                     <span className="text-4xl mb-3 block text-orange-800">
//                         Be our top scorer
//                     </span>
//                     <h1 className="text-3xl font-bold mb-4 text-orange-900">
//                         Game Rules
//                     </h1>
//                     <ul className="list-disc pl-5 text-orange-700">
//                         <li>Rule 1: Get your account.</li>
//                         <li>Rule 2: Login to your account.</li>
//                         <li>Rule 3: Go to game.</li>
//                         <li>Rule 4: Guess the correct answer.</li>
//                     </ul>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default GameRules;


// // components/GameRules.tsx
// import React from 'react';
// import NavBar from '../NavBar';

// const GameRules: React.FC = () => {
//     return (
//         <>
//             <NavBar />
//             <div className="bg-orange-50 min-h-screen flex flex-col justify-center py-12">
//                 <div className="container mx-auto p-6 bg-white shadow-xl rounded-lg max-w-3xl">
//                     <span className="text-5xl font-semibold text-center text-orange-600 mb-4">
//                         Be our top scorer
//                     </span>
//                     <h1 className="text-4xl font-bold text-center text-orange-700 mb-6">
//                         Game Rules
//                     </h1>
//                     <ul className="list-inside list-decimal text-lg space-y-3 text-orange-800">
//                         <li>Get your account by signing up.</li>
//                         <li>Login to your account using your credentials.</li>
//                         <li>Go to the game and start playing.</li>
//                         <li>Guess the correct answer to win points.</li>
//                     </ul>
//                     <div className="mt-8 text-center">
//                         <p className="text-lg text-orange-500">
//                             Good luck and have fun!
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default GameRules;

// components/GameRules.tsx
import React from 'react';
import NavBar from '../NavBar';

const GameRules: React.FC = () => {
    return (
        <>
            <NavBar />
            <div className="bg-orange-500 min-h-screen flex flex-col justify-center py-12">
                <div className="container mx-auto p-6 bg-white shadow-xl rounded-lg max-w-3xl">
                    <span className="text-5xl font-semibold text-center text-white mb-4">
                        Be our top scorer
                    </span>
                    <h1 className="text-4xl font-bold text-center text-black mb-10">
                        Game Rules
                    </h1>
                    <ul className="list-inside list-decimal text-lg space-y-3 text-black">
                        <li>Get your account by signing up.</li>
                        <li>Login to your account using your credentials.</li>
                        <li>Go to the game and start playing.</li>
                        <li>Guess the correct answer to win points.</li>
                    </ul>
                    <div className="mt-8 text-center">
                        <p className="text-lg text-white">
                            Good luck and have fun!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GameRules;



