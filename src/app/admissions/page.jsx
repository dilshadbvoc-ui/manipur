import DynamicPage from '@/components/DynamicPage';

export const metadata = {
  title: 'Admissions 2026 | Manipur International University',
  description: 'Apply for admissions at MIU Imphal. Explore undergraduate, postgraduate & doctoral programs. UGC recognized university. Check eligibility, fee structure & admission process.',
  keywords: 'MIU admissions, Manipur university admissions 2026, MIU Imphal admission, engineering admission Manipur, MBA admission Imphal',
  alternates: { canonical: 'https://miu.edu.in/admissions' },
  openGraph: { title: 'Admissions 2026 | MIU Imphal', description: 'Apply now for admissions at Manipur International University. Multiple programs available.', url: 'https://miu.edu.in/admissions' },
};

export default function AdmissionsPage() {
  return <DynamicPage
    settingsKey="page-admissions"
    defaultTitle="Admissions 2026"
    defaultSubtitle="Join Manipur International University and transform your future with quality education."
    breadcrumb={[{ label: 'Admissions' }]}
  />;
}
