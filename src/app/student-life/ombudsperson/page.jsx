import GenericInfoPage from '@/components/GenericInfoPage';

export const metadata = {
  title: 'Ombudsperson | Manipur International University',
  description: 'MIU Ombudsperson for Students\' Grievances Redressal Committee under UGC Regulations 2023.',
  keywords: 'MIU ombudsperson, student grievances, SGRC, UGC regulations, grievance redressal',
};

export default function Ombudsperson() {
  const sections = [
    {
      icon: '⚖️',
      title: 'Ombudsperson for Students\' Grievances',
      content: '<strong>Manipur International University</strong><br/>Authority: UGC Regulations 2023<br/><br/><strong>Notification No:</strong> MIU/DSW/CGRS-1/25/<br/><strong>Date:</strong> 26/03/2025<br/><strong>Tenure:</strong> 3 years'
    },
    {
      title: 'Appointed Ombudsperson',
      content: '<strong>T. Umabati Devi</strong><br/><br/><strong>Former Position:</strong> Retired Associate Professor & Former Head<br/><strong>Department:</strong> Mathematics<br/><strong>Institution:</strong> Dhanamanjuri College of Arts, Imphal West, Manipur<br/><br/><strong>Role:</strong> Ombudsperson – Students\' Grievances Redressal Committee (SGRC)<br/><strong>Appointment:</strong> Gazette Appointed under UGC (Redressal of Grievances) Regulations, 2023'
    },
    {
      title: 'UGC Guidelines for Ombudsperson',
      cards: [
        {
          icon: '🔒',
          title: 'Independence & Impartiality',
          content: 'The Ombudsperson shall function independently and impartially, ensuring fair and unbiased resolution of student grievances without any external influence'
        },
        {
          icon: '📋',
          title: 'Scope of Authority',
          content: 'Handle complaints related to academic, administrative, financial, and other student-related matters excluding those under legal proceedings or disciplinary actions'
        },
        {
          icon: '🤐',
          title: 'Confidentiality',
          content: 'Maintain strict confidentiality of all complaints, proceedings, and personal information of students throughout the grievance redressal process'
        },
        {
          icon: '⏱️',
          title: 'Time-bound Resolution',
          content: 'Ensure timely resolution of grievances within prescribed time limits – acknowledgment within 7 days and resolution within 30-45 days of receipt'
        },
        {
          icon: '📞',
          title: 'Accessibility',
          content: 'Be accessible to all students through multiple channels including in-person meetings, phone calls, emails, and online grievance portals'
        },
        {
          icon: '📊',
          title: 'Documentation & Reporting',
          content: 'Maintain proper records of all complaints received, actions taken, and submit periodic reports to the Vice Chancellor and UGC as required'
        },
        {
          icon: '🤝',
          title: 'Mediation & Conciliation',
          content: 'Promote amicable settlement through mediation and conciliation between students and university authorities before formal proceedings'
        },
        {
          icon: '💡',
          title: 'Recommendations',
          content: 'Provide appropriate recommendations to the university administration for systemic improvements and prevention of recurring issues'
        }
      ]
    }
  ];

  return (
    <GenericInfoPage
      badge="STUDENT WELFARE"
      title="Ombudsperson"
      subtitle="Students' Grievances Redressal Committee"
      breadcrumb={[
        { label: 'Student Life', href: '/student-life/sports' },
        { label: 'Ombudsperson' }
      ]}
      sections={sections}
      contactInfo={{
        title: 'Contact Ombudsperson',
        description: 'For student grievances and complaints under UGC Regulations 2023.',
        email: 'ombudsperson@miu.edu.in',
        phone: '+91 9319727766'
      }}
    />
  );
}
