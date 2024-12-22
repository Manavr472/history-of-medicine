"use client"
import React from 'react';

const SpecialtiesPage: React.FC = () => {
    const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

    const toggleDropdown = (dropdown: string) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <div className='container flex flex-col md:flex-row justify-between items-center p-4 md:p-8 h-auto md:h-24 mx-auto relative'>
                <div className="relative group mb-4 md:mb-0">
                    <div className="relative">
                        <button className="focus:outline-none" onClick={() => toggleDropdown('dropdown1')}>
                            Arthroplasty
                        </button>
                        {openDropdown === 'dropdown1' && (
                            <div className="w-48 absolute bg-white shadow-lg p-4 mt-2 dark:bg-black z-50">
                                <div>
                                    <ul>
                                        <li><strong>Knee recon</strong></li>
                                        <ul className="ml-4 mb-2">
                                            <li><a href='/specialties/orthopedics/TKA'>Total knee</a></li>
                                            <li><a href='#'>Partial knee</a></li>
                                        </ul>
                                    </ul><hr/>
                                    <ul className="mt-2 mb-2">
                                        <li><strong>Hip recon</strong></li>
                                        <ul className="ml-4">
                                            <li><a href='#'>Total hip</a></li>
                                            <li><a href='#'>Hemi</a></li>
                                        </ul>
                                    </ul><hr/>
                                    <ul className="mt-2">
                                        <li><strong>Shoulder recon</strong></li>
                                        <ul className="ml-4">
                                            <li><a href='#'>Reverse</a></li>
                                            <li><a href='#'>Total</a></li>
                                            <li><a href='#'>Hemi</a></li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="relative group mb-4 md:mb-0">
                    <div className="relative">
                        <button className="focus:outline-none" onClick={() => toggleDropdown('dropdown2')}>
                            Arthroscopy
                        </button>
                        {openDropdown === 'dropdown2' && (
                            <div className="w-48 absolute bg-white shadow-lg p-4 mt-2 dark:bg-black z-50">
                                <div>
                                    <ul>
                                        <li><a href='#'>Knee</a></li>
                                        <li><a href='#'>Shoulder</a></li>
                                        <li><a href='#'>Hip</a></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="relative group">
                    <div className="relative">
                        <button className="focus:outline-none" onClick={() => toggleDropdown('dropdown3')}>
                            Trauma
                        </button>
                        {openDropdown === 'dropdown3' && (
                            <div className="w-48 absolute bg-white shadow-lg p-4 mt-2 dark:bg-black z-50">
                                <div>
                                    <ul>
                                        <li><a href='#'>Upper limb</a></li>
                                        <li><a href='#'>Lower limb</a></li>
                                        <li><a href='#'>Spine</a></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
        </div>
    );
};

export default SpecialtiesPage;