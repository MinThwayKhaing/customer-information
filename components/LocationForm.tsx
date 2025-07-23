
import React, { useState } from 'react';
import Textarea from './ui/Textarea';
import Button from './ui/Button';
import { config } from '../config';

interface LocationFormProps {
  translations: { [key: string]: string };
  onComplete: () => void;
  userId: string;
}

const LocationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);


const LocationForm: React.FC<LocationFormProps> = ({ translations, onComplete, userId }) => {
  const [location, setLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const { webhookUrl, makeApiKey } = config;
    const fullUrl = `${webhookUrl}?method=location`;

    const data = new FormData();
    data.append('location', location);
    data.append('userId', userId);
    try {
      const response = await fetch(fullUrl, {
        method: 'POST',
        headers: {
          'x-make-apikey': makeApiKey,
        },
        body: data,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Server responded with an error.');
      }
      
      console.log('Location Data Submitted successfully');
      onComplete();

    } catch (err) {
      console.error('Failed to submit location:', err);
      setError('Failed to connect to the server. Please check your network and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mb-4">
            <LocationIcon />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {translations.locationHeader}{userId}
            </h2>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mb-5 text-sm sm:text-base">
          {translations.locationInstruction}
        </p>
        <Textarea
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder={translations.locationPlaceholder}
          rows={4}
          required
          disabled={isSubmitting}
        />
        {error && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>}
        <div className="mt-6 flex justify-end">
            <Button type="submit" className="sm:w-auto" disabled={isSubmitting || !location.trim()}>
                {isSubmitting ? translations.processing : translations.nextButton}
            </Button>
        </div>
      </form>
    </section>
  );
};

export default LocationForm;