import React from 'react';
import {
  Map,
  Navigation,
  Route,
  Bot,
} from 'lucide-react';

import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ImageCarousel from '../../components/ImageCarousel';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';

import socialLinks from '../../config/socialLinks';
import tukiIcon from '../../assets/project_icons/tuki_logo.png';

const Tuki: React.FC = () => {
  const screenshots: string[] = [];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={tukiIcon}
        title="Tuki"
        subtitle="A public-transport navigation app designed to help commuters find practical routes around Pampanga."
        githubUrl={socialLinks.repositories.projectTwo}
        features={[
          {
            icon: Route,
            title: 'Multimodal Routing',
            description:
              'Combines walking, tricycle, and jeepney routes to create practical commuter journeys.',
          },
          {
            icon: Navigation,
            title: 'Navigation',
            description:
              'Provides route instructions, remaining distance, active-trip tracking, and rerouting.',
          },
          {
            icon: Map,
            title: 'Route Planning',
            description:
              'Calculates fares, travel duration, walking distance, and different route options.',
          },
          {
            icon: Bot,
            title: 'AI Assistant',
            description:
              'Understands commuter preferences such as budget, walking distance, and transport modes to avoid.',
          },
        ]}
      />

      {screenshots.length > 0 && (
        <ImageCarousel
          images={screenshots}
          projectName="Tuki"
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
            'Tuki is an Android and ASP.NET Core public-transport navigation project designed for commuters in Pampanga. It focuses on combining different transportation options such as walking, tricycles, and jeepneys into practical journeys.',
            'The system provides route planning, fare and duration estimates, boarding and alighting points, active-trip navigation, and rerouting when the current journey becomes impractical.',
            'Tuki also includes an AI assistant that helps understand what commuters need, while the backend remains responsible for determining actual routes, fares, locations, and transportation information.',
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
            'Kotlin',
            'Jetpack Compose',
            'ASP.NET Core',
            'C#',
            'SQL',
            'REST API',
            'AI / LLM',
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
            'Developed an Android commuter navigation application using Jetpack Compose.',
            'Implemented multimodal journey planning across walking, tricycle, and jeepney routes.',
            'Supports fare, travel-time, walking-distance, and route-ranking calculations.',
            'Includes active-trip navigation, route deviation detection, and rerouting.',
            'Uses an AI assistant to understand commuter preferences and convert them into structured trip constraints.',
            'Separates AI-based language understanding from deterministic transportation and routing logic.',
            'Uses real place and search services for destination and coordinate resolution.',
          ]}
        />
      </div>
    </ProjectLayout>
  );
};

export default Tuki;