
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = (): boolean => {
    const newErrors = { name: '', email: '', subject: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email Address is invalid.';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
        newErrors.message = 'Message must be at least 10 characters long.';
        isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted:', formData);
      setSubmitted(true);
      setErrors({ name: '', email: '', subject: '', message: '' });
      // Reset form after a few seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-dark">Let's Build Together</h2>
          <p className="mt-4 text-lg text-brand-text max-w-2xl mx-auto">Have a project in mind or want to learn more about our services? Reach out to us.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-brand-light p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Get in Touch</h3>
            <div className="space-y-4 text-brand-text text-lg">
              <p><strong>Address:</strong> 123 Construction Ave, Sarjapur, Bangalore, India</p>
              <p><strong>Email:</strong> contact@everbuild.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
            </div>
          </div>
          <div className="bg-brand-light p-8 rounded-lg shadow-md">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <h3 className="text-2xl font-bold text-brand-primary">Thank You!</h3>
                <p className="text-brand-text mt-2">Your message has been sent. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-text">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-brand-primary sm:text-sm ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-brand-primary'}`} 
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby="name-error"
                  />
                  {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-text">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-brand-primary sm:text-sm ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-brand-primary'}`}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby="email-error"
                  />
                  {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                 <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-brand-text">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    id="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-brand-primary sm:text-sm ${errors.subject ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-brand-primary'}`}
                    aria-invalid={errors.subject ? "true" : "false"}
                    aria-describedby="subject-error"
                  />
                  {errors.subject && <p id="subject-error" className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-text">Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={4} 
                    value={formData.message} 
                    onChange={handleChange} 
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-brand-primary sm:text-sm ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-brand-primary'}`}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby="message-error"
                  ></textarea>
                  {errors.message && <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-brand-dark bg-brand-secondary hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary transition duration-300">
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
