import DynamicPage from '@/components/DynamicPage';

export const metadata = {
  title: 'About Us | Manipur International University',
  description: 'Learn about Manipur International University - our history, vision, mission, leadership, and commitment to academic excellence in Imphal, Manipur.',
  alternates: { canonical: 'https://miu.edu.in/about' },
  openGraph: { title: 'About MIU | Manipur International University', description: 'Discover MIU\'s history, vision, and leadership in higher education.', url: 'https://miu.edu.in/about' },
};

export default function AboutPage() {
  return <DynamicPage
    settingsKey="dp-about"
    badge="ABOUT MIU"
    title="About Manipur International University"
    subtitle="Established under the Manipur International University Act, 2018, MIU is committed to academic excellence, research, and holistic development."
    breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
    defaultSections={[
      { title: 'Our Story', content: 'Manipur International University was established under the Manipur International University Act, 2018 by the Government of Manipur. Recognized by the University Grants Commission (UGC) under Sections 2(f) and 22 of the UGC Act, 1956, MIU is committed to providing quality higher education.' },
      { title: 'Vision', content: 'To be a globally recognized university that fosters academic excellence, innovation, and research while preserving the rich cultural heritage of Manipur and Northeast India.' },
      { title: 'Mission', content: 'To provide quality education that empowers students with knowledge, skills, and values to succeed in a competitive global environment while contributing to the socio-economic development of the region.' },
    ]}
  />;
}
