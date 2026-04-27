'use client';
import DynamicPage from '@/components/DynamicPage';
export default function Page() {
  return <DynamicPage
    settingsKey="dp-governance"
    badge="ABOUT US" title="Governance"
    subtitle="MIU is governed by a robust framework ensuring transparency, accountability, and academic excellence."
    breadcrumb={[{label:'Home',href:'/'},{label:'About Us',href:'/about'},{label:'Governance'}]}
    defaultSections={[
      { title: 'Governing Body', content: 'The Governing Body is the apex decision-making authority of Manipur International University. It oversees the strategic direction, financial management, and overall governance of the university, ensuring compliance with UGC regulations and state government guidelines.' },
      { title: 'Academic Council', content: 'The Academic Council is responsible for maintaining academic standards, approving curricula, and overseeing examination systems. It comprises senior faculty, external experts, and student representatives working together to uphold educational excellence.' },
      { title: 'IQAC — Internal Quality Assurance Cell', content: 'The IQAC at MIU is dedicated to developing a quality culture within the institution. It coordinates quality-related activities, prepares Annual Quality Assurance Reports (AQAR), and ensures continuous improvement in teaching, research, and administration.' },
      { title: 'Finance Committee', content: 'The Finance Committee oversees the financial health of the university, approves budgets, and ensures prudent financial management in accordance with regulatory requirements.' },
    ]}
  />;
}
