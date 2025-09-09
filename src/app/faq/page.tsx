'use client';

import React from 'react';
import Link from 'next/link';

const FAQPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-md rounded-2xl p-6 mt-8 max-w-2xl w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">📘 Frequently Asked Questions (FAQ)</h1>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-blue-700 mb-4">📤 Upload Preparation</h2>
                    <div className="space-y-6 text-gray-700 text-base">
                        <div>
                            <h3 className="font-semibold">❓ Why do I need to crop and edit the images?</h3>
                            <p>
                                Clear, cropped images help improve listing quality and ensure the item you're selling is accurately represented. This boosts buyer confidence and increases the chances of a sale.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold">❓ How many images should I include per item?</h3>
                            <p>
                                We recommend at least 3 images per item — one of the front, one of the back, and one with measurements or weight shown. More angles help buyers better understand what they're purchasing.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold">❓ How should I organize my images?</h3>
                            <p>
                                Place all images into a single folder on your computer before uploading. This makes the process smoother and helps our system automatically group related images.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold">❓ What is the correct naming format for my image files?</h3>
                            <p>
                                Use the format: <code>1-1.jpg</code>, <code>1-2.jpg</code>, <code>2-1.jpg</code>, <code>3-3.jpg</code>, etc. The number before the dash indicates the item group, and the second number indicates the image order for that item.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold">❓ Do I need to create an account to upload?</h3>
                            <p>
                                No! You can upload as a guest or choose to log in for a more personalized experience and project history.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/upload" className="text-blue-600 hover:underline font-medium">
                        🚀 Ready to upload? Go to Upload Page
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
