import React from 'react';

const ResumeForm = ({ resumeData, onResumeDataChange, onExportPDF, onSaveJSON }) => {
  // Handle personal info changes
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    const updatedResumeData = {
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [name]: value
      }
    };
    onResumeDataChange(updatedResumeData);
  };

  // Handle work experience changes
  const handleWorkExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const updatedWorkExperience = [...resumeData.workExperience];
    updatedWorkExperience[index] = {
      ...updatedWorkExperience[index],
      [name]: value
    };
    
    onResumeDataChange({
      ...resumeData,
      workExperience: updatedWorkExperience
    });
  };

  // Add new work experience entry
  const addWorkExperience = () => {
    const newWorkExperience = {
      id: Date.now().toString(),
      jobTitle: '',
      company: '',
      description: '',
      startDate: '',
      endDate: ''
    };
    
    onResumeDataChange({
      ...resumeData,
      workExperience: [...resumeData.workExperience, newWorkExperience]
    });
  };

  // Remove work experience entry
  const removeWorkExperience = (index) => {
    if (resumeData.workExperience.length <= 1) return;
    
    const updatedWorkExperience = resumeData.workExperience.filter((_, i) => i !== index);
    onResumeDataChange({
      ...resumeData,
      workExperience: updatedWorkExperience
    });
  };

  // Handle education changes
  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...resumeData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value
    };
    
    onResumeDataChange({
      ...resumeData,
      education: updatedEducation
    });
  };

  // Add new education entry
  const addEducation = () => {
    const newEducation = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      graduationDate: ''
    };
    
    onResumeDataChange({
      ...resumeData,
      education: [...resumeData.education, newEducation]
    });
  };

  // Remove education entry
  const removeEducation = (index) => {
    if (resumeData.education.length <= 1) return;
    
    const updatedEducation = resumeData.education.filter((_, i) => i !== index);
    onResumeDataChange({
      ...resumeData,
      education: updatedEducation
    });
  };

  // Handle skill changes
  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(',').map(skill => skill.trim());
    onResumeDataChange({
      ...resumeData,
      skills
    });
  };

  return (
    <form className="space-y-8">
      {/* Personal Information */}
      <section className="space-y-4">
        <h3 className="text-xl font-medium border-b pb-2">Personal Information</h3>
        
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={resumeData.personalInfo.name}
              onChange={handlePersonalInfoChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">Professional Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={resumeData.personalInfo.title}
              onChange={handlePersonalInfoChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Frontend Developer"
            />
          </div>
          
          <div>
            <label htmlFor="summary" className="block text-sm font-medium mb-1">Professional Summary</label>
            <textarea
              id="summary"
              name="summary"
              value={resumeData.personalInfo.summary}
              onChange={handlePersonalInfoChange}
              rows="4"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="A brief summary of your professional background and goals"
            />
          </div>
        </div>
      </section>
      
      {/* Work Experience */}
      <section className="space-y-4">
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="text-xl font-medium">Work Experience</h3>
          <button
            type="button"
            onClick={addWorkExperience}
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>
        
        {resumeData.workExperience.map((experience, index) => (
          <div key={experience.id} className="p-4 border rounded-md space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Experience {index + 1}</h4>
              <button
                type="button"
                onClick={() => removeWorkExperience(index)}
                className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                disabled={resumeData.workExperience.length <= 1}
              >
                Remove
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`jobTitle-${index}`} className="block text-sm font-medium mb-1">Job Title</label>
                <input
                  type="text"
                  id={`jobTitle-${index}`}
                  name="jobTitle"
                  value={experience.jobTitle}
                  onChange={(e) => handleWorkExperienceChange(e, index)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Senior Developer"
                />
              </div>
              
              <div>
                <label htmlFor={`company-${index}`} className="block text-sm font-medium mb-1">Company</label>
                <input
                  type="text"
                  id={`company-${index}`}
                  name="company"
                  value={experience.company}
                  onChange={(e) => handleWorkExperienceChange(e, index)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Acme Inc."
                />
              </div>
              
              <div>
                <label htmlFor={`startDate-${index}`} className="block text-sm font-medium mb-1">Start Date</label>
                <input
                  type="month"
                  id={`startDate-${index}`}
                  name="startDate"
                  value={experience.startDate}
                  onChange={(e) => handleWorkExperienceChange(e, index)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor={`endDate-${index}`} className="block text-sm font-medium mb-1">End Date</label>
                <input
                  type="month"
                  id={`endDate-${index}`}
                  name="endDate"
                  value={experience.endDate}
                  onChange={(e) => handleWorkExperienceChange(e, index)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Present"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor={`description-${index}`} className="block text-sm font-medium mb-1">Description</label>
              <textarea
                id={`description-${index}`}
                name="description"
                value={experience.description}
                onChange={(e) => handleWorkExperienceChange(e, index)}
                rows="3"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your responsibilities and achievements"
              />
            </div>
          </div>
        ))}
      </section>
      
      {/* Education */}
      <section className="space-y-4">
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="text-xl font-medium">Education</h3>
          <button
            type="button"
            onClick={addEducation}
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>
        
        {resumeData.education.map((edu, index) => (
          <div key={edu.id} className="p-4 border rounded-md space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Education {index + 1}</h4>
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                disabled={resumeData.education.length <= 1}
              >
                Remove
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`institution-${index}`} className="block text-sm font-medium mb-1">Institution</label>
                <input
                  type="text"
                  id={`institution-${index}`}
                  name="institution"
                  value={edu.institution}
                  onChange={(e) => handleEducationChange(e, index)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="University of Technology"
                />
              </div>
              
              <div>
                <label htmlFor={`degree-${index}`} className="block text-sm font-medium mb-1">Degree</label>
                <input
                  type="text"
                  id={`degree-${index}`}
                  name="degree"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(e, index)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Bachelor of Science"
                />
              </div>
              
              <div>
                <label htmlFor={`field-${index}`} className="block text-sm font-medium mb-1">Field of Study</label>
                <input
                  type="text"
                  id={`field-${index}`}
                  name="field"
                  value={edu.field}
                  onChange={(e) => handleEducationChange(e, index)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Computer Science"
                />
              </div>
              
              <div>
                <label htmlFor={`graduationDate-${index}`} className="block text-sm font-medium mb-1">Graduation Date</label>
                <input
                  type="month"
                  id={`graduationDate-${index}`}
                  name="graduationDate"
                  value={edu.graduationDate}
                  onChange={(e) => handleEducationChange(e, index)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        ))}
      </section>
      
      {/* Skills */}
      <section className="space-y-4">
        <h3 className="text-xl font-medium border-b pb-2">Skills</h3>
        <div>
          <label htmlFor="skills" className="block text-sm font-medium mb-1">Skills (comma-separated)</label>
          <textarea
            id="skills"
            value={resumeData.skills.join(', ')}
            onChange={handleSkillsChange}
            rows="3"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="JavaScript, React, CSS, HTML, UI/UX Design"
          />
        </div>
      </section>
      
      {/* Export Options */}
      <section className="space-y-4">
        <h3 className="text-xl font-medium border-b pb-2">Export Options</h3>
        <div className="flex space-x-4">
          <button
            type="button"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={onExportPDF}
          >
            Export as PDF
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={onSaveJSON}
          >
            Save as JSON
          </button>
        </div>
      </section>
    </form>
  );
};

export default ResumeForm;