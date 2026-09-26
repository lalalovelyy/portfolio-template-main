// Social Links Configuration - uses environment variables only
export const socialLinks = {
  // Main social profiles
  github: import.meta.env.VITE_GITHUB_URL,
  linkedin: import.meta.env.VITE_LINKEDIN_URL,
  email: import.meta.env.VITE_EMAIL,
  
  // GitHub repository URLs
  repositories: {
    projectOne: import.meta.env.VITE_GITHUB_PROJECT1_URL,
    projectTwo: import.meta.env.VITE_GITHUB_PROJECT2_URL,
    projectThree: import.meta.env.VITE_GITHUB_PROJECT3_URL,
    projectFour: import.meta.env.VITE_GITHUB_PROJECT4_URL,
  },
  
  // Formatted display names (extracted from environment variables)
  display: {
    github: 'https://github.com/lalalovelyy'.replace('https://', ''),
    linkedin: 'https://www.linkedin.com/in/lovely-irene-cunanan-0b883a392/'.replace('https://', ''),
    email: 'lovelysocials.26@gmail.com',
  }
};

export default socialLinks;
