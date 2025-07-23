import React, { useState } from 'react';
import { config } from '../config';
import Input from './ui/Input';
import Button from './ui/Button';

interface Props {
  translations: { [key: string]: string };
  userId: string;
  keyParam: string;
  onComplete: () => void;
}

const InstallDateForm: React.FC<Props> = ({ translations, userId, keyParam, onComplete }) => {
  const [installDate, setInstallDate] = useState('');
  const [installTime, setInstallTime] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('idle');

    const { webhookUrl, makeApiKey } = config;
    const fullUrl = `${webhookUrl}?method=installDate`;

    const data = new FormData();
    data.append('userId', userId);
    data.append('key', keyParam);
    data.append('installDate', installDate);
    data.append('installTime', installTime);

    try {
      const res = await fetch(fullUrl, {
        method: 'POST',
        headers: {
          'x-make-apikey': makeApiKey,
        },
        body: data,
      });

      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      onComplete();
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg space-y-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        {translations.installDateTimeLabel}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
            {translations.installDateLabel}
          </label>
          <Input type="date" value={installDate} onChange={(e) => setInstallDate(e.target.value)} required disabled={submitting} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
            {translations.installTimeLabel}
          </label>
          <Input type="time" value={installTime} onChange={(e) => setInstallTime(e.target.value)} required disabled={submitting} />
        </div>
      </div>

      {status === 'success' && <p className="text-green-600">{translations.submittedMessage}</p>}
      {status === 'error' && <p className="text-red-600">❌ Submission failed. Please try again.</p>}

      <Button type="submit" disabled={submitting}>
        {submitting ? translations.submitting : translations.submitButton}
      </Button>
    </form>
  );
};

export default InstallDateForm;
