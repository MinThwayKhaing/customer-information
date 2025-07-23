
import React, { useState } from 'react';
import { CustomerInfo } from '../types';
import Input from './ui/Input';
import Textarea from './ui/Textarea';
import FileUpload from './ui/FileUpload';
import Button from './ui/Button';
import { config } from '../config';

interface CustomerInfoFormProps {
  translations: { [key: string]: string };
  onBack: () => void;
    onComplete: () => void;
  userId: string;
    keyParam: string; 
}

const UserIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const CustomerInfoForm: React.FC<CustomerInfoFormProps> = ({ translations, onComplete,onBack, userId,keyParam }) => {
  const initialFormState: CustomerInfo = {
    name: '',
    phone: '',
    email: '',
    kycFile: null,
    idCardAddress: '',
    
     nickname: '',
    presentAddress: '',
  };
  const [formData, setFormData] = useState<CustomerInfo>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const resetForm = () => {
    setFormData(initialFormState);
    const fileInput = document.getElementById('kycFile-input') as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, kycFile: e.target.files![0] }));
    } else {
      setFormData((prev) => ({ ...prev, kycFile: null }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('idle');
    setSubmissionError(null);

    const { webhookUrl, makeApiKey } = config;
    const fullUrl = `${webhookUrl}?method=customerInfo`;

    const data = new FormData();
    data.append('userId', userId);
    data.append('name', formData.name);
    data.append('phone', formData.phone);
    data.append('email', formData.email);
    data.append('nickname', formData.nickname);
  data.append('key', keyParam);
    data.append('idCardAddress', formData.idCardAddress);
    data.append('presentAddress', formData.presentAddress);
    if (formData.kycFile) {
      data.append('kycFile', formData.kycFile);
    }
    
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
            throw new Error(errorText || 'Submission failed. Please try again.');
        }

        setSubmissionStatus('success');
        
        resetForm();
    onComplete();
        setTimeout(() => {
            setSubmissionStatus('idle');
        }, 5000);

    } catch (err) {
        console.error('Failed to submit form:', err);
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
        setSubmissionError(`Submission failed: ${errorMessage}`);
        setSubmissionStatus('error');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center mb-6">
            <UserIcon />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {translations.customerInfoHeader}
            </h2>
        </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">{translations.nameLabel}</label>
            <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder={translations.namePlaceholder} required disabled={isSubmitting} />
          </div>
          <div>
  <label htmlFor="nickname" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">
    {translations.nicknameLabel}
  </label>
  <Input
    id="nickname"
    name="nickname"
    type="text"
    value={formData.nickname}
    onChange={handleChange}
    placeholder={translations.nicknamePlaceholder}
    required={false}
    disabled={isSubmitting}
  />
</div>

          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">{translations.phoneLabel}</label>
            <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder={translations.phonePlaceholder} required disabled={isSubmitting} />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">{translations.emailLabel}</label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder={translations.emailPlaceholder} required disabled={isSubmitting} />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">{translations.kycLabel}</label>
          <FileUpload id="kycFile-input" name="kycFile" buttonText={translations.kycButtonText} noFileText={translations.noFileChosen} onChange={handleFileChange} file={formData.kycFile} disabled={isSubmitting} />
        </div>
        <div>
          <label htmlFor="idCardAddress" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">{translations.idCardAddressLabel}</label>
          <Textarea id="idCardAddress" name="idCardAddress" value={formData.idCardAddress} onChange={handleChange} placeholder={translations.idCardAddressPlaceholder} rows={3} required disabled={isSubmitting} />
        </div>
        <div>
          <label htmlFor="presentAddress" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">{translations.presentAddressLabel}</label>
          <Textarea id="presentAddress" name="presentAddress" value={formData.presentAddress} onChange={handleChange} placeholder={translations.presentAddressPlaceholder} rows={3} required disabled={isSubmitting} />
        </div>
        <div className="pt-2 min-h-[60px]">
            {submissionStatus === 'success' && (
                 <div className="text-center p-3 rounded-md bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300">
                    {translations.submittedMessage}
                </div>
            )}
             {submissionStatus === 'error' && (
                 <div className="text-center p-3 rounded-md bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-300">
                    {submissionError}
                </div>
            )}
            {submissionStatus === 'idle' && (
                <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-4">
                    <Button type="button" onClick={onBack} className="bg-gray-500 hover:bg-gray-600 focus:ring-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 sm:w-auto" disabled={isSubmitting}>
                        {translations.backButton}
                    </Button>
                    <Button type="submit" className="sm:w-auto" disabled={isSubmitting}>
                        {isSubmitting ? translations.submitting : translations.submitButton}
                    </Button>
                </div>
            )}
        </div>
      </form>
    </section>
  );
};

export default CustomerInfoForm;