'use client'; // Keep this line at the very top for Next.js 13+ App Router

import React, { useState, useEffect, useCallback } from 'react';

interface MedicalFact {
    id: number;
    fact: string;
    category: string;
    liked: boolean;
    disliked: boolean;
}

const DidYouKnowPage: React.FC = () => {
    const [currentFact, setCurrentFact] = useState<MedicalFact | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // --- THIS IS THE CRUCIAL CHANGE: Calling YOUR Next.js API Route ---
    const fetchNewFact = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setCurrentFact(null); // Clear current fact for a smooth transition while loading

        try {
            // Fetch from your *own* Next.js API route
            const response = await fetch('/api/generate-medical-fact'); 
            
            if (!response.ok) {
                // If your API route returns an error status, parse its message
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            const data = await response.json(); // Expects { fact: string, category: string }

            // Validate that the data received is in the expected format
            if (data && typeof data.fact === 'string' && typeof data.category === 'string') {
                setCurrentFact({
                    id: Date.now(), // Use a unique ID (e.g., timestamp) for React's keying
                    fact: data.fact,
                    category: data.category,
                    liked: false,
                    disliked: false,
                });
            } else {
                // If API returns malformed data, throw an error
                throw new Error("API returned invalid data format.");
            }
        } catch (err: any) {
            console.error("Failed to fetch fact from API:", err);
            // Display a user-friendly error message
            setError(`Could not load a fact: ${err.message || 'Unknown error'}.`);
        } finally {
            setIsLoading(false);
        }
    }, []); // No dependencies for useCallback, so it's stable

    // Fetch the first fact when the component mounts
    useEffect(() => {
        fetchNewFact();
    }, [fetchNewFact]); // Dependency array: fetchNewFact ensures it only runs once if fetchNewFact is stable

    const handleVote = (voteType: 'like' | 'dislike') => {
        if (!currentFact) return; // Prevent voting if no fact is loaded

        setCurrentFact(prev => {
            if (!prev) return null;

            let newLiked = prev.liked;
            let newDisliked = prev.disliked;

            // Toggle logic: If already liked/disliked, un-toggle. Otherwise, set.
            if (voteType === 'like') {
                newLiked = !prev.liked;
                if (newLiked) newDisliked = false; // If liking, ensure not disliked
            } else { // voteType === 'dislike'
                newDisliked = !prev.disliked;
                if (newDisliked) newLiked = false; // If disliking, ensure not liked
            }

            return { ...prev, liked: newLiked, disliked: newDisliked };
        });

        // If disliked, automatically get a random fact with a slight delay for visual feedback
        // We check !currentFact.disliked to ensure it triggers ONLY when changing from un-disliked to disliked
        if (voteType === 'dislike' && !currentFact.disliked) { 
            setTimeout(() => {
                fetchNewFact();
            }, 500); // Small delay for better UX
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100 font-studio-sans">
            <div className="max-w-4xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="milker text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 tracking-wide drop-shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                        Did You Know?
                    </h1>
                    <p className="text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                        Fascinating Medical Facts About the Human Body
                    </p>
                </div>

                {/* Fact Card */}
                <div className="bg-gray-800 rounded-xl shadow-2xl p-8 transform transition-all duration-500 ease-out hover:scale-[1.01] min-h-[300px] flex flex-col justify-center">
                    {isLoading && (
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
                            <p className="text-lg text-gray-400 animate-pulse">Loading a fascinating fact...</p>
                        </div>
                    )}

                    {error && (
                        <div className="text-center text-red-400 text-lg py-12">
                            <p className="mb-4">⚠️ Error: {error}</p>
                            <button
                                onClick={fetchNewFact}
                                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md transition-colors font-medium shadow-md"
                            >
                                Try Again
                            </button>
                        </div>
                    )}

                    {!isLoading && !error && currentFact && (
                        <div key={currentFact.id} className="animate-fade-in flex flex-col items-center">
                            {/* Category */}
                            <div className="text-center mb-8">
                                <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-md font-bold uppercase tracking-wider shadow-xl transform hover:scale-105 transition-transform duration-300">
                                    {currentFact.category}
                                </span>
                            </div>

                            {/* Fact */}
                            <p className="text-2xl md:text-3xl text-gray-50 text-center mb-10 leading-relaxed font-medium tracking-wide">
                                {currentFact.fact}
                            </p>

                            {/* Voting */}
                            <div className="flex justify-center items-center space-x-8 mb-8">
                                <button
                                    onClick={() => handleVote('like')}
                                    className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg ${
                                        currentFact.liked
                                            ? 'bg-green-600 text-white'
                                            : 'bg-green-800 text-green-200 hover:bg-green-700'
                                    }`}
                                >
                                    <span className="text-2xl">👍</span>
                                    <span className="font-semibold text-lg">{currentFact.liked ? '1' : '0'}</span>
                                </button>

                                <button
                                    onClick={() => handleVote('dislike')}
                                    className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg ${
                                        currentFact.disliked
                                            ? 'bg-red-600 text-white'
                                            : 'bg-red-800 text-red-200 hover:bg-red-700'
                                    }`}
                                >
                                    <span className="text-2xl">👎</span>
                                    <span className="font-semibold text-lg">{currentFact.disliked ? '1' : '0'}</span>
                                </button>
                            </div>

                            {/* Get New Fact Button */}
                            <div className="text-center">
                                <button
                                    onClick={fetchNewFact}
                                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto space-x-2 shadow-xl"
                                >
                                    <span className="text-2xl">✨</span>
                                    <span>Get New Fact</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DidYouKnowPage;