"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SurgeonInfo: React.FC = () => {
    const surgeons = [
        {
            name: "Sir John Charnley",
            dob: "1911",
            dod: "1982",
            origin: "United Kingdom",
            description: "Pioneering work in low-friction arthroplasty and cemented fixation, foundational for TKA. Primarily known for hip replacements, but his biomechanical principles were crucial for TKA development.",
            details: "Sir John Charnley's journey was one of relentless dedication to alleviating the suffering caused by arthritis, particularly of the hip. Born in Bury, Lancashire, in 1911, his early fascination with mechanics and the human body foreshadowed a career that would revolutionize orthopedic surgery. After qualifying in medicine from the University of Manchester, he served in the Royal Army Medical Corps during World War II, where his experience with traumatic injuries cemented his interest in orthopedics and honed his surgical skills. This wartime experience provided valuable insights into the challenges of bone and joint repair, laying the groundwork for his later innovations in joint replacement. After the war, his return to Manchester Royal Infirmary marked the beginning of his focused pursuit of a solution to the debilitating effects of arthritis. /n Charnley's meticulous research and innovative engineering approach led him to develop the low-friction arthroplasty for the hip. Recognizing that wear and tear of artificial joint materials was a major limitation, he experimented with various materials and designs, ultimately settling on a small-diameter metal femoral head articulating with a high-density polyethylene (HDPE) acetabular cup. This combination, along with his pioneering use of bone cement (polymethylmethacrylate or PMMA) for fixation, dramatically improved the longevity and functionality of hip replacements. His commitment to rigorous scientific methodology extended to meticulous follow-up of his patients, producing long-term data that validated his techniques and set a new standard for evaluating surgical outcomes. /n While renowned for his transformative work on hip replacement, Charnley's principles of low-friction arthroplasty and biomechanics also had a significant, albeit indirect, impact on the development of total knee replacement (TKA). Although he wasn't directly involved in designing early TKA implants, his concepts laid the groundwork for subsequent surgeons and engineers who adapted and applied these principles to the knee. His work inspired a generation of orthopedic surgeons to pursue innovative solutions and to adopt a more scientific, evidence-based approach to patient care. /n Sir John Charnley's legacy continues to shape orthopedic surgery today. He elevated joint replacement from a last resort to a reliable and effective treatment, bringing mobility and relief to countless individuals worldwide. His insistence on meticulous research, precise surgical technique, and comprehensive follow-up established a new paradigm for surgical innovation and ensured his place as a true giant in the history of medicine. friends and visitors from",
            image: "https://i.ibb.co/k4FLfn0/John-Charnley.png",
            page: "surgeoninfo/Sir_John_Charnley"
          },
          {
            name: "Dr. John Insall",
            dob: "1930",
            dod: "2000",
            origin: "United Kingdom (worked primarily in the United States)",
            description: "Key figure at the Hospital for Special Surgery. Developed the Total Condylar Knee and the Insall-Burstein posterior stabilized knee.",
            details: "Dr. John Insall's life journey was marked by a deep commitment to improving the lives of those affected by knee disorders, particularly through his pioneering contributions to total knee replacement (TKA). Born in Bournemouth, England, in 1930, Insall's path to becoming a world-renowned knee surgeon began with his medical education at the University of Cambridge and London Hospital Medical School. His early experiences as a surgical and orthopedic resident in Montreal, Canada, and later as a fellow at the Hospital for Special Surgery (HSS) in New York City, exposed him to the challenges and limitations of treating knee conditions in the pre-TKA era. This exposure fueled his desire to find more effective and durable solutions for patients struggling with debilitating knee pain and dysfunction. /n Insall's time at HSS marked the beginning of his most impactful work. Collaborating with surgeons like Chitranjan Ranawat and bioengineer Peter Walker, he played a pivotal role in the development of several groundbreaking TKA designs. His innovations included the total condylar knee and the posterior stabilized design (in collaboration with Albert Burstein), known as the Insall-Burstein prosthesis. These designs became benchmarks for future TKA implants and significantly advanced the field, offering greater stability, improved range of motion, and better long-term outcomes. Beyond implant design, Insall emphasized the critical importance of meticulous surgical technique, including precise bone cuts, ligament balancing, and soft tissue handling, for successful TKA./n Recognizing the need for continued innovation and improved patient care, Insall, along with colleagues, established the Insall Scott Kelly Institute for Orthopedics and Sports Medicine at Beth Israel Medical Center in New York City. This move reflected his dedication to advancing both the clinical practice and the research frontiers of knee surgery. He became a sought-after teacher and mentor, training numerous fellows who carried his legacy of excellence to orthopedic centers worldwide. His seminal textbook, Surgery of the Knee, co-authored with William Norman Scott, has become a cornerstone of orthopedic education and a testament to his profound understanding of the knee joint./n Throughout his career, John Insall's dedication to advancing knee surgery earned him international recognition and numerous accolades. He was a founding member and president of the Knee Society, a testament to his leadership in the field. His tireless efforts to improve the lives of patients, coupled with his commitment to education and research, cemented his place as a true giant in the history of orthopedics. He is widely considered the father of modern knee replacement, and his legacy continues to inspire surgeons and improve the lives of countless individuals affected by knee disorders.",
            image: "https://i.ibb.co/DzPxMRj/Dr-John-Insall.png",
            page: "surgeoninfo/John_Insall"
          },
          {
            name: "Dr. Chitranjan Ranawat",
            dob: "1934",
            dod: "2017",
            origin: "India (worked primarily in the United States)",
            description: "Collaborated with Insall at HSS on early TKA designs, including the duocondylar and duopatellar knees.  Instrumental in the development of the HSS Knee Score.",
            details: "Dr. Chitranjan Ranawat's life journey was a testament to his unwavering dedication to advancing the field of orthopedic surgery, particularly in the realm of joint replacement. Born in India in 1934, he embarked on a path that led him to become a world-renowned surgeon and a pivotal figure in the development of modern total knee arthroplasty (TKA). His initial medical training in India provided a strong foundation, but it was his move to the United States and subsequent training at the Hospital for Special Surgery (HSS) in New York City that set the stage for his most impactful contributions. At HSS, he found himself at the epicenter of innovation in joint replacement, working alongside giants like John Insall and surrounded by a collaborative environment that fostered groundbreaking advancements./n Ranawat's early career at HSS was marked by a close partnership with John Insall, and together they spearheaded the development of several influential TKA designs. His contributions included crucial work on the duocondylar and duopatellar knee replacements, which explored different approaches to balancing joint stability and range of motion, particularly in patients with rheumatoid arthritis. These early designs, while not without their limitations, were essential stepping stones in the evolution of TKA and laid the groundwork for the more refined and successful implants that followed. Ranawat's surgical expertise and insights into the biomechanics of the knee joint were instrumental in shaping these early TKA concepts. /n Beyond his direct contributions to implant design, Ranawat was a tireless advocate for improving surgical techniques and patient outcomes. He was instrumental in the development of the Hospital for Special Surgery (HSS) Knee Score, a widely used tool for evaluating the results of knee surgery. He also played a key role in the development and refinement of surgical approaches and instrumentation, contributing to the standardization and reproducibility of TKA procedures. His commitment to education and mentorship was equally profound, as he trained generations of orthopedic surgeons who carried his legacy of innovation and excellence to centers around the world. /n Chitranjan Ranawat's legacy extends beyond specific implant designs or surgical techniques; he helped shape the entire field of knee arthroplasty, driving its evolution towards greater precision, improved outcomes, and enhanced patient well-being. His dedication to advancing the art and science of orthopedic surgery cemented his place as a true pioneer and an inspiration to countless surgeons who followed in his footsteps. He passed away in 2017, leaving behind a transformed field and a lasting impact on the lives of millions of patients.",
            image: "https://i.ibb.co/wLvmy8p/Chitranjan-Ranawat.png",
            page: "surgeoninfo/Chitranjan_Ranawat"
          },
          {
            name: "Dr. Michael Freeman",
            dob: "1929",
            dod: "2006",
            origin: "United Kingdom",
            description: "Developed the Freeman-Swanson knee (ICLH), a cruciate-sacrificing TKA design. Advanced soft-tissue balancing techniques.",
            details: "Dr. Michael Freeman's life journey was characterized by a relentless pursuit of innovative solutions for complex orthopedic problems, particularly in the realm of knee surgery. Born in 1929, he embarked on a medical career that would see him become a pioneering figure in the development of total knee arthroplasty (TKA). His education at the Royal College of Surgeons in Ireland and subsequent training in various centers exposed him to diverse surgical approaches and kindled a deep interest in biomechanics, which would become a cornerstone of his work. A pivotal moment in his training was a period spent with Dr. David Macintosh in Boston, where he gained valuable insights into early knee replacement techniques. /n Freeman's return to London and his collaboration with engineer Savile Swanson at the Imperial College London Hospital (ICLH) marked the beginning of his most impactful work. Together, they developed the Freeman-Swanson knee, one of the earliest total knee replacements. This design, while initially successful, highlighted the challenges of early TKA, including issues with wear and loosening. However, Freeman's contribution extended beyond the implant itself; he emphasized the importance of achieving balanced flexion and extension gaps during surgery, a concept that proved fundamental to successful TKA and continues to influence surgical techniques today. He championed the idea of soft-tissue balancing and ligament releases to achieve optimal joint stability and function, moving beyond simply replacing the bony surfaces of the knee. /n Undeterred by the limitations of early designs, Freeman continued to refine his approach to knee replacement, recognizing that surgical technique played a crucial role in the success of TKA. He emphasized the importance of precise bone cuts, appropriate soft-tissue management, and meticulous attention to detail during surgery. This focus on surgical technique was essential for optimizing the performance of even the early, less sophisticated implant designs. His work helped to establish TKA as a viable treatment for patients with severe knee arthritis and laid the foundation for the rapid advancements in implant design and surgical techniques that followed in subsequent decades. /n Though less widely recognized in some modern accounts of TKA history, Michael Freeman's contributions were pivotal in the early development of knee replacement surgery. He played a crucial role in bridging the gap between the era of simple hinge-type prostheses and the more sophisticated, anatomically designed implants of today. His work at ICLH, his emphasis on surgical technique, and his focus on soft-tissue balancing laid the groundwork for the transformative success of modern TKA, making him a true pioneer in the field. He passed away in 2006, leaving behind a legacy of innovation that continues to improve the lives of countless patients.",
            image: "https://i.ibb.co/rfkZytg/Michael-Freeman.jpg",
            page: "surgeoninfo/Michael_Freeman"
          },
          {
            name: "Dr. David Hungerford",
            dob: "1927",
            dod: "2011",
            origin: "United States",
            description: "Pioneered porous-coated implants for cementless TKA fixation.  Advanced instrumentation and alignment techniques.",
            image: "https://i.ibb.co/25htR6n/David-Hungerford.jpg",
            page: "surgeoninfo/David_Hungerford",
            details: "Dr. Michael Freeman's life journey was characterized by a relentless pursuit of innovative solutions for complex orthopedic problems, particularly in the realm of knee surgery. Born in 1929, he embarked on a medical career that would see him become a pioneering figure in the development of total knee arthroplasty (TKA). His education at the Royal College of Surgeons in Ireland and subsequent training in various centers exposed him to diverse surgical approaches and kindled a deep interest in biomechanics, which would become a cornerstone of his work. A pivotal moment in his training was a period spent with Dr. David Macintosh in Boston, where he gained valuable insights into early knee replacement techniques. /n Freeman's return to London and his collaboration with engineer Savile Swanson at the Imperial College London Hospital (ICLH) marked the beginning of his most impactful work. Together, they developed the Freeman-Swanson knee, one of the earliest total knee replacements. This design, while initially successful, highlighted the challenges of early TKA, including issues with wear and loosening. However, Freeman's contribution extended beyond the implant itself; he emphasized the importance of achieving balanced flexion and extension gaps during surgery, a concept that proved fundamental to successful TKA and continues to influence surgical techniques today. He championed the idea of soft-tissue balancing and ligament releases to achieve optimal joint stability and function, moving beyond simply replacing the bony surfaces of the knee. /n Undeterred by the limitations of early designs, Freeman continued to refine his approach to knee replacement, recognizing that surgical technique played a crucial role in the success of TKA. He emphasized the importance of precise bone cuts, appropriate soft-tissue management, and meticulous attention to detail during surgery. This focus on surgical technique was essential for optimizing the performance of even the early, less sophisticated implant designs. His work helped to establish TKA as a viable treatment for patients with severe knee arthritis and laid the foundation for the rapid advancements in implant design and surgical techniques that followed in subsequent decades. /n Though less widely recognized in some modern accounts of TKA history, Michael Freeman's contributions were pivotal in the early development of knee replacement surgery. He played a crucial role in bridging the gap between the era of simple hinge-type prostheses and the more sophisticated, anatomically designed implants of today. His work at ICLH, his emphasis on surgical technique, and his focus on soft-tissue balancing laid the groundwork for the transformative success of modern TKA, making him a true pioneer in the field. He passed away in 2006, leaving behind a legacy of innovation that continues to improve the lives of countless patients.",
            
          },
          {
            name: "Dr. Nas S. Eftekhar",
            dob: "1924",
            dod: "1994",
            image: "https://i.ibb.co/gDZ8NYS/Nas-Eftekhar.jpg",
            page: "surgeoninfo/Nas_Eftekhar",
            origin: "Iran",
            description: "Pioneering work in TKA design, including the Eftekhar Mark I and Mark II knees.  Introduced modularity to knee implants.",
            details: "Dr. Nas S. Eftekhar's life journey was defined by his pioneering contributions to the field of total joint replacement, particularly his early and influential work on total knee arthroplasty (TKA). Born in Iran in 1924, he embarked on a medical career that would lead him to become a prominent figure in orthopedics and a champion of innovation. After completing his medical education in Iran and serving in the Iranian Army Medical Corps, he moved to the United States to pursue further training, recognizing the opportunities for advancement in orthopedic surgery. This move marked a pivotal point in his career, as he sought to bring advanced surgical techniques and a dedication to research to the burgeoning field of joint replacement. /n Eftekhar's arrival in the United States led him to the New York University Hospital for Joint Diseases, where he began his orthopedic residency. It was during this time that he began to focus his attention on the challenges of treating severe arthritis of the knee. Recognizing the limitations of existing surgical options, he embarked on a path of innovation that would significantly impact the development of TKA. In collaboration with engineer Randy Gand, he designed and implanted one of the earliest cemented total knee replacements with metal-backed tibial components, a design that would later become known as the Eftekhar Mark I knee. /n Building upon the Mark I, Eftekhar continued to refine his TKA designs, developing the Mark II, which featured a more condylar geometry and enhanced stability. Crucially, he introduced the concept of modularity to knee implants, allowing for greater flexibility in surgical reconstruction and paving the way for the customizable and adaptable TKA systems widely used today. His work significantly advanced the field, demonstrating that a stable and functional knee replacement could be achieved, even in patients with complex deformities or severe bone loss. He embraced the concept of sacrificing the cruciate ligaments in these more difficult cases in order to achieve better initial stability. This approach was further developed and applied successfully by several other surgeons. /n Nas Eftekhar's legacy in orthopedics extends beyond the specific implants he designed; he was a champion of innovation who challenged conventional approaches and pushed the boundaries of surgical possibility. His early adoption of metal-backed components, cemented fixation, and, most importantly, modularity in TKA significantly influenced the development of the field and laid the groundwork for the sophisticated and highly successful TKA systems used worldwide today. Though sometimes overlooked in modern accounts, his contributions were essential to the early progress of knee replacement and continue to impact the lives of countless patients. He passed away in 1994, leaving behind a transformed field and a lasting impact on the treatment of knee arthritis.",
          },
            
          
        {
            name: "Dr. Clement B. Sledge",
            dob: "1938",
            dod: "2016",
            image: "https://i.ibb.co/RynshN9/Clement-B-Sledge.jpg",
            page: "surgeoninfo/Clement_B_Sledge",
            description: "Important contributions to TKA, with a focus on anatomical design and soft tissue considerations.  Authored influential texts on knee surgery.",
            origin: "United States",
            details: "Dr. Clement B. Sledge's life journey was one of unwavering dedication to advancing the field of orthopedic surgery, particularly in the treatment of knee disorders and the development of total knee arthroplasty (TKA). Born in 1938, he pursued a medical career that would see him become a highly respected surgeon, educator, and innovator. After receiving his medical degree from Harvard Medical School and completing his residency at Massachusetts General Hospital, he joined the faculty at Harvard, where he spent his entire career, ultimately becoming the Charles A. Dana Professor of Orthopedic Surgery. This academic setting provided the ideal environment for his pursuit of both clinical excellence and groundbreaking research. /n Sledge's early work focused on understanding the complex biomechanics of the knee joint and the challenges of treating knee arthritis. He recognized the limitations of early TKA designs and the importance of developing more anatomical and functional implants. His contributions to TKA design emphasized the preservation of bone stock, improved soft tissue balancing, and the development of surgical techniques that optimized implant performance and longevity. He was a key figure in the evolution of TKA from its early, relatively crude designs to the more sophisticated and successful implants used today. /n Beyond his contributions to TKA, Sledge was a passionate advocate for improving the quality of orthopedic education and research. He was instrumental in the development of standardized outcome measures for knee surgery, recognizing the importance of objective data for evaluating treatment effectiveness. His textbook, The Knee, co-authored with Robert B. Duthie, became a cornerstone of orthopedic education and a testament to his deep understanding of knee disorders. He also served as a mentor to countless orthopedic residents and fellows, inspiring them to pursue careers in academic medicine and contribute to the advancement of the field. /n Clement B. Sledge's legacy in orthopedics is one of scientific rigor, dedication to patient care, and a commitment to education and mentorship. His contributions to TKA design and surgical technique significantly advanced the field, and his emphasis on standardized outcome measures helped to establish a more evidence-based approach to orthopedic practice. His influence as a teacher and mentor extended far beyond the walls of Harvard, shaping the careers of numerous orthopedic surgeons who carry on his legacy of excellence. He passed away in 2016, leaving behind a transformed field and a lasting impact on the lives of countless patients.",
            
          }
    ];
        // Add more surgeons as needed

    const [selectedSurgeon, setSelectedSurgeon] = useState<{ name: string; description: string; image: string; details: string; dob: string; dod: string; origin: string; page: string } | null>(null);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    // const handleCardClick = (surgeon: { name: string; description: string; image: string; details: string; dob: string; dod: string; origin: string; page: string }) => {
    //     setSelectedSurgeon(surgeon);
    //     setIsOverlayVisible(true);
    // };
    const openpage = (surgeon: { name: string; description: string; image: string; details: string; dob: string; dod: string; origin: string; page: string }) => {
      window.location.href = surgeon.page;
    }
    const closeOverlay = () => {
        setIsOverlayVisible(false);
        setSelectedSurgeon(null);
    };

    return (
      <div className="container mx-auto p-8">
        <h2 className="milker text-4xl font-bold mb-8 text-center">Surgeon Information</h2>
        {surgeons.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {surgeons.map((surgeon, index) => (
          <motion.div 
            key={index} 
            className="bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden transform pd-8 transition duration-500 hover:scale-105 hover:shadow-lg hover:shadow-green-500 cursor-pointer" 
            onClick={() => openpage(surgeon)}
            whileHover={{ scale: 1.05 }}
          >
          <div className="w-full flex justify-center items-center mb-4 md:mb-0">
            <img className="w-auto h-64  rounded-lg" src={surgeon.image} alt={surgeon.name} />
          </div>
          <div className="p-6">
            <h3 className="text-xl milker font-bold mb-2 text-gray-900 dark:text-white">{surgeon.name}</h3>
            <p className="text-gray-700 minigap dark:text-gray-300">{surgeon.description}</p>
          </div>
          </motion.div>
          ))}
        </div>
        )}

        {isOverlayVisible && selectedSurgeon && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
        <motion.div 
        className="mt-14 bg-white dark:bg-black p-8 rounded-lg shadow-lg max-w-2xl w-full relative overflow-y-auto max-h-full"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        >
        <button
          className="absolute text-2xl top-2 right-2 text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-full pr-2 pl-2"
          onClick={closeOverlay}
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-center items-center">
            <img className="max-w-full max-h-full rounded-lg" src={selectedSurgeon.image} alt={selectedSurgeon.name} />
          </div>
          <div className="md:ml-4">
          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{selectedSurgeon.name}</h3>
          <p className="text-gray-500 dark:text-gray-400">Year of Birth: {selectedSurgeon.dob}</p>
          <p className="text-gray-500 dark:text-gray-400">Year of Death: {selectedSurgeon.dod}</p>
          <p className="text-gray-500 dark:text-gray-400">Origin: {selectedSurgeon.origin}</p>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{selectedSurgeon.name}</h3>
        {selectedSurgeon.details.split('/n').map((paragraph, index) => (
          <p key={index} className="text-gray-700 dark:text-gray-300 mb-4">{paragraph}</p>
        ))}
        </motion.div>
        </motion.div>
        )}
      </div>
    );
};

export default SurgeonInfo;