import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import CISCO_intro_to_cybersecurity from '../../assets/badges/CISCO_intro_to_cybersecurity.png';
import CISCO_intro_to_networks from '../../assets/badges/CISCO_intro_to_networks.png';
import certiIcon from '../../assets/badges/certi_icon.png';

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const badges = [
    {
      id: 'intro-to-cybersecurity',
      image: CISCO_intro_to_cybersecurity,
      alt: 'Cisco Intro to Cybersecurity Badge',
      title: 'Intro to Cybersecurity',
      subtitle: 'Cisco Networking Academy',
      credentialUrl: 'https://www.credly.com/badges/1c07bfa2-9e66-45a2-b074-ba8af67384dd',
      status: 'completed'
    },
    {
      id: 'intro-to-networks',
      image: CISCO_intro_to_networks,
      alt: 'Cisco Intro to Networks Badge',
      title: 'Intro to Networks',
      subtitle: 'Cisco Networking Academy',
      credentialUrl: 'https://www.credly.com/badges/fbd431d9-9d95-4966-b146-fe03dada08ea',
      status: 'completed'
    }
  ];

  const credentials = [
    {
      id: 'cert-intro-to-networks',
      image: certiIcon,
      alt: 'Certification Icon',
      title: 'Introduciton to Networks',
      subtitle: 'CCNAv7',
      issuer: 'CISCO Networking Academy',
      issued: 'Jan 2025',
      expires: '',
      credentialId: '200c599f-b943-48e9-95b6-f23639fa4a5c',
      credentialUrl: 'src/assets/badges/CERT_intro_to_networks.pdf',
      status: 'completed'
    },
    {
      id: 'cert-techno',
      image: certiIcon,
      alt: 'Certification Icon',
      title: 'Discovering Entrepeneurship',
      subtitle: 'Technopreneurship',
      issuer: 'CISCO Networking Academy',
      issued: 'Dec 2024',
      expires: '',
      credentialId: 'eff7386b-936d-48db-acaf-959957bfd2fe',
      credentialUrl: 'src/assets/badges/CERT_techno.pdf',
      status: 'completed'
    },
    // {
    //   id: 'citi-gcp',
    //   image: certiIcon,
    //   alt: 'Certification Icon',
    //   title: 'Investigational Drugs and Medical Devices',
    //   subtitle: 'Good Clinical Practice',
    //   issuer: 'CITI Program',
    //   issued: 'Nov 2025',
    //   expires: 'Nov 2028',
    //   credentialId: '00000000',
    //   credentialUrl: 'https://www.citiprogram.org/verify/?your-credential-id',
    //   status: 'completed'
    // }
  ];

  return (
    <section id="certifications" className="py-8 relative" style={{
      background: themeColors.background.sections?.certifications || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Certifications & Credentials</h2>

        <div className="max-w-6xl mx-auto">
          {/* AWS Certifications */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {badges.map((badge) => {
              const BadgeComponent = () => (
                <div className="flex flex-col items-center group">
                  <div className="mb-4">
                    <img
                      src={badge.image}
                      alt={badge.alt}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="160"
                      height="160"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium mb-2" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
                    {badge.title}
                  </h3>
                  <p className="text-center text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
                    {badge.subtitle || (badge.status === 'in-progress' ? 'In Progress!' : '')}
                  </p>
                </div>
              );

              return badge.credentialUrl ? (
                <a
                  key={badge.id}
                  href={badge.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
                  style={{ outline: 'none' }}
                  onFocus={(e) => e.currentTarget.blur()}
                  aria-label={`View ${badge.title} credential`}
                >
                  <BadgeComponent />
                </a>
              ) : (
                <div key={badge.id} className="block">
                  <BadgeComponent />
                </div>
              );
            })}
          </div>

          {/* CITI Program Certifications */}
          <div className="flex flex-wrap justify-center gap-8">
            {credentials.map((credential) => {
              const BadgeComponent = () => (
                <div className="flex flex-col items-center group">
                  <div className="mb-4">
                    <img
                      src={credential.image}
                      alt={credential.alt}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="160"
                      height="160"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium mb-2" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
                    {credential.title}
                  </h3>
                  <p className="text-center text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
                    {credential.subtitle || (credential.status === 'in-progress' ? 'In Progress!' : '')}
                  </p>
                </div>
              );

              return credential.credentialUrl ? (
                <a
                  key={credential.id}
                  href={credential.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
                  style={{ outline: 'none' }}
                  onFocus={(e) => e.currentTarget.blur()}
                  aria-label={`View ${credential.title} credential`}
                >
                  <BadgeComponent />
                </a>
              ) : (
                <div key={credential.id} className="block">
                  <BadgeComponent />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Bottom gradient overlay for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Certifications;