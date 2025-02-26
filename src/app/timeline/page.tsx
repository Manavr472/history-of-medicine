"use client"
import React, { useState } from 'react';

interface TimelineItemProps {
    year: string;
    title: string;
    description: string;
    imageUrl: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({title, description, imageUrl }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="timeline-item container mx-auto my-5 px-4 sm:px-6 lg:px-8 max-w-2xl">
            <div className="border border-gray-300 rounded-lg shadow-md">
            <div className="timeline-header flex justify-between items-center cursor-pointer p-4" onClick={() => setIsOpen(!isOpen)}>
                <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl">{title}</h2>
                </div>
                <span className="text-2xl">{isOpen ? '^' : 'v'}</span>
            </div>
            {isOpen && (
                <div className="timeline-content mt-2 p-4 text-center">
                <p className="text-sm sm:text-base lg:text-lg">This is some additional text above the timeline content.</p>
                <img src={imageUrl} alt={title} className="max-w-full h-auto rounded-lg mx-auto" />
                <hr className="my-4" />
                <p className="mt-2 text-sm sm:text-base lg:text-lg">{description}</p>
                </div>
            )}
            </div>
        </div>
    );
};

const Timeline: React.FC = () => {
    const timelineData = [
        {
            "year": "1891",
            "title": "Gluck Ivory Hinged Knee",
            "description": "A pioneering but ultimately unsuccessful attempt at total knee replacement using ivory.  Demonstrates early interest in biocompatible materials but faced challenges with fixation and wear.",
            "imageUrl": "https://i.ibb.co/YQBPB1y/Gluck-ivory.png" // Placeholder - find a more specific image
        },
        {
            "year": "1939",
            "title": "Fascial Interposition Arthroplasty",
            "description": "A reconstructive technique involving the insertion of fascia lata between joint surfaces, often used before modern TKA.  Offered limited success and highlighted the need for more durable solutions.",
            "imageUrl": "https://i.ibb.co/Sw8n0BR1/fasical-interposition-arthoplasty.png" // Add image URL
        },
        {
            "year": "1960s",
            "title": "Linked Implants",
            "description": "Early knee replacements with mechanically linked femoral and tibial components, sometimes hinged.  Suffered from high complication rates due to loosening and wear.",
            "imageUrl": "https://i.ibb.co/mVsYhTwG/linked-implant.png" // Add image URL
        },
        {
            "year": "1968",
            "title": "Gunston Polycentric Knee",
            "description": "An early TKA design attempting to replicate natural knee motion with a polycentric hinge.  Challenging to implant and faced long-term durability issues.",
            "imageUrl": "https://i.ibb.co/40tdcHh/image.png" // Add image URL
        },
        {
            "year": "1971",
            "title": "Duocondylar Knee",
            "description": "Developed at HSS, this early TKA design preserved both cruciate ligaments.  Laid the foundation for further TKA development and the HSS Knee Score.",
            "imageUrl": "https://i.ibb.co/Trc6Yws/Duapatella-knee.png" // Add image URL
        },
    {
            "year": "1971",
            "title": "Spherocentric Knee",
            "description": "Early TKA design that used a rotating hinge mechanism. Required significant bone resection, creating challenges for revision.",
            "imageUrl": "https://i.ibb.co/LDpjp3XP/image.png" // Add image URL
        },
        {
            "year": "1970s", // Be more specific with the year if possible
            "title": "Anatomic Knee",
            "description": "A class of TKA designs focusing on anatomical fit and often preserving the PCL.  Early versions had problems with fixation and wear.",
            "imageUrl": "https://i.ibb.co/3mS41zDq/anatomic-knee.png" // Add image URL
        },

        {
            "year": "1970s", //  Be more specific with the year if possible
            "title": "Variable Axis Modular Knee",
            "description": "Emphasized rotational freedom with a modular polyethylene insert.  Aimed for better knee kinematics but had limitations in long-term stability.",
            "imageUrl": "https://i.ibb.co/LDhWqywC/variable-axis-modular-knee.png" // Add image URL
        },
        {
            "year": "1973",
            "title": "Unicondylar Knee",
            "description": "A less invasive option for isolated compartment arthritis, replacing only one side of the knee. Early designs had issues with wear and loosening.",
            "imageUrl": "https://i.ibb.co/PbXQyHQ/unicondylar.png" // Add image URL
        },
        {
            "year": "1974",
            "title": "Total Condylar Knee",
            "description": "An influential early TKA design by Insall and Ranawat, featuring a single-piece femoral component and all-polyethylene tibial component.",
            "imageUrl": "https://i.ibb.co/G406wGWB/total-condylar-knee.png" // Add image URL
        },
        {
            "year": "1970s", //More specific year needed
            "title": "Low Contact Stress (LCS) Knee",
            "description": "Aimed to reduce polyethylene wear by minimizing contact stress.  Later evolved into the mobile-bearing LCS Rotating Platform.",
            "imageUrl": "https://i.ibb.co/kV11mHbL/low-contact-stress.png" // Add image URL
        },

        {
            "year": "1978",
            "title": "Insall-Burstein Knee",
            "description": "A posterior-stabilized TKA design using a cam and post mechanism to substitute for the PCL, aiming to improve stability in flexion.",
            "imageUrl": "https://i.ibb.co/99s4hNKX/insall-burstien.png" // Add image URL
        },
            {
            "year": "1970s", // Needs more specific year
            "title": "Geomedic Knee",
            "description": "Early TKA design with conforming surfaces and cruciate retention. Did not initially resurface the patella and often suffered tibial loosening.",
            "imageUrl": "https://i.ibb.co/1tzPHpfM/geomedic-knee.png" // Add image URL
        },

        {
            "year": "1980s",
            "title": "Genesis I and II",
            "description": "Modular TKA systems with anatomical tibial components and revision options, addressing the need for solutions to implant failures.",
            "imageUrl": "https://i.ibb.co/Q3dg2Fnk/image.png" // Add image URL
        },
    {
            "year": "1983",
            "title": "Knee Society Founded",
            "description": "Not an implant, but the Knee Society's formation marked a turning point in TKA, leading to standardized outcomes assessment with the Knee Society Score.",
            "imageUrl": "https://i.ibb.co/D4dN1Rf/knee-society.png" // Add image URL - perhaps a Knee Society logo or photo of a meeting
        },

        {
            "year": "2000s", //Be more specific with the year if possible
            "title": "Smith & Nephew LEGION Total Knee System",
            "description": "A modern TKA system emphasizing improved kinematics and fixation options for enhanced stability and range of motion.",
            "imageUrl": "https://i.ibb.co/DHnVP9kG/LEGION-TKS-Hero-1.png" // Add image URL
        },
        {
            "year": "Present", // Or specify the latest revision year
            "title": "Oxford Partial Knee",
            "description": "A modern unicompartmental knee replacement designed for a less invasive approach to treating isolated compartment arthritis.",
            "imageUrl": "https://i.ibb.co/5hXyyTHT/oxford-white-03-cmyk-hero.jpg" // Add image URL
        },
    {
            "year": "Present", // Or specify the latest revision year
            "title": "DePuy ATTUNE Genesis",
            "description": "A contemporary TKA system focusing on personalized fit and alignment through advanced instrumentation and implant design.",
                "imageUrl": "https://i.ibb.co/xtd3szC3/De-Puy-Synthes-Knee-Replacement.jpg" // Add image URL
        }
        // Add more timeline items as needed
    ];

    return (
        <div className="timeline">
            {timelineData.map((item, index) => (
                <TimelineItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                />
            ))}
        </div>
    );
};

export default Timeline;