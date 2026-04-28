import ContactUsPage from '@/components/ContactUsPage';

export const metadata = {
  title: 'Contact Us | Manipur International University',
  description: 'Contact Manipur International University. Address: Imphal, Manipur. Phone: +91 9319727766. Email: admission@miu.edu.in. Office hours: Mon-Sat 9:30 AM - 4:00 PM.',
  alternates: { canonical: 'https://miu.edu.in/contact' },
  openGraph: { title: 'Contact MIU | Manipur International University', description: 'Get in touch with MIU Imphal. Phone, email, WhatsApp and visit us.', url: 'https://miu.edu.in/contact' },
};

export default function ContactPage() {
  return <ContactUsPage />;
}
