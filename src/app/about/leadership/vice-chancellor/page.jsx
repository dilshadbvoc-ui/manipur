import LeadershipDetail from '@/components/LeadershipDetail';

export const metadata = {
  title: "Vice Chancellor's Message | Manipur International University",
  description: "Message from the Vice Chancellor of Manipur International University.",
  alternates: {
    canonical: 'https://miu.edu.in/about/leadership/vice-chancellor',
  },
};

export default function Page() {
  return <LeadershipDetail slug="vice-chancellor" />;
}
