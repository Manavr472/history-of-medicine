import React from 'react';

const doctors = [
    {
        "name": "Sir John Charnley",
        "year": "1911-1982",
        "contribution": "(1960s-1970s) Pioneering work on low-friction arthroplasty and cemented fixation, foundational for TKA.",
        "image": "https://i.ibb.co/1mkp3n7/McCrae.png"
    },
    {
        "name": "Dr. Frank Gunston",
        "year": "(Unknown-Unknown)", // Add birth-death years if known
        "contribution": "(late 1960s-1970s) Developed the polycentric knee, introducing conforming surfaces in TKA.",
        "image": "https://i.ibb.co/1mkp3n7/McCrae.png"
    },
    {
        "name": "Dr. Michael Freeman",
        "year": "(1929-2006)", // Add birth-death years if known
        "contribution": "(1970s-1980s) Focused on early TKA designs, often sacrificing cruciate ligaments; contributed to gap balancing.",
        "image": "https://i.ibb.co/1mkp3n7/McCrae.png"
    },
    {
        "name": "Dr. Sav Swanson",
        "year": "(Unknown-Unknown)", // Add birth-death years if known
        "contribution": "(1970s) Engineering mind behind the Freeman-Swanson knee, introducing new design ideas.",
        "image": "https://i.ibb.co/1mkp3n7/McCrae.png"
    },
    {
        "name": "Dr. John Insall",
        "year": "1930-2000",
        "contribution": "(1970s-1990s) Key figure at Hospital for Special Surgery; designed total condylar and posterior stabilized knees.",
        "image": "https://i.ibb.co/1mkp3n7/McCrae.png"
    },
    {
        "name": "Dr. Chitranjan Ranawat",
        "year": "(1934-2017)",  // Add birth-death years if known
        "contribution": "(1970s-1990s) Collaborated with Insall on duocondylar and duopatellar knee designs.",
        "image": "https://i.ibb.co/1mkp3n7/McCrae.png"
    },
    {
        "name": "Dr. Peter Walker",
        "year": "(Unknown-2015)", // Add birth-death years if known
        "contribution": "(1970s-1980s) Worked on early TKA designs, instrumental in refining posterior stabilization.",
        "image": "https://i.ibb.co/1mkp3n7/McCrae.png"
    },
    {
        "name": "Dr. Richard Scott",
        "year": "(Unknown-Unknown)",  // Add birth-death years if known
        "contribution": "(1970s-1990s) Significant contributions, particularly to modularity, press-fit systems, and complex cases.",
        "image": "https://i.ibb.co/1mkp3n7/McCrae.png"
    },
    {
        "name": "Dr. Thomas Thornhill",
        "year": "(Unknown-Unknown)", // Add birth-death years if known
        "contribution": "(1970s-1990s) Collaborated on PFC knee and other important TKA designs.",
        "image": "https://i.ibb.co/1mkp3n7/McCrae.png"
    },
    {
        "name": "Dr. David Hungerford",
        "year": "(1927-2011)",  // Add birth-death years if known
        "contribution": "(1970s-1980s) Pioneered porous-coated components for cementless TKA fixation.",
        "image": "https://i.ibb.co/1mkp3n7/McCrae.png"
    },
    {
        "name": "Dr. Nas Eftekhar",
        "year": "(1924-1994)", // Add birth-death years if known
        "contribution": "(1970s-1980s) Innovator in early modular, metal-backed condylar designs.",
        "image": "https://i.ibb.co/1mkp3n7/McCrae.png"
    },
    {
        "name": "Dr. Leo Whiteside",
        "year": "(Unknown-Unknown)", // Add birth-death years if known
        "contribution": "(1980s-1990s) Advanced understanding of knee kinematics and instrumentation for better alignment.",
        "image": "https://i.ibb.co/1mkp3n7/McCrae.png"
    },
    {
        "name": "Dr. Clement Sledge",
        "year": "(1938-2016)", // Add birth-death years if known
        "contribution": "Made substantial contributions to knee arthroplasty with various TKA designs focused on anatomy and soft tissue management.", // Add contribution years if known
        "image": "https://i.ibb.co/1mkp3n7/McCrae.png"
    }
];

const history: React.FC = () => {
    return (
        <><div className="p-4 sm:p-8 rounded-lg bg-gray-800 dark:bg-gray-800 bg-white dark:text-white text-black">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">History of Doctors Contributed in Knee Surgery</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-700 dark:border-gray-700 border-gray-300">
                    <thead>
                        <tr className='bg-gray-700 dark:bg-gray-700 bg-gray-300'>
                            <th className="py-2 px-4 border border-gray-700 dark:border-gray-700 border-gray-300">Image</th>
                            <th className="py-2 px-4 border border-gray-700 dark:border-gray-700 border-gray-300">Name</th>
                            <th className="py-2 px-4 border border-gray-700 dark:border-gray-700 border-gray-300 hidden sm:table-cell">Contribution</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor, index) => (
                            <tr key={index} className="hover:bg-gray-600 dark:hover:bg-gray-600 hover:bg-gray-200 text-center border border-gray-700 dark:border-gray-700 border-gray-300">
                                <td className="py-2 px-4 flex justify-center items-center">
                                    <div className="flex justify-center items-center w-full h-full min-h-[100px]">
                                        <img src={doctor.image} alt={doctor.name} className="w-24 h-34 sm:w-32 sm:h-42 md:w-40 md:h-50 lg:w-48 lg:h-58 object-contain self-center" />
                                    </div>
                                </td>
                                <td className="py-2 px-4 text-center align-middle border border-gray-700 dark:border-gray-700 border-gray-300">
                                    <div>{doctor.name}</div>
                                    <div>{doctor.year}</div>
                                    <div className="sm:hidden">
                                        <details>
                                            <summary className="cursor-pointer">Contribution</summary>
                                            <p>{doctor.contribution}</p>
                                        </details>
                                    </div>
                                </td>
                                <td className="py-2 px-4 text-center align-middle border border-gray-700 dark:border-gray-700 border-gray-300 hidden sm:table-cell">{doctor.contribution}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div></>
    );
};

export default history;