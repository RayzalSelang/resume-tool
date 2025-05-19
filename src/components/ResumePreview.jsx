import React, { forwardRef } from 'react';

const ResumePreview = forwardRef(({ resumeData, theme, darkMode }, ref) => {
  // Function to get theme-specific styles
  const getThemeStyles = () => {
    const baseStyles = {
      container: 'rounded-lg shadow-lg overflow-hidden',
      header: 'p-6',
      section: 'p-6',
      title: 'font-bold text-2xl mb-1',
      subtitle: 'text-lg mb-4',
      sectionTitle: 'font-bold text-lg border-b pb-2 mb-4',
      companyName: 'font-semibold',
      dates: 'text-sm',
      description: 'mt-2',
      skillTag: 'inline-block mr-2 mb-2 px-3 py-1 rounded text-sm'
    };
    
    // Theme-specific styles
    const themeStyles = {
      classic: {
        container: `${baseStyles.container} ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`,
        header: `${baseStyles.header} ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`,
        section: baseStyles.section,
        title: `${baseStyles.title} ${darkMode ? 'text-white' : 'text-gray-900'}`,
        subtitle: `${baseStyles.subtitle} ${darkMode ? 'text-gray-300' : 'text-gray-600'}`,
        sectionTitle: `${baseStyles.sectionTitle} ${darkMode ? 'border-gray-600' : 'border-gray-300'}`,
        companyName: baseStyles.companyName,
        dates: `${baseStyles.dates} ${darkMode ? 'text-gray-400' : 'text-gray-500'}`,
        description: baseStyles.description,
        skillTag: `${baseStyles.skillTag} ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200'}`
      },
      modern: {
        container: `${baseStyles.container} ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`,
        header: `${baseStyles.header} ${darkMode ? 'bg-blue-800' : 'bg-blue-600'} text-white`,
        section: baseStyles.section,
        title: `${baseStyles.title} ${darkMode ? 'text-white' : 'text-gray-900'}`,
        subtitle: `${baseStyles.subtitle} ${darkMode ? 'text-gray-300' : 'text-gray-600'}`,
        sectionTitle: `${baseStyles.sectionTitle} ${darkMode ? 'text-blue-300 border-blue-700' : 'text-blue-600 border-blue-300'}`,
        companyName: baseStyles.companyName,
        dates: `${baseStyles.dates} ${darkMode ? 'text-gray-400' : 'text-gray-500'}`,
        description: baseStyles.description,
        skillTag: `${baseStyles.skillTag} ${darkMode ? 'bg-blue-800 text-blue-200' : 'bg-blue-100 text-blue-700'}`
      },
      creative: {
        container: `${baseStyles.container} ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} border-t-4 ${darkMode ? 'border-purple-500' : 'border-purple-600'}`,
        header: `${baseStyles.header} ${darkMode ? 'bg-gray-700' : 'bg-white'}`,
        section: baseStyles.section,
        title: `${baseStyles.title} ${darkMode ? 'text-purple-300' : 'text-purple-600'}`,
        subtitle: `${baseStyles.subtitle} ${darkMode ? 'text-gray-300' : 'text-gray-600'}`,
        sectionTitle: `${baseStyles.sectionTitle} ${darkMode ? 'text-purple-300 border-purple-700' : 'text-purple-600 border-purple-300'}`,
        companyName: `${baseStyles.companyName} ${darkMode ? 'text-purple-300' : 'text-purple-600'}`,
        dates: `${baseStyles.dates} ${darkMode ? 'text-gray-400' : 'text-gray-500'}`,
        description: baseStyles.description,
        skillTag: `${baseStyles.skillTag} ${darkMode ? 'bg-purple-800 text-purple-200' : 'bg-purple-100 text-purple-700'}`
      }
    };
    
    return themeStyles[theme] || themeStyles.classic;
  };
  
  const styles = getThemeStyles();
  
  return (
    <div className={styles.container} ref={ref}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>{resumeData.personalInfo.name || 'Your Name'}</h1>
        <h2 className={styles.subtitle}>{resumeData.personalInfo.title || 'Professional Title'}</h2>
        <p>{resumeData.personalInfo.summary || 'Professional summary will appear here.'}</p>
      </header>
      
      {/* Work Experience */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Work Experience</h3>
        
        {resumeData.workExperience.length > 0 ? (
          <div className="space-y-6">
            {resumeData.workExperience.map((experience) => (
              <div key={experience.id} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className={styles.companyName}>{experience.jobTitle || 'Job Title'}</h4>
                    <p>{experience.company || 'Company Name'}</p>
                  </div>
                  <span className={styles.dates}>
                    {experience.startDate ? new Date(experience.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Start Date'} - 
                    {experience.endDate ? new Date(experience.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Present'}
                  </span>
                </div>
                <p className={styles.description}>{experience.description || 'Job description will appear here.'}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No work experience added yet.</p>
        )}
      </section>
      
      {/* Education */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Education</h3>
        
        {resumeData.education.length > 0 ? (
          <div className="space-y-6">
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className={styles.companyName}>{edu.institution || 'Institution Name'}</h4>
                    <p>{edu.degree || 'Degree'}{edu.field ? ` in ${edu.field}` : ''}</p>
                  </div>
                  <span className={styles.dates}>
                    {edu.graduationDate ? new Date(edu.graduationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Graduation Date'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No education added yet.</p>
        )}
      </section>
      
      {/* Skills */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Skills</h3>
        
        <div className="mt-4">
          {resumeData.skills.length > 0 ? (
            resumeData.skills.map((skill, index) => (
              <span key={index} className={styles.skillTag}>
                {skill}
              </span>
            ))
          ) : (
            <p>No skills added yet.</p>
          )}
        </div>
      </section>
    </div>
  );
});

ResumePreview.displayName = 'ResumePreview';

export default ResumePreview;