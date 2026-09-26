import React from 'react';
import {
  Utensils,
  Calculator,
  ShoppingCart,
  WifiOff,
} from 'lucide-react';

import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ImageCarousel from '../../components/ImageCarousel';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';

import socialLinks from '../../config/socialLinks';
import kainIcon from '../../assets/project_icons/kain.png';

const Kain: React.FC = () => {
  const screenshots: string[] = [];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={kainIcon}
        title="Kain"
        subtitle="A smart meal planning PWA that finds nutritious meal plans within a family's budget."
        githubUrl={socialLinks.repositories.projectOne}
        features={[
          {
            icon: Calculator,
            title: 'Budget-Based Planning',
            description:
              'Creates meal plans based on a family’s food budget and household size.',
          },
          {
            icon: Utensils,
            title: 'Nutrition Optimization',
            description:
              'Finds a nutritious meal plan that fits within the available budget.',
          },
          {
            icon: ShoppingCart,
            title: 'Shopping List',
            description:
              'Generates an exact shopping list based on the selected meal plan.',
          },
          {
            icon: WifiOff,
            title: 'Offline PWA',
            description:
              'Works offline after the initial load without requiring a server connection.',
          },
        ]}
      />

      {screenshots.length > 0 && (
        <ImageCarousel
          images={screenshots}
          projectName="Kain"
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
            'Kain is a browser-based Progressive Web App designed to help Filipino families plan nutritious meals while staying within a limited food budget. Users enter their budget and household size, and the system generates a meal plan based on available recipes, ingredient prices, and nutritional requirements.',
            'The application combines food prices, recipe information, and nutrition data to determine a practical meal plan. It also provides a shopping list and nutrition coverage chart to help users understand what their selected plan provides.',
            'Kain was developed as an Enactus Philippines 2026 Early-Stage Project. The application was designed to work with limited or unreliable internet access, making the offline functionality an important part of the project.',
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
            'JavaScript',
            'Tailwind CSS',
            'PWA',
            'Chart.js',
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
            'Developed as an offline-capable Progressive Web App.',
            'Uses a bounded-knapsack dynamic programming algorithm to optimize meal selection.',
            'Calculates nutrition coverage based on daily nutritional targets.',
            'Generates a consolidated shopping list from the selected meal plan.',
            'Uses static JSON data for recipes, ingredients, prices, and nutrition information.',
            'Uses a service worker and Web App Manifest to support offline functionality.',
            'Includes nutrition coverage visualizations using Chart.js.',
            'Designed without a backend or server dependency for the core calculation flow.',
          ]}
        />
      </div>
    </ProjectLayout>
  );
};

export default Kain;