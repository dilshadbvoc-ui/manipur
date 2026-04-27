import FeeStructurePage from '@/components/FeeStructurePage';
import { createMetadata } from '@/lib/metadata';
export const metadata = createMetadata({ title: 'Fee Structure', description: 'View complete fee structure for all programs at Manipur International University. Transparent and affordable fees for UG, PG and doctoral programs.', path: '/admissions/fee-structure' });

export default function Page() {
  return <FeeStructurePage />;
}
