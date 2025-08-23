import React, { useState, useEffect } from 'react';
import { Upload, User, Mail, Phone, MapPin, FileText, CheckCircle, ArrowRight, Code, Laptop, Building2, Calendar } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  experience: string;
  cv: File | null;
}

interface Opportunity {
  id: string;
  title: string;
  company: string;
  city: string;
  duration: string;
  type: string;
  description: string;
}

const opportunities: Opportunity[] = [
  {
    id: '1',
    title: 'Frontend Development Intern',
    company: 'TechStart Madrid',
    city: 'Madrid',
    duration: '6 months',
    type: 'React/JavaScript',
    description: 'Work on modern web applications using React, TypeScript, and modern CSS frameworks.'
  },
  {
    id: '2',
    title: 'Backend Developer Intern',
    company: 'InnovateLab',
    city: 'Barcelona',
    duration: '4-6 months',
    type: 'Node.js/Python',
    description: 'Develop APIs and microservices using Node.js, Python, and cloud technologies.'
  },
  {
    id: '3',
    title: 'Mobile App Development Intern',
    company: 'AppSolutions',
    city: 'Valencia',
    duration: '5 months',
    type: 'React Native/Flutter',
    description: 'Create cross-platform mobile applications for iOS and Android platforms.'
  },
  {
    id: '4',
    title: 'Data Science Intern',
    company: 'DataTech Sevilla',
    city: 'Sevilla',
    duration: '6 months',
    type: 'Python/ML',
    description: 'Analyze data, build machine learning models, and create data visualizations.'
  },
  {
    id: '5',
    title: 'DevOps Engineering Intern',
    company: 'CloudFirst',
    city: 'Bilbao',
    duration: '4 months',
    type: 'AWS/Docker',
    description: 'Learn cloud infrastructure, CI/CD pipelines, and containerization technologies.'
  },
  {
    id: '6',
    title: 'Cybersecurity Intern',
    company: 'SecureNet',
    city: 'Zaragoza',
    duration: '6 months',
    type: 'Security/Networking',
    description: 'Assist in security audits, penetration testing, and security system implementation.'
  }
];

function App() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    experience: '',
    cv: null
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      cv: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleContinue = () => {
    // Open the CPA offer page in a new window/tab
    window.open('https://singingfiles.com/show.php?l=0&u=2392934&id=70890', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center transform transition-all duration-500 scale-100">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Submit Success!</h2>
            <p className="text-gray-600">Your application has been submitted successfully.</p>
          </div>
          
          <button
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
          >
            Continue to apply for more opportunities like this entrer you number
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* IT Opportunities Section */}
        <div className="bg-white rounded-2xl shadow-xl mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <Code className="w-6 h-6" />
              IT Internship Opportunities in Spain
            </h2>
            <p className="text-green-100">Exciting opportunities for IT students across Spanish cities</p>
          </div>
          
          <div className="p-6">
            <div className="grid gap-4">
              {opportunities.map((opportunity) => (
                <div key={opportunity.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">{opportunity.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {opportunity.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {opportunity.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {opportunity.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Laptop className="w-4 h-4" />
                          {opportunity.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{opportunity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800 text-center">
                <strong>Apply below to access these opportunities and many more!</strong> Our platform connects you with top tech companies across Spain.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">Join Our Team</h1>
            <p className="text-blue-100">Apply for exciting career opportunities</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                Contact Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Street address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="City name"
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Professional Information
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={(e) => handleInputChange(e as any)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="2-3">2-3 years</option>
                  <option value="4-5">4-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
            </div>

            {/* CV Upload */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Upload className="w-5 h-5 text-blue-600" />
                Upload CV/Resume
              </h3>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors duration-200">
                <input
                  type="file"
                  id="cv-upload"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
                <label
                  htmlFor="cv-upload"
                  className="cursor-pointer flex flex-col items-center gap-2"
                >
                  <Upload className="w-8 h-8 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {formData.cv ? formData.cv.name : 'Click to upload your CV/Resume'}
                  </span>
                  <span className="text-xs text-gray-400">
                    PDF, DOC, DOCX (Max 5MB)
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;