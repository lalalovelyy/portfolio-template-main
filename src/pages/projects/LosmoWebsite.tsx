import React from 'react';
import {
  CalendarCheck,
  FileText,
  Layout,
  Search,
} from 'lucide-react';

import losmoIcon from '../../assets/project_icons/losmo.png';
import socialLinks from '../../config/socialLinks';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ImageCarousel from '../../components/ImageCarousel';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';

const LosmoWebsite: React.FC = () => {
  const screenshots: string[] = [];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={losmoIcon}
        title="LOSMO Website"
        subtitle="A fully functional website for LOSMO with an online reservation system."
        githubUrl={socialLinks.repositories.projectThree}
        features={[
          {
            icon: CalendarCheck,
            title: 'Online Reservations',
            description:
              'Allows customers to make reservations through the website.',
          },
          {
            icon: Layout,
            title: 'Responsive Website',
            description:
              'Designed to provide a usable experience across different screen sizes.',
          },
          {
            icon: FileText,
            title: 'Business Information',
            description:
              'Presents important information about the bar and its services.',
          },
          {
            icon: Search,
            title: 'Research & Content',
            description:
              'Research and content were prepared and organized for the website.',
          },
        ]}
      />

      {screenshots.length > 0 && (
        <ImageCarousel
          images={screenshots}
          projectName="LOSMO Website"
        />
      )}

      <div
        className="rounded-lg shadow-lg p-8 mb-8"
        style={{ backgroundColor: 'var(--card-background)' }}
      >
        <h2 className="text-2xl font-semibold mb-4">
          Project Overview
        </h2>

        <ProjectOverview
          paragraphs={[
            'LOSMO Website is a fully functional website developed for a real bar business. The website provides customers with important business information and an online reservation system.',
            'As the Research & Content Lead, I was responsible for researching and organizing the information presented on the website. I also helped ensure that the content was clear, relevant, and appropriate for the target customers.',
            'The project gave our team experience in developing a website for an actual business while considering both the technical requirements and the information customers need when visiting the site.',
          ]}
        />
      </div>

      <div
        className="rounded-lg shadow-lg p-8 mb-8"
        style={{ backgroundColor: 'var(--card-background)' }}
      >
        <h2 className="text-2xl font-semibold mb-4">
          Technology Stack
        </h2>

        <TechStack
          technologies={[
            'HTML',
            'CSS',
            'JavaScript',
          ]}
        />
      </div>

      <div
        className="rounded-lg shadow-lg p-8"
        style={{ backgroundColor: 'var(--card-background)' }}
      >
        <h2 className="text-2xl font-semibold mb-4">
          Technical Highlights
        </h2>

        <TechnicalHighlights
          highlights={[
            'Developed as a functional website for a real bar business.',
            'Implemented an online reservation form for customers.',
            'Organized and presented essential business information.',
            'Conducted research and prepared website content as the Research & Content Lead.',
            'Worked with the team to align the website content with the needs of the business and its customers.',
          ]}
        />
      </div>
    </ProjectLayout>
  );
};

export default LosmoWebsite;