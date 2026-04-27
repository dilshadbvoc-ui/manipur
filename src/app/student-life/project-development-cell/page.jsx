import GenericInfoPage from '@/components/GenericInfoPage';

export const metadata = {
  title: 'Project Development Cell | Manipur International University',
  description: 'MIU Project Development Cell fosters innovation for sustainable development through research-oriented projects.',
  keywords: 'MIU project development, innovation, sustainable development, research projects, skill development',
};

export default function ProjectDevelopmentCell() {
  const sections = [
    {
      icon: '📊',
      title: 'Fostering Innovation for Sustainable Development',
      content: 'Empowering students, researchers, and faculty to create transformative solutions for the people of Manipur and beyond through skill development and research-oriented projects from various ministries.'
    },
    {
      title: 'Project Development Director',
      content: '<strong>Dearson Pamei</strong><br/>Director, Project Development Cell<br/><br/>Leading the Project Development Cell with a vision to transform innovative ideas into impactful solutions. With extensive experience in project management, research, and sustainable development, our director guides strategic initiatives that connect academic excellence with real‑world applications for the benefit of Manipur and beyond.<br/><br/><strong>Impact Metrics:</strong><br/>• 20+ Successful Projects<br/>• ₹50L+ Funding Secured<br/>• 15+ Industry Partners<br/>• 100+ Students Mentored'
    },
    {
      title: 'Vision & Mission',
      content: '<strong>Vision:</strong> To nurture a culture of innovation and project-based learning that empowers students, researchers, and faculty to contribute transformative ideas and solutions for sustainable development of Manipur and the nation.<br/><br/><strong>Mission:</strong><br/>• Promote interdisciplinary research and project development<br/>• Provide technical and managerial support for innovative ideas<br/>• Connect with national and international organizations<br/>• Facilitate funding through government and private sectors<br/>• Contribute to India\'s innovation-driven growth agenda'
    },
    {
      title: 'Key Objectives',
      cards: [
        {
          icon: '💡',
          title: 'Innovation Ecosystem',
          content: 'Establish a strong ecosystem for innovation, incubation, and entrepreneurship to foster creative solutions'
        },
        {
          icon: '👨‍🎓',
          title: 'Faculty & Student Projects',
          content: 'Encourage faculty and student-driven projects that address real-world challenges facing Manipur and India'
        },
        {
          icon: '🤝',
          title: 'Strategic Collaboration',
          content: 'Collaborate with government agencies, industry leaders, and NGOs for impactful partnerships'
        },
        {
          icon: '📝',
          title: 'Project Management Support',
          content: 'Support proposal drafting, project management, and grant acquisition from various ministries'
        },
        {
          icon: '🎯',
          title: 'Policy Alignment',
          content: 'Ensure alignment with National Education Policy (NEP 2020) and Atmanirbhar Bharat initiatives'
        },
        {
          icon: '🛠️',
          title: 'Skill Development',
          content: 'Focus on skill development and capacity building for sustainable regional development'
        }
      ]
    },
    {
      title: 'National Innovation Foundation Collaboration',
      content: 'Working with DST, Government of India for grassroots innovation:<br/><br/>• Identifying and promoting innovations from students, faculty, and local communities<br/>• Creating platforms to document, validate, and scale up regional innovations<br/>• Engaging students in hands-on innovation challenges and competitions<br/>• Supporting development of prototypes, patents, and technology transfers<br/>• Establishing connections between innovators, policymakers, and entrepreneurs<br/>• Implementing skill development and research projects from various ministries'
    },
    {
      title: 'Opportunities for Students & Faculty',
      list: [
        'Innovation Challenges - Participate in innovation challenges and hackathons focused on solving regional and national problems',
        'Idea Incubation - Get mentorship for idea incubation and project development with expert guidance and resources',
        'Funding Support - Access funding and grant support for research and innovation projects from various government ministries',
        'Ministry Collaboration - Collaborate on projects with DST, NIF, and other national bodies for skill development initiatives',
        'Global Platform - Showcase innovations at national and international platforms to gain recognition and impact',
        'Skill Development - Participate in comprehensive skill development programs aligned with regional development needs'
      ]
    }
  ];

  return (
    <GenericInfoPage
      badge="INNOVATION & DEVELOPMENT"
      title="Project Development Cell"
      subtitle="Transforming Ideas into Impactful Solutions"
      breadcrumb={[
        { label: 'Student Life', href: '/student-life/sports' },
        { label: 'Project Development Cell' }
      ]}
      sections={sections}
      contactInfo={{
        title: 'Start Your Project Journey',
        description: 'Have a project idea or need guidance? Reach out to our Project Development Cell.',
        email: 'projects@miu.edu.in',
        phone: '+91 9319727766'
      }}
    />
  );
}
