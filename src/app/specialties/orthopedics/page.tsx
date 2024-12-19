"use client"
import React, { useState } from 'react';

const SpecialtiesPage: React.FC = () => {
    const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');

    const handleSelectChange = (specialty: string) => {
        setSelectedSpecialty(specialty);
    };

    return (
        <div>
            <nav className='container flex justify-between items-center p-8 h-24 mx-auto relative z-50'>
                        <button onClick={() => handleSelectChange('arthroplasty')}>Arthroplasty</button>
                        {selectedSpecialty === 'arthroplasty' && (
                            <div>
                                <div>
                                    <h1>Knee recon</h1>
                                    <div>
                                        <div> <a href='/specialties/orthopedics/TKA'>Total knee</a></div>
                                        <div>Partial knee</div>
                                    </div>
                                </div>
                                <div>
                                    <h1>Hip recon</h1>
                                    <div>
                                        <div>Total hip</div>
                                        <div>Hemi</div>
                                    </div>
                                </div>
                                <div>
                                    <h1>Shoulder recon</h1>
                                    <div>
                                        <div>Reverse</div>
                                        <div>Total</div>
                                        <div>Hemi</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    
                        <button onClick={() => handleSelectChange('arthroscopy')}>Arthroscopy</button>
                        {selectedSpecialty === 'arthroscopy' && (
                            <div>
                                <div>Knee</div>
                                <li>Shoulder</li>
                                <li>Hip</li>
                            </div>
                        )}
                    
                        <button onClick={() => handleSelectChange('trauma')}>Trauma</button>
                        {selectedSpecialty === 'trauma' && (
                            <ul>
                                <li>Upper limb</li>
                                <li>Lower limb</li>
                                <li>Spine</li>
                            </ul>
                        )}
                
            </nav>
        </div>
    );
};

export default SpecialtiesPage;