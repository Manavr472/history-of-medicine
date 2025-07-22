'use client'
import React, { useState, useEffect } from 'react';


function formatDateKey(date: Date) {
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${mm}-${dd}`;
}

function getMonthName(month: number) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month];
}

function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
    return new Date(year, month, 1).getDay();
}

interface MedicalEvent {
    year: number;
    title: string;
    description: string;
    importance: string[];
}

export default function OnThisDayPage() {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [medicalHistory, setMedicalHistory] = useState<Record<string, MedicalEvent[]>>({});
    const [showCalendar, setShowCalendar] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const fetchHistoricalEvents = async (date: Date) => {
        setLoading(true);
        setError(null);
        
        try {
            const month = date.getMonth() + 1;
            const day = date.getDate();
            console.log(`Fetching events for ${month}/${day}`); // Debug log
            
            const response = await fetch(`/api/get-medical-history?month=${month}&day=${day}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            });
            
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }
            
            const events = await response.json();
            
            if (!Array.isArray(events)) {
                throw new Error('Invalid response format: expected an array of events');
            }
            
            // Validate and transform each event
            const validatedEvents = events.map(event => ({
                year: Number(event.year) || 0,
                title: String(event.title || ''),
                description: String(event.description || ''),
                importance: Array.isArray(event.importance) ? event.importance.map(String) : []
            }));
            
            // Sort events by year in descending order
            const sortedEvents = validatedEvents.sort((a, b) => b.year - a.year);
            const dateKey = formatDateKey(date);
            
            console.log(`Found ${sortedEvents.length} events for ${month}/${day}`); // Debug log
            
            setMedicalHistory(prev => ({
                ...prev,
                [dateKey]: sortedEvents
            }));
        } catch (error: any) {
            const errorMessage = error?.message || 'An unexpected error occurred';
            console.error('Error fetching historical events:', errorMessage);
            setError(`Failed to load historical events: ${errorMessage}. Please try again.`);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchHistoricalEvents(selectedDate);
    }, [selectedDate]);

    const goToPreviousDay = () => {
        const prevDay = new Date(selectedDate);
        prevDay.setDate(prevDay.getDate() - 1);
        setSelectedDate(prevDay);
    };

    const goToNextDay = () => {
        const nextDay = new Date(selectedDate);
        nextDay.setDate(nextDay.getDate() + 1);
        setSelectedDate(nextDay);
    };

    const hasEventsOnDate = (date: Date) => {
        const dateKey = formatDateKey(date);
        return medicalHistory[dateKey] && medicalHistory[dateKey].length > 0;
    };

    const renderCalendar = () => {
        const year = selectedDate.getFullYear();
        const month = selectedDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        
        const days = [];
        const today = new Date();
        
        // Empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="p-2"></div>);
        }
        
        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const isSelected = date.toDateString() === selectedDate.toDateString();
            const isToday = date.toDateString() === today.toDateString();
            const hasEvents = hasEventsOnDate(date);
            
            days.push(
                <div
                    key={day}
                    className={`
                        p-3 cursor-pointer text-center relative 
                        rounded-lg transition-all duration-300
                        ${isSelected 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-110 shadow-lg z-10' 
                            : 'hover:bg-gray-700/50'}
                        ${isToday ? 'ring-2 ring-blue-400' : ''}
                        ${hasEvents ? 'font-semibold' : 'text-gray-400 hover:text-white'}
                    `}
                    onClick={() => {
                        setSelectedDate(date);
                        setShowCalendar(false);
                    }}
                >
                    {day}
                    {hasEvents && (
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-1 flex space-x-1">
                            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                        </div>
                    )}
                </div>
            );
        }
        
        return (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 absolute z-10 mt-2">
                <div className="flex justify-between items-center mb-4">
                    <button
                        onClick={() => {
                            const prevMonth = new Date(selectedDate);
                            prevMonth.setMonth(prevMonth.getMonth() - 1);
                            setSelectedDate(prevMonth);
                        }}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                        aria-label="Previous Month"
                        title="Previous Month"
                    >
                        ←
                    </button>
                    <h3 className="font-semibold">
                        {getMonthName(month)} {year}
                    </h3>
                    <button
                        onClick={() => {
                            const nextMonth = new Date(selectedDate);
                            nextMonth.setMonth(nextMonth.getMonth() + 1);
                            setSelectedDate(nextMonth);
                        }}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                        aria-label="Next Month"
                        title="Next Month"
                    >
                        →
                    </button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-xs mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="p-2 text-center font-medium text-gray-500">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-1 text-sm">
                    {days}
                </div>
            </div>
        );
    };

    const dateKey = formatDateKey(selectedDate);
    const events = medicalHistory[dateKey] || [];

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="font-milker text-5xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    On This Day in Medical History
                </h1>
            </div>
                
                {/* Date Navigation */}
                <div className="flex items-center justify-center mb-12 space-x-6">
                    <button
                        onClick={goToPreviousDay}
                        className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                        title="Previous Day"
                        aria-label="Previous Day"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                
                <div className="relative">
                    <button
                        onClick={() => setShowCalendar(!showCalendar)}
                        className="px-6 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium min-w-[200px]"
                    >
                        {selectedDate.toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}
                    </button>
                    
                    {showCalendar && renderCalendar()}
                </div>
                
                <button
                    onClick={goToNextDay}
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors shadow-md flex items-center justify-center"
                    title="Next Day"
                    aria-label="Next Day"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Events Display */}
            <section className="mt-12">
                {loading ? (
                    <div className="text-center py-16 bg-gray-800/30 rounded-2xl backdrop-blur-sm">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                        <p className="text-xl text-gray-300">Discovering medical history...</p>
                        <p className="text-sm text-gray-400 mt-2">Searching historical records for {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-16 bg-gray-800/30 rounded-2xl backdrop-blur-sm">
                        <div className="text-5xl mb-4">⚠️</div>
                        <p className="text-xl text-gray-300 mb-2">{error}</p>
                        <p className="text-sm text-gray-400 mb-4">
                            Date: {selectedDate.toLocaleDateString('en-US', { 
                                month: 'long', 
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </p>
                        <button 
                            onClick={() => fetchHistoricalEvents(selectedDate)}
                            className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Try Again
                        </button>
                    </div>
                ) : events.length > 0 ? (
                    <div className="grid gap-8 mx-[10%]">
                        {events.map((event, idx) => (
                            <div 
                                key={idx} 
                                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{event.title}</h2>
                                    {event.year && (
                                        <span className="text-lg font-mono text-gray-400">{event.year}</span>
                                    )}
                                </div>
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{event.description}</p>
                                {event.importance && event.importance.length > 0 && (
                                    <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/30">
                                        <h3 className="font-semibold text-gray-300 mb-4">Historical Significance:</h3>
                                        <ul className="space-y-3">
                                            {event.importance.map((point, pointIdx) => (
                                                <li key={pointIdx} className="flex items-start space-x-3">
                                                    <span className="text-blue-400 mt-1">•</span>
                                                    <span className="text-gray-400">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-gray-800/30 rounded-2xl backdrop-blur-sm">
                        <div className="text-7xl mb-6 animate-pulse">�</div>
                        <p className="text-2xl text-gray-300 mb-3">No medical events found for this day</p>
                        <p className="text-gray-400">Try selecting a different date or browse using the navigation arrows</p>
                    </div>
                )}
            </section>

            {/* Click outside to close calendar */}
            {showCalendar && (
                <div 
                    className="fixed inset-0 z-5" 
                    onClick={() => setShowCalendar(false)}
                ></div>
            )}
        </main>
    );
}
