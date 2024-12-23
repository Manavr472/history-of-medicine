"use client"
import React, { useState } from 'react';

const TKA = () => {
    const [selectedTimeline, setSelectedTimeline] = useState('');
    const [selectedSurgeon, setSelectedSurgeon] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('');
    const [selectedDesign, setSelectedDesign] = useState('');

    const handleTimelineChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedTimeline(e.target.value);
    const handleSurgeonChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedSurgeon(e.target.value);
    const handleCompanyChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCompany(e.target.value);
    const handleDesignChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedDesign(e.target.value);

    return (
        <div className="p-4 flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r">
                <h2 className="text-xl font-bold mb-4">Filters</h2>
                <div className="mb-4">
                    <label className="block mb-2">Timeline</label>
                    <select value={selectedTimeline} onChange={handleTimelineChange} className="w-full p-2 border rounded">
                        <option value="">All</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Design</label>
                    <select value={selectedDesign} onChange={handleDesignChange} className="w-full p-2 border rounded">
                        <option value="">All</option>
                        <option value="Design 1">Design 1</option>
                        <option value="Design 2">Design 2</option>
                        <option value="Design 3">Design 3</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Company</label>
                    <select value={selectedCompany} onChange={handleCompanyChange} className="w-full p-2 border rounded">
                        <option value="">All</option>
                        <option value="Company A">Company A</option>
                        <option value="Company B">Company B</option>
                        <option value="Company C">Company C</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Surgeon</label>
                    <select value={selectedSurgeon} onChange={handleSurgeonChange} className="w-full p-2 border rounded">
                        <option value="">All</option>
                        <option value="Dr. Smith">Dr. Smith</option>
                        <option value="Dr. Johnson">Dr. Johnson</option>
                        <option value="Dr. Lee">Dr. Lee</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
            </div>
            <div className="w-full md:w-3/4 p-4">
                <h1 className="text-2xl font-bold mb-4">Total Knee Arthroplasty (TKA)</h1>
                <p className="mb-6">Welcome to the TKA page. Here you will find information about different implants used in Total Knee Arthroplasty.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Filtered implants will be displayed here */}
                    {/* Example implant items */}
                    <div className="implant-item p-4 border rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Implant 1</h2>
                        <p className="mb-4">Details about Implant 1...</p>
                    <iframe src="#" title="XR Museum" width="100%" height="400" className="rounded-lg"></iframe>
                    </div>
                    {/* Add more implants as needed */}
                </div>
            </div>
        </div>
    );
};

export default TKA;