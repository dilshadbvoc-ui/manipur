import GenericInfoPage from '@/components/GenericInfoPage';
import '@/styles/GrievanceCellPage.css';

export const metadata = {
  title: 'Grievance Cell | Manipur International University',
  description: 'MIU Grievance Cell provides a transparent mechanism for addressing student and staff complaints.',
  keywords: 'MIU grievance cell, complaint redressal, student grievances, transparency',
};

export default function GrievanceCell() {
  const sections = [
    {
      icon: '📋',
      title: 'About Grievance Cell',
      content: 'The Grievance Cell at Manipur International University provides a transparent and efficient mechanism for addressing complaints and concerns of students, faculty, and staff. We ensure fair, timely, and confidential resolution of all grievances.'
    },
    {
      title: 'Procedure for Filing a Grievance',
      content: (
        <div className="grievance-procedure">
          <div className="procedure-flow">
            <div className="procedure-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Submission of Grievance</h3>
                <div className="step-options">
                  <div className="option-card">
                    <span className="option-icon">💻</span>
                    <strong>Online Portal</strong>
                    <p>Submit through our online grievance portal</p>
                  </div>
                  <div className="option-card">
                    <span className="option-icon">✉️</span>
                    <strong>Written Submission</strong>
                    <p>MIU Administrative office, Ghari, Airport road, Imphal West, Manipur - 795140</p>
                    <p><strong>Email:</strong> miugrievance@miu.edu.in</p>
                  </div>
                </div>
              </div>
              <div className="step-arrow">↓</div>
            </div>

            <div className="procedure-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Required Information</h3>
                <div className="info-checklist">
                  <div className="checklist-item">✓ Full name and contact details</div>
                  <div className="checklist-item">✓ Details of the grievance</div>
                  <div className="checklist-item">✓ Any supporting documents or evidence</div>
                </div>
                <p className="step-note">Complete information helps in faster resolution</p>
              </div>
              <div className="step-arrow">↓</div>
            </div>

            <div className="procedure-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Acknowledgment</h3>
                <p>Upon receipt, you will receive an acknowledgment of your grievance within the specified time frame. This acknowledgment confirms that your complaint has been received and is being processed by the Grievance Cell.</p>
                <div className="timeline-badge">⏱️ Immediate Acknowledgment</div>
              </div>
              <div className="step-arrow">↓</div>
            </div>

            <div className="procedure-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Review and Investigation</h3>
                <p>The Grievance Cell will review your complaint and, if necessary, conduct an investigation. All investigations are conducted impartially and confidentially.</p>
                <div className="timeline-badge">⏱️ Within 15 Working Days</div>
              </div>
              <div className="step-arrow">↓</div>
            </div>

            <div className="procedure-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Resolution</h3>
                <p>You will be informed of the resolution or decision made regarding your grievance. Resolutions aim to be fair and just for all parties involved.</p>
                <div className="resolution-options">
                  <div className="resolution-box satisfied">
                    <span>✓</span>
                    <strong>Satisfied</strong>
                    <p>Case Closed</p>
                  </div>
                  <div className="resolution-box not-satisfied">
                    <span>→</span>
                    <strong>Not Satisfied</strong>
                    <p>Proceed to Appeal</p>
                  </div>
                </div>
              </div>
              <div className="step-arrow">↓</div>
            </div>

            <div className="procedure-step final-step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Appeal Process</h3>
                <p>If you wish to appeal the decision, submit your appeal to the higher authority within the specified time frame from the date of the resolution.</p>
                <div className="timeline-badge">⏱️ Within 15 Days of Resolution</div>
                <p className="step-note">The appeal will be reviewed by a higher committee for final decision</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <GenericInfoPage
      badge="GRIEVANCE REDRESSAL"
      title="Grievance Cell"
      subtitle="Fair, Transparent, and Timely Resolution"
      breadcrumb={[
        { label: 'Student Life', href: '/student-life/sports' },
        { label: 'Grievance Cell' }
      ]}
      sections={sections}
      contactInfo={{
        title: 'File a Grievance',
        description: 'For submitting grievances or queries about the redressal process.',
        email: 'miugrievance@miu.edu.in',
        phone: '+91 9319727766'
      }}
    />
  );
}
