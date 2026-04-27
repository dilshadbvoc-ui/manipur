import GenericInfoPage from '@/components/GenericInfoPage';

export const metadata = {
  title: 'Research & Development Cell | Manipur International University',
  description: 'MIU Research & Development Cell promotes research culture and innovation aligned with NEP 2020.',
  keywords: 'MIU research, R&D cell, research programs, innovation, PhD programs, NEP 2020',
};

export default function ResearchDevelopmentCell() {
  const sections = [
    {
      icon: '🔬',
      title: 'National Education Policy 2020',
      content: 'The National Education Policy 2020 provides the roadmap to boost quality research in higher education. As research serves as the backbone in improving the learning offered by Higher Education Institutions, our nation is on the front gear to tackle its societal challenges with robust higher education that focuses on research and innovation along with technology development.'
    },
    {
      title: 'Research & Innovation Focus',
      content: 'Established as a research oriented institution with a strong ambition to augment the research turf that compliments and provide the required thrust to the numerous scholars who lack logistics support. Our vision is well aligned with the idea postulated by NEP 2020.'
    },
    {
      title: 'Our Vision',
      content: '<strong>Research Excellence:</strong> To put in place a robust mechanism for developing and strengthening the research ecosystem within HEIs, aligned with the provisions of NEP-2020.'
    },
    {
      title: 'Our Mission - Strategic Goals',
      list: [
        'To create a conducive environment for enhanced research productivity',
        'To encourage collaboration across industry, government, community-based organizations, and agencies at local, national and international levels',
        'To facilitate greater access to research through mobilization of resources and funding'
      ]
    },
    {
      title: 'Research Committee',
      content: 'The overall progression of research works falls strictly under the purview of <strong>FRC (Faculty Research Committee)</strong> headed by the Chairman who also serves as the Pro VC of the University. Other committee members are represented by the Deans of respective schools of the University.'
    },
    {
      title: 'Research Programs',
      content: 'The main research program is formally open for:<br/><br/><strong>Post-doctoral program:</strong> Advanced research fellowship<br/><strong>Doctoral program:</strong> PhD in multiple disciplines<br/><strong>D.Litt.:</strong> Doctor of Literature (Duration: 2-3 Years, UGC Approved)'
    },
    {
      title: 'PhD Research Disciplines',
      content: 'Our comprehensive PhD programs span across multiple disciplines, offering extensive research opportunities in both scientific and humanities fields.<br/><br/><strong>Group A - Sciences & Technology</strong><br/><strong>Group B - Arts, Humanities & Social Sciences</strong>'
    }
  ];

  return (
    <GenericInfoPage
      badge="RESEARCH & INNOVATION"
      title="Research & Development Cell"
      subtitle="Advancing Knowledge Through Research Excellence"
      breadcrumb={[
        { label: 'Student Life', href: '/student-life/sports' },
        { label: 'Research & Development Cell' }
      ]}
      sections={sections}
      contactInfo={{
        title: 'Research Inquiries',
        description: 'For research-related queries, collaboration opportunities, or funding information.',
        email: 'research@miu.edu.in',
        phone: '+91 9319727766'
      }}
    />
  );
}
