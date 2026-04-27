import GenericInfoPage from '@/components/GenericInfoPage';

export const metadata = {
  title: 'Equal Opportunity Cell | Manipur International University',
  description: 'MIU Equal Opportunity Cell ensures inclusive, accessible, and discrimination-free campus environment.',
  keywords: 'MIU EOC, equal opportunity, diversity, inclusion, accessibility',
};

export default function EqualOpportunityCell() {
  const sections = [
    {
      icon: '🤝',
      title: 'Equal Opportunity Cell (EOC)',
      content: 'At Manipur International University (MIU), we believe in the transformative power of diversity and equal opportunity. Our EOC ensures an inclusive, accessible, and discrimination-free campus where everyone is empowered to reach their fullest potential.<br/><br/>We actively support differently-abled persons, economically disadvantaged groups, minorities, and underrepresented communities by providing resources, guidance, and opportunities to thrive academically and professionally.'
    },
    {
      title: 'Core Values',
      cards: [
        {
          icon: '♿',
          title: 'Accessibility',
          content: 'Inclusive infrastructure and support for differently-abled individuals'
        },
        {
          icon: '🤲',
          title: 'Equal Support',
          content: 'Academic and financial guidance for underrepresented communities'
        },
        {
          icon: '🌈',
          title: 'Diversity',
          content: 'A campus culture celebrating multicultural and inclusive values'
        },
        {
          icon: '⚖️',
          title: 'Fair Opportunity',
          content: 'Equal access to education, growth, and leadership opportunities'
        }
      ]
    },
    {
      title: 'Our Commitment to Inclusive Education',
      cards: [
        {
          icon: '📚',
          title: 'Inclusive Learning',
          content: 'Ensuring equitable access to high-quality learning resources, accessible classrooms, adaptive tools, and inclusive curriculum design for all students'
        },
        {
          icon: '🚫',
          title: 'Zero Discrimination',
          content: 'Maintaining a fair, transparent university culture free from bias through active monitoring and sensitization programs that foster mutual respect'
        },
        {
          icon: '💪',
          title: 'Community Empowerment',
          content: 'Facilitating targeted interventions including mentorship programs, need-based scholarships, career guidance, and skill-building workshops'
        },
        {
          icon: '🛡️',
          title: 'Accessibility Support',
          content: 'Providing accessible infrastructure, assistive technologies, personalized accommodations, and dedicated support for differently-abled students'
        },
        {
          icon: '🏛️',
          title: 'Safe Campus Environment',
          content: 'Creating a secure environment through confidential grievance redressal mechanisms, awareness campaigns on anti-harassment policies, and collaboration'
        }
      ]
    },
    {
      title: 'Policies & Initiatives',
      list: [
        'Scholarships & Financial Assistance - Financial aid programs tailored for students from disadvantaged and marginalized backgrounds',
        'Grievance Redressal Mechanism - A dedicated, confidential platform to address complaints related to discrimination, exclusion, or harassment',
        'Accessible Campus & Infrastructure - Inclusive physical and digital infrastructure such as ramps, adaptive seating, and assistive technologies',
        'Career Guidance & Skill Development - Specialized training and mentorship initiatives to enhance employability and confidence',
        'Awareness & Sensitization Programs - Regular workshops and campaigns promoting gender equality, disability rights, and cultural sensitivity'
      ]
    },
    {
      title: 'Who Can Approach the EOC',
      content: '<strong>SC/ST/OBC Students:</strong> Students from Scheduled Castes, Scheduled Tribes, and Other Backward Classes seeking support or redressal<br/><br/><strong>Persons with Disabilities (PwD):</strong> Students with physical, sensory, cognitive, or learning disabilities requiring academic or infrastructural assistance<br/><br/><strong>Women Facing Gender-Based Challenges:</strong> Female students or staff encountering barriers in education, career advancement, or campus safety<br/><br/><strong>Individuals Facing Discrimination:</strong> Anyone experiencing bias or exclusion based on religion, ethnicity, language, or socio-cultural background'
    }
  ];

  return (
    <GenericInfoPage
      badge="EQUITY & INCLUSION"
      title="Equal Opportunity Cell"
      subtitle="Empowering Diversity, Ensuring Equality"
      breadcrumb={[
        { label: 'Student Life', href: '/student-life/sports' },
        { label: 'Equal Opportunity Cell' }
      ]}
      sections={sections}
      contactInfo={{
        title: 'Need Support?',
        description: 'Contact us for any concerns related to equal opportunity, discrimination, or accessibility. All communications are confidential.',
        email: 'info@miu.edu.in',
        phone: '+91 9319727766'
      }}
    />
  );
}
