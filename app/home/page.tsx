"use client"
import React, { useState, useEffect } from 'react';
import Loading from './loading'; // Import your loading component

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Simulate a 3-second loading delay
    const timer = setTimeout(() => {
      setContent(
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-50">Your Content</h1>
          <p className="text-gray-400 mt-2">Page content loaded successfully</p>
        </div>
      );
      setIsLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
        
      {isLoading ? (
        <Loading />
      ) : (
        content
      )}
    </div>
  );
}