import React from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const BlogPage: React.FC = () => {
    // const posts = [
    //     { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post. It contains some interesting information about various topics.' },
    //     { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post. It delves deeper into more advanced subjects and provides insightful analysis.' },
    //     { id: 3, title: 'Third Blog Post', content: 'This is the content of the third blog post. It offers a comprehensive overview of the latest trends and developments.' },
    //     { id: 4, title: 'Fourth Blog Post', content: 'This is the content of the fourth blog post. It includes expert opinions and detailed explanations on various matters.' },
    //     { id: 5, title: 'Fifth Blog Post', content: 'This is the content of the fifth blog post. It provides a summary of key points and actionable takeaways.' },
    // ];
    const posts = [
        { id: 1, title: 'Introduction to Knee Surgery', content: 'Knee surgery is a medical procedure performed to treat various knee conditions, such as injuries, arthritis, and other degenerative conditions. It aims to relieve pain, restore function, and improve quality of life. The procedure can vary from minimally invasive arthroscopic surgeries to more complex total knee replacements. Understanding the basics of knee surgery can help patients make informed decisions about their treatment options and set realistic expectations for recovery.' },
        { id: 6, title: 'Understanding Knee Surgery', content: 'Knee surgery is a common procedure aimed at resolving issues related to knee joint damage. It can involve repairing ligaments, tendons, or replacing the knee joint entirely. The decision to undergo knee surgery is typically based on the severity of the condition, the patient’s overall health, and their level of activity. Surgeons use advanced techniques and technologies to ensure the best possible outcomes, and patients are often required to participate in pre-surgery education programs to better understand the process and recovery.' },
        { id: 7, title: 'Types of Knee Surgery', content: 'There are several types of knee surgery, including arthroscopy, partial knee replacement, and total knee replacement. Each type addresses different issues and has varying recovery times. Arthroscopy is a minimally invasive procedure used to diagnose and treat joint problems, while partial knee replacement involves replacing only the damaged part of the knee. Total knee replacement is a more extensive procedure where the entire knee joint is replaced with artificial components. Each type of surgery has its own indications, benefits, and potential risks, which should be thoroughly discussed with a healthcare provider.' },
        { id: 8, title: 'Recovery After Knee Surgery', content: 'Recovery from knee surgery involves physical therapy, rest, and gradual return to activities. It is crucial to follow the surgeon’s advice to ensure proper healing and regain full function. The recovery process can vary depending on the type of surgery performed and the individual patient’s health. Physical therapy plays a vital role in strengthening the muscles around the knee, improving flexibility, and preventing complications. Patients are encouraged to set realistic goals and be patient with their progress, as full recovery can take several months.' },
        { id: 9, title: 'Risks and Complications', content: 'As with any surgery, knee surgery carries risks such as infection, blood clots, and complications from anesthesia. It is important to discuss these risks with your surgeon before the procedure. Other potential complications include nerve damage, persistent pain, and issues with the artificial joint in the case of knee replacements. Surgeons take various precautions to minimize these risks, but patients should be aware of the signs of complications and seek prompt medical attention if they experience any unusual symptoms during their recovery.' },
        { id: 10, title: 'Preparing for Knee Surgery', content: 'Preparation for knee surgery includes pre-operative assessments, arranging for post-surgery care, and understanding the rehabilitation process. Being well-prepared can help ensure a smoother recovery. Patients may need to undergo various tests to assess their overall health and identify any potential issues that could affect the surgery. It is also important to plan for assistance at home during the initial recovery period, as mobility may be limited. Understanding the rehabilitation process and setting up a comfortable recovery environment can significantly contribute to a successful outcome.' },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            <div className="space-y-6">
            {posts.map(post => (
            <div key={post.id} className="p-4 border rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-300">{post.content}</p>
            </div>
            ))}
            </div>
        </div>
    );
};

export default BlogPage;