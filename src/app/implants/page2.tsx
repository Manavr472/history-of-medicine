import React from 'react';
import * as reactVerticalTimelineComponent from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const implants = [
    {
        title: "1950s",
        cardTitle: "McKeever Metallic Tibial Hemiarthroplasty",
        cardSubtitle: "Dr. Donald McKeever",
        cardDetailedText: "An early tibial hemiarthroplasty, often used for unicompartmental arthritis. Precursor to modern TKA."
    },
    {
        title: "1950s",
        cardTitle: "Macintosh Tibial Hemiarthroplasty",
        cardSubtitle: "Dr. David Macintosh",
        cardDetailedText: "Another early tibial hemiarthroplasty design. A significant early attempt at unicompartmental replacement."
    },
    {
        title: "1950s-1960s",
        cardTitle: "Walldius Hinged Knee",
        cardSubtitle: "Dr. Börje Walldius",
        cardDetailedText: "An early hinged knee replacement. Offered stability but had high rates of complications."
    },
    {
        title: "1960s",
        cardTitle: "Guepar Hinged Knee",
        cardSubtitle: "French surgeons (exact origin debated)",
        cardDetailedText: "A popular early hinged knee replacement, initially offering promising results but later suffering from mechanical failures."
    },
    {
        title: "1971",
        cardTitle: "Gunston Polycentric Knee",
        cardSubtitle: "Dr. Frank Gunston",
        cardDetailedText: "A four-part, unlinked knee replacement. Focused on conforming surfaces but was technically challenging to implant."
    },
    {
        title: "1970s",
        cardTitle: "Freeman-Swanson Knee (ICLH)",
        cardSubtitle: "Dr. Michael Freeman and Sav Swanson",
        cardDetailedText: "A cruciate-sacrificing design that simplified knee kinematics. Influential for later surgical techniques."
    },
    {
        title: "1971",
        cardTitle: "Duocondylar Knee",
        cardSubtitle: "Dr. Chitranjan Ranawat, Dr. John Insall, and others at HSS",
        cardDetailedText: "An early attempt at a total knee replacement that preserved both cruciate ligaments. Led to important research and the development of the HSS Knee Score."
    },
    {
        title: "1974",
        cardTitle: "Total Condylar Knee",
        cardSubtitle: "Dr. John Insall, Dr. Chitranjan Ranawat, and others at HSS",
        cardDetailedText: "An influential design that set the standard for early total knee arthroplasty."
    },
    {
        title: "mid-1970s",
        cardTitle: "Duopatellar Knee",
        cardSubtitle: "Dr. John Insall, Dr. Chitranjan Ranawat, and others at HSS",
        cardDetailedText: "A posterior cruciate-retaining design offering greater range of motion. Popular for rheumatoid patients."
    },
    {
        title: "Late 1970s",
        cardTitle: "Kinematic Knee",
        cardSubtitle: "Howmedica",
        cardDetailedText: "An early metal-backed TKA design. Evolved into several later successful Howmedica knee systems."
    },
    {
        title: "1978",
        cardTitle: "Porous Coated Anatomic (PCA) Knee",
        cardSubtitle: "Dr. David Hungerford",
        cardDetailedText: "A landmark design that introduced porous-coated components for cementless fixation. Also emphasized precise instrumentation and alignment."
    },
    {
        title: "1984",
        cardTitle: "Press-Fit Condylar (PFC) Knee",
        cardSubtitle: "Drs. Richard Scott and Thomas Thornhill",
        cardDetailedText: "Introduced modularity, proportional sizing, and a cruciate keel."
    },
    {
        title: "1978",
        cardTitle: "Insall-Burstein Knee",
        cardSubtitle: "Dr. John Insall and Albert Burstein",
        cardDetailedText: "A posterior-stabilized design aiming to address deficiencies of earlier TKA designs, like anterior instability and limited flexion."
    },
    {
        title: "mid-1970s",
        cardTitle: "Low Contact Stress (LCS) Knee",
        cardSubtitle: "Dr. F.C. Buechel and Dr. Michael Pappas",
        cardDetailedText: "An early mobile-bearing knee design. Offered potential advantages in terms of wear and range of motion."
    },
    {
        title: "1970s",
        cardTitle: "Geometric Knee",
        cardSubtitle: "Dr. Mark Coventry and others at the Mayo Clinic",
        cardDetailedText: "A stabilized gliding joint replacement. One of the earlier designs of a knee joint replacement that was secured by methylmethacrylate with linked femoral and tibial elements."
    },
    {
        title: "1980s",
        cardTitle: "Genesis I and II",
        cardSubtitle: "Dr. James Rand and Dr. Raymond Gustillo",
        cardDetailedText: "A modular system with an anatomical tibia design and revision options."
    },
    {
        title: "1980s",
        cardTitle: "Anatomic Graduated Component (AGC) Knee",
        cardSubtitle: "Biomet",
        cardDetailedText: "A cruciate-retaining design known for its anatomical fit and emphasis on bone preservation."
    },
    {
        title: "1980s",
        cardTitle: "Low Contact Stress (LCS) Rotating Platform Knee",
        cardSubtitle: "DePuy",
        cardDetailedText: "A popular mobile-bearing TKA design offering theoretical advantages in terms of wear."
    },
    {
        title: "1980s",
        cardTitle: "Oxford Unicompartmental Knee",
        cardSubtitle: "Oxford Biomaterials",
        cardDetailedText: "A fixed bearing unicompartmental implant that requires ligamentous stability and appropriate bone stock for success."
    },
    {
        title: "1980s",
        cardTitle: "Kinemax Knee",
        cardSubtitle: "Howmedica",
        cardDetailedText: "A modular TKA system building upon the earlier Kinematic designs."
    },
    {
        title: "1990s",
        cardTitle: "PFC Sigma Knee",
        cardSubtitle: "DePuy",
        cardDetailedText: "A refinement of the PFC system offering both cruciate-retaining and substituting options."
    },
    {
        title: "1990s",
        cardTitle: "NexGen Knee",
        cardSubtitle: "Zimmer",
        cardDetailedText: "A complete knee replacement that included femoral, tibial and patellar components. Its main goal was to reproduce normal knee kinematics, which it tried to accomplish with conforming surfaces, cruciate retention and mobile bearings, when required."
    },
    {
        title: "1990s",
        cardTitle: "Rotating Hinge Knee",
        cardSubtitle: "Howmedica",
        cardDetailedText: "A rotating hinge prosthesis, often chosen for revision surgery or complex primary cases."
    }
];

const ImplantsTimeline: React.FC = () => {
    return (
        <div className="timeline-container bg-gray-900 text-white p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">History of Knee Implants</h1>
            <reactVerticalTimelineComponent.VerticalTimeline>
            {implants.map((implant, index) => (
                <reactVerticalTimelineComponent.VerticalTimelineElement
                key={index}
                date={implant.title}
                iconStyle={{ background: '#4A5568', color: '#fff' }}
                contentStyle={{ background: '#2D3748', color: '#E2E8F0' }}
                contentArrowStyle={{ borderRight: '7px solid #2D3748' }}
                >
                <h3 className="vertical-timeline-element-title text-lg font-semibold">{implant.cardTitle}</h3>
                <h4 className="vertical-timeline-element-subtitle text-md font-medium">{implant.cardSubtitle}</h4>
                <p className="text-sm">{implant.cardDetailedText}</p>
                </reactVerticalTimelineComponent.VerticalTimelineElement>
            ))}
            </reactVerticalTimelineComponent.VerticalTimeline>
        </div>
    );
};

export default ImplantsTimeline;