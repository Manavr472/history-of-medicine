'use client'
import React, { useState, useEffect } from 'react';
import medicalHistoryData from './onthisday.json'; // Adjust path as needed

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

export default function OnThisDayPage() {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [medicalHistory, setMedicalHistory] = useState<Record<string, { title: string; description: string; importance: string[]; }[]>>({});
    const [showCalendar, setShowCalendar] = useState(false);
    
    useEffect(() => {
        // Transform the array data into a Record grouped by date
        const groupedByDate = medicalHistoryData.reduce((acc, event) => {
            const dateKey = event.date;
            
            if (!acc[dateKey]) {
                acc[dateKey] = [];
            }
            
            // Only keep title and description
            acc[dateKey].push({
                title: event.title,
                description: event.description, 
                importance: event.importance
            });
            
            return acc;
        }, {} as Record<string, { title: string; description: string, importance: string[] }[]>);
        
        setMedicalHistory(groupedByDate);
    }, []);

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
                    className={`p-2 cursor-pointer text-center relative hover:bg-gray-100 dark:hover:bg-gray-700 rounded ${
                        isSelected ? 'bg-blue-500 text-white' : ''
                    } ${isToday ? 'ring-2 ring-blue-300' : ''}`}
                    onClick={() => {
                        setSelectedDate(date);
                        setShowCalendar(false);
                    }}
                >
                    {day}
                    {hasEvents && (
                        <div className="absolute left-0 right-0 mx-auto bottom-0 w-2 h-2 bg-green-500 rounded-full"></div>
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
        <main className="max-w-4xl mx-auto my-8 p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">On This Day in Medical History</h1>
            
            {/* Date Navigation */}
            <div className="flex items-center justify-center mb-8 space-x-4">
                <button
                    onClick={goToPreviousDay}
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors shadow-md flex items-center justify-center"
                    title="Previous Day"
                    aria-label="Previous Day"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <section className="mt-8">
                {events.length > 0 ? (
                    <div className="grid gap-6">
                        {events.map((event, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                                <h2 className="text-2xl font-semibold mb-3 text-green-600 dark:text-green-400">{event.title}</h2>
                                <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">{event.description}</p>
                                {event.importance && event.importance.length > 0 && (
                                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                                        <h3 className="font-semibold text-sm text-gray-600 dark:text-gray-400 mb-2">Key Points:</h3>
                                        <ul className="list-disc list-inside space-y-1">
                                            {event.importance.map((point, pointIdx) => (
                                                <li key={pointIdx} className="text-sm text-gray-600 dark:text-gray-400">{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">📅</div>
                        <p className="text-xl text-gray-500 dark:text-gray-400">No significant medical events found for this day.</p>
                        <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">Try selecting a different date or browse using the arrows.</p>
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
