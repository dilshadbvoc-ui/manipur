import AdmissionRulesPage from '@/components/AdmissionRulesPage';
import { createMetadata } from '@/lib/metadata';
export const metadata = createMetadata({ title: 'Rules for Admission', description: 'Admission rules and eligibility criteria for all programs at Manipur International University.', path: '/admissions/rules' });

export default function Page() {
  return <AdmissionRulesPage />;
}
