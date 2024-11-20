import React from 'react';
import './page.css';

const implants = [

        {
            "name": "McKeever Metallic Tibial Hemiarthroplasty",
            "discoverer": "Dr. Donald McKeever",
            "year": "1950s",
            "description": "An early tibial hemiarthroplasty, often used for unicompartmental arthritis. Precursor to modern TKA."
        },
        {
            "name": "Macintosh Tibial Hemiarthroplasty",
            "discoverer": "Dr. David Macintosh",
            "year": "1950s",
            "description": "Another early tibial hemiarthroplasty design.  A significant early attempt at unicompartmental replacement."
        },
        {
            "name": "Walldius Hinged Knee",
            "discoverer": "Dr. Börje Walldius",
            "year": "1950s-1960s",
            "description": "An early hinged knee replacement.  Offered stability but had high </tr>rates of complications."
        },
        {
            "name": "Guepar Hinged Knee",
            "discoverer": "French surgeons (exact origin debated)",
            "year": "1960s",
            "description": "A popular early hinged knee replacement, initially offering promising results but later suffering from mechanical failures."
        },
        {
            "name": "Gunston Polycentric Knee",
            "discoverer": "Dr. Frank Gunston",
            "year": "1971",
            "description": "A four-part, unlinked knee replacement.  Focused on conforming surfaces but was technically challenging to implant."
        },
    {
            "name": "Freeman-Swanson Knee (ICLH)",
            "discoverer": "Dr. Michael Freeman and Sav Swanson",
            "year": "1970s",
            "description": "A cruciate-sacrificing design that simplified knee kinematics.  Influential for later surgical techniques."
        },
        {
            "name": "Duocondylar Knee",
            "discoverer": "Dr. Chitranjan Ranawat, Dr. John Insall, and others at HSS",
            "year": "1971",
            "description": "An early attempt at a total knee replacement that preserved both cruciate ligaments.  Led to important research and the development of the HSS Knee Score."
        },
         {
            "name": "Total Condylar Knee",
            "discoverer": "Dr. John Insall, Dr. Chitranjan Ranawat, and others at HSS",
            "year": "1974",
            "description": "An influential design that set the standard for early total knee arthroplasty."
        },
     {
            "name": "Duopatellar Knee",
            "discoverer": "Dr. John Insall, Dr. Chitranjan Ranawat, and others at HSS",
            "year": "mid-1970s",
            "description": "A posterior cruciate-retaining design offering greater range of motion.  Popular for rheumatoid patients."
        },
         {
            "name": "Kinematic Knee",
            "discoverer": "Howmedica",
            "year": "Late 1970s",
            "description": "An early metal-backed TKA design.  Evolved into several later successful Howmedica knee systems."
        },
        {
            "name": "Porous Coated Anatomic (PCA) Knee",
            "discoverer": "Dr. David Hungerford",
            "year": "1978",
            "description": "A landmark design that introduced porous-coated components for cementless fixation.  Also emphasized precise instrumentation and alignment."
        },
            {
            "name": "Press-Fit Condylar (PFC) Knee",
            "discoverer": "Drs. Richard Scott and Thomas Thornhill",
            "year": "1984",
            "description": "Introduced modularity, proportional sizing, and a cruciate keel."
        },
    {
            "name": "Insall-Burstein Knee",
            "discoverer": "Dr. John Insall and Albert Burstein",
            "year": "1978",
            "description": "A posterior-stabilized design aiming to address deficiencies of earlier TKA designs, like anterior instability and limited flexion."
        },

        {
            "name": "Low Contact Stress (LCS) Knee",
            "discoverer": "Dr. F.C. Buechel and Dr. Michael Pappas",
            "year": "mid-1970s",
            "description": "An early mobile-bearing knee design.  Offered potential advantages in terms of wear and range of motion."

        },
        {
            "name": "Geometric Knee",
            "discoverer": "Dr. Mark Coventry and others at the Mayo Clinic",
            "year": "1970s",
            "description": "A stabilized gliding joint replacement. One of the earlier designs of a knee joint replacement that was secured by methylmethacrylate with linked femoral and tibial elements."
     },
      {
            "name": "Genesis I and II",
            "discoverer": "Dr. James Rand and Dr. Raymond Gustillo",
            "year": "1980s",
            "description": "A modular system with an anatomical tibia design and revision options."
     },
     {
            "name": "Anatomic Graduated Component (AGC) Knee",
            "discoverer": "Biomet",
            "year": "1980s",
            "description": "A cruciate-retaining design known for its anatomical fit and emphasis on bone preservation."

        },
        {
            "name": "Low Contact Stress (LCS) Rotating Platform Knee",
            "discoverer": "DePuy",
            "year": "1980s",
            "description": "A popular mobile-bearing TKA design offering theoretical advantages in terms of wear."
        },
            {
            "name": "Oxford Unicompartmental Knee",
            "discoverer": "Oxford Biomaterials",
            "year": "1980s",
            "description": "A fixed bearing unicompartmental implant that requires ligamentous stability and appropriate bone stock for success."
        },

        {
            "name": "Kinemax Knee",
            "discoverer": "Howmedica",
            "year": "1980s",
            "description": "A modular TKA system building upon the earlier Kinematic designs."
        },
        {
            "name": "PFC Sigma Knee",
            "discoverer": "DePuy",
            "year": "1990s",
            "description": "A refinement of the PFC system offering both cruciate-retaining and substituting options."
        },
         {
            "name": "NexGen Knee",
            "discoverer": "Zimmer",
            "year": "1990s",
            "description": "A complete knee replacement that included femoral, tibial and patellar components. Its main goal was to reproduce normal knee kinematics, which it tried to accomplish with conforming surfaces, cruciate retention and mobile bearings, when required."
        },
    {
            "name": "Rotating Hinge Knee",
            "discoverer": "Howmedica",
            "year": "1990s",
            "description": "A rotating hinge prosthesis, often chosen for revision surgery or complex primary cases."
        }



];

const ImplantsPage: React.FC = () => {
    return (
        <><div className="p-4 sm:p-8">
            <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">History of Knee Implants</h1>
            <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
            <thead>
            <tr className='bg-gray-500'>
                <th className="py-2 px-4 border border-gray-200">Name & Year</th>
                <th className="py-2 px-4 border border-gray-200">Discoverer</th>
                <th className="py-2 px-4 border hidden sm:table-cell">Description</th>
            </tr>
            </thead>
            <tbody>
            {implants.map((implant, index) => (
                <tr key={index} className="hover:bg-gray-700 text-center border-b border-gray-200">
                <td className="py-2 px-4 border border-gray-200">
                <div>{implant.name}</div>
                <div className='mt-3'>({implant.year})</div>    
                </td>
                <td className="py-2 px-4 border border-gray-200">
                    <div>{implant.discoverer}</div>
                    <div className="sm:hidden">
                    <details>
                        <summary className="cursor-pointer">Description</summary>
                        <p>{implant.description}</p>
                        </details>
                    </div>
                    </td>
                    <td className="py-2 px-4 text-center align-middle border hidden sm:table-cell">{implant.description}</td>
                </tr>
            ))}
            </tbody>
            </table>
            </div>
        </div></>
    );
};

export default ImplantsPage;