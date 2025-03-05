'use client';

import React, { FormEvent, useState, ChangeEvent } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Client, Databases, ID } from 'appwrite';

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('67ad88fd00179a22fb08');

const databases = new Databases(client);

function ContactUs() {
  const [formData, setFormData] = useState({
    EmailID: '',
    Number: '',
    Message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Log form data to check if it's correct before submitting
    try {
      const response = await databases.createDocument(
        '67ad8967001c42f04938', // database ID
        '67ad898c001cdd0cb4b3', // collection ID
        'unique()',
        formData
      );

      // Clear the form fields after successful submission
      setFormData({
        EmailID: '',
        Number: '',
        Message: '',
      });
      console.log('Document created successfully', response);
    } catch (error) {
      console.error('Error creating document', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f3eb] dark:bg-gray-900 py-12 pt-[100px] relative">
      {/* Ensure the container is relative */}
      {/* BackgroundBeams with adjusted z-index */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      {/* Content with higher z-index */}
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        {/* Add relative and z-10 to bring content to the front */}
        <h1 className="text-6xl md:text-7xl text-center font-sans font-bold mb-8 text-black pt-[90px]">
          Contact Us
        </h1>
        <p className="text-black-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your journey.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            id="EmailID"
            value={formData.EmailID}
            onChange={handleChange}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-white-950 placeholder:text-white-700 text-black"
            required
          />
          <input
            type="number"
            id="Number"
            value={formData.Number}
            onChange={handleChange}
            placeholder="Your Contact Number"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-white-950 placeholder:text-white-700 text-black"
            required
          />
          <textarea
            id="Message"
            value={formData.Message}
            onChange={handleChange}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-white-950 placeholder:text-white-700 text-black"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;