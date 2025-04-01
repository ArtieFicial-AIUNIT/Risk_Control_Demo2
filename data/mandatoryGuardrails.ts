export interface MandatoryGuardrail {
  stage: string;
  item: string;
  relatedRisk: string;
  riskLevel: 'High' | 'Medium' | 'Low';
  control: string;
  principles: string[];
}

export const mandatoryGuardrailData: MandatoryGuardrail[] = [
  {
    stage: 'Design',
    item: 'Human in the loop - Personal Judgement Measurement',
    relatedRisk: 'Over-reliance on automation reducing human oversight; Underutilisation of expertise Failing to incorporate expert judgment can diminish AI effectiveness.',
    riskLevel: 'Medium',
    control: 'Define Human-AI Interaction: Establish guidelines for appropriate levels of human involvement in decision-making and system operations; Human-in-the-Loop Systems: Design AI to allow for human decision-making where necessary',
    principles: ['Human-centred values', 'Contestability']
  },
  {
    stage: 'Design',
    item: 'Testing Suites',
    relatedRisk: 'Unidentified defects missing critical issues; compliance failures resulting in breaches',
    riskLevel: 'High',
    control: 'Comprehensive Testing: Develop extensive test suites covering functionality, security, and compliance requirements; Publish test coverage similar to some GitHub Repos/Azure DevOps; Automated Tools: Implement continuous integration/continuous deployment (CI/CD) pipelines for ongoing testing. Set test conditions as mandatory policy for pull requests',
    principles: ['Reliability and safety', 'Accountability']
  },
  {
    stage: 'Design',
    item: 'Bias Detection and Content Integrity',
    relatedRisk: 'Undetected biases causing discrimination; content authenticity issues from unwatermarked outputs',
    riskLevel: 'Medium',
    control: 'Bias Detection and Mitigation: Implement regular bias detection tools and techniques to identify, track, and mitigate biases in training data and models; Content Integrity: Embed digital watermarks or metadata to verify the authenticity and traceability of AI-generated content, ensuring responsible use and reducing misinformation risks.',
    principles: ['Fairness', 'Transparency and explainability']
  },
  {
    stage: 'Design',
    item: 'AI systems security',
    relatedRisk: 'Security vulnerabilities leading to breaches; AI systems may introduce security vulnerabilities, particularly if proper security controls are not implemented.',
    riskLevel: 'High',
    control: 'Security Assessments: Conduct threat modelling and vulnerability assessments; Security controls are embedded throughout the AI lifecycle, from development through to deployment and operation. Security testing is part of the AI solution’s development process to mitigate risks.',
    principles: ['Privacy protection and security']
  },
  {
    stage: 'Design',
    item: 'Design model transparency',
    relatedRisk: 'AI solutions lack the ability to explain how they arrive at outcomes, making it difficult to evidence effective controls or risk management.',
    riskLevel: 'Medium',
    control: 'Transparency is integrated into AI model design, documentation, management. allowing human experts to challenge the AI\'s output or to meet external requirements. Any human overrides of AI decisions should also be tracked.',
    principles: ['Accountability', 'Transparency and explainability']
  },
  {
    stage: 'Design',
    item: 'Data Sources and Provenance',
    relatedRisk: 'Data quality issues corrupting AI models; illegitimate data use leading to legal violations',
    riskLevel: 'High',
    control: 'Data Validation: Ensure the integrity of data by verifying its sources, accuracy, and compliance with relevant legal and regulatory requirements. The AI system should capture data leading to outputs; Provenance Tracking: Establish mechanisms to monitor data throughout its lifecycle, ensuring traceability and accountability for all transformations and movements.',
    principles: ['Privacy protection and security', 'Accountability']
  },
  {
    stage: 'Data',
    item: 'Bias Detection and Mitigation',
    relatedRisk: 'Biased datasets causing unfair outcomes; reinforcement of existing biases in data',
    riskLevel: 'High',
    control: 'Bias Audits: Analyse data for biases using statistical methods; Diverse Collection: Ensure datasets are representative of diverse groups and demographics, promoting fairness and reducing the risk of discrimination; Fairness Techniques: Apply debiasing methods like re-sampling or adversarial debiasing; Bias Mitigation Techniques: Implement appropriate methods to address and reduce bias, such as re-sampling, data augmentation, or other fairness-enhancing approaches tailored to the specific context of the AI system.',
    principles: ['Fairness', 'Human-centred values']
  },
  {
    stage: 'Data',
    item: 'Data Supply Chain, Lineage, and Metadata',
    relatedRisk: 'Traceability gaps hampering accountability; metadata mismanagement leading to misuse',
    riskLevel: 'Medium',
    control: 'Data Lineage Tools: Implement systems to track data origins and transformations; Metadata Standards: Adopt standards like Dublin Core or ISO 23081 for metadata management',
    principles: ['Transparency and explainability', 'Accountability']
  },
  {
    stage: 'Data',
    item: 'Data Security',
    relatedRisk: 'Unauthorised access leading to breaches; cyber threats compromising data',
    riskLevel: 'High',
    control: 'Encryption: Use strong encryption protocols like AES-256 for data at rest and in transit; Access Control: Implement Role-Based Access Control (RBAC) to limit data access; Compliance: Follow ISO/IEC 27001 for information security management systems',
    principles: ['Privacy protection and security', 'Accountability']
  },
  {
    stage: 'Data',
    item: 'Data Management Lifecycle - Acquisition, Retention, Archival, Delete',
    relatedRisk: 'Non-compliance with retention laws leading to penalties; over-retention increasing breach risks',
    riskLevel: 'Medium',
    control: 'Acquisition process; Retention Schedules: Define data retention periods that align with relevant legal, regulatory, and organisational requirements, ensuring that data is stored only as long as necessary for its intended purpose; Secure Deletion: Implement secure data deletion practices using industry-recognised techniques to ensure data is permanently removed in a manner that protects privacy and security.',
    principles: ['Privacy protection and security', 'Accountability']
  },
  {
    stage: 'Training',
    item: 'Bias Detection During Training',
    relatedRisk: 'Model bias causing discriminatory decisions; unfair outcomes affecting certain groups',
    riskLevel: 'High',
    control: 'Fairness Metrics: Apply statistical measures like disparate impact ratio; Regular Monitoring: Continuously assess models during training for bias and adjust as necessary',
    principles: ['Fairness', 'Human-centred values']
  },
  {
    stage: 'Test',
    item: 'Performance Against Intended Impact',
    relatedRisk: 'Ineffectiveness in delivering intended outcomes; negative impacts inadvertently caused',
    riskLevel: 'High',
    control: 'Impact Assessments: Evaluate whether the AI system meets its intended goals using tools like Logic Models; Performance Dashboards: Monitor key metrics in real-time to identify and address issues swiftly',
    principles: ['Reliability and safety', 'Accountability']
  },
  {
    stage: 'Test',
    item: 'Continuous Testing',
    relatedRisk: 'Insufficient automated testing can lead to delayed issue detection or undetected bugs impacting reliability',
    riskLevel: 'Medium',
    control: 'Automation Framework: Implement automated testing tools to ensure coverage across multiple scenarios, including edge cases; Early Feedback Loops: Use continuous testing feedback to ensure rapid detection and resolution of issues.',
    principles: ['Reliability and safety', 'Accountability']
  },
  {
    stage: 'Test',
    item: 'Security Testing and Red-Teaming',
    relatedRisk: 'Unaddressed vulnerabilities exploitable by attackers; compliance gaps failing security standards',
    riskLevel: 'High',
    control: 'Penetration Testing: Regularly assess system defences against potential attacks; Red Team Exercises: Simulate adversarial attacks to identify and fix vulnerabilities',
    principles: ['Privacy protection and security', 'Accountability']
  },
  {
    stage: 'Test',
    item: 'Model Validation and Closure',
    relatedRisk: 'Model drift degrading performance over time; regulatory non-compliance of models',
    riskLevel: 'High',
    control: 'Validation Techniques: Use methods like cross-validation and ROC analysis to ensure model accuracy; Compliance Checks: Regularly verify that models meet legal and ethical standards; Model evaluation for LLM using example data',
    principles: ['Reliability and safety', 'Accountability']
  },
  {
    stage: 'Deploy',
    item: 'Post-deployment Monitoring',
    relatedRisk: 'Lack of ongoing monitoring may lead to undetected issues, performance degradation, or risks to data privacy and security',
    riskLevel: 'High',
    control: 'Real-Time Monitoring: Implement continuous monitoring for performance, reliability, and security issues; User Feedback Loops: Ensure a system for capturing user input',
    principles: ['Reliability and safety', 'Privacy protection and security']
  },
  {
    stage: 'Deploy',
    item: 'User Adaptation',
    relatedRisk: 'Users may lack understanding of AI tools, leading to improper use or mistrust',
    riskLevel: 'Medium',
    control: 'Training Programmes: Provide comprehensive user training, including ethical use and limitations of AI; User Manuals: Develop clear documentation for end-users',
    principles: ['Human-centred values', 'Transparency and explainability']
  },
  {
    stage: 'Monitor',
    item: 'Capturing Staff and User Feedback',
    relatedRisk: 'Unaddressed issues leading to dissatisfaction; system misuse continuing without feedback',
    riskLevel: 'Medium',
    control: 'Feedback Channels: Provide portals, surveys, or hotlines for reporting issues; Regular Check-ins: Schedule meetings to discuss system performance and gather feedback',
    principles: ['Human-centred values', 'Transparency and explainability']
  },
  {
    stage: 'Monitor',
    item: 'Model Drift and Trigger Interventions',
    relatedRisk: 'Decreased accuracy from performance decline; undetected changes from environmental shifts',
    riskLevel: 'High',
    control: 'Drift Detection: Implement algorithms to monitor changes in data patterns and model performance; Retraining Protocols: Establish schedules and criteria for updating models when drift is detected',
    principles: ['Reliability and safety', 'Accountability']
  },
  {
    stage: 'Decommission',
    item: 'Secure Decommissioning',
    relatedRisk: 'Failure to securely decommission AI systems can result in data leaks, security risks, or non-compliance with regulations',
    riskLevel: 'High',
    control: 'Data Deletion Protocols: Implement secure and compliant data deletion practices, ensuring all sensitive data is wiped; Asset Management: Keep a record of decommissioned systems',
    principles: ['Privacy protection and security', 'Accountability']
  }
];