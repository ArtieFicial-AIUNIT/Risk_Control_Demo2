interface Guardrail {
  order: number;
  name: string;
  riskLevel: 'High' | 'Medium' | 'Low';
  risks: string[];
  controls: string[];
  principles: string[];
  technicalGuardrail: 'Mandatory' | 'Mandatory for High Risk Systems' | 'Good practice';
}

interface StageData {
  title: string;
  color: string;
  guardrails: Guardrail[];
}

export const guardrailData: Record<string, StageData> = {
  design: {
    title: '1. Design',
    color: '#4299E1',
    guardrails: [
      {
        order: 1,
        name: 'Identifying Affected Stakeholders',
        riskLevel: 'High',
        risks: [
          'Incomplete stakeholder identification leading to unmet needs',
          'Lack of inclusivity causing biased outcomes',
          'Neglecting environmental and ecological stakeholders leading to unsustainable practices'
        ],
        controls: [
          'Stakeholder Mapping: Use RACI matrices or stakeholder analysis tools to identify relevant parties, including environmental and ecological considerations',
          'Establish a stakeholder Engagement Committee: Form a Committee responsible for ongoing Engagement with diverse stakeholder groups, including marginalised communities and environmental organisations',
          'Develop Inclusive Engagement Policies: Create Policies that mandate the inclusion of all relevant stakeholders in the design process'
        ],
        principles: [
          'Human-centred values',
          'Fairness',
          'Transparency and explainability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 2,
        name: 'Measures of Intended Outcome',
        riskLevel: 'Medium',
        risks: [
          'Lack of systematic benefit tracking leading to unmeasured return on investment',
          'Inadequate alignment with strategic goals resulting in failure to realise expected business outcomes',
          'Poor communication of AI benefits reducing stakeholder confidence and support'
        ],
        controls: [
          'Benefit realisation framework: Implement a structured benefits management framework that clearly defines expected outcomes. Specify intended outcomes and key performance indicators, and timelines to track the achievement of AI project/program objectives.',
          'Alignment with Goals: Ensure measures reflect organisational objectives and societal values',
          'Benefit ownership: Assign clear responsibility to a dedicated individual or team for monitoring and reporting on the realisation of AI benefits.'
        ],
        principles: [
          'Transparency and explainability',
          'Accountability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 3,
        name: 'User Experience',
        riskLevel: 'Medium',
        risks: [
          'Poor usability hindering adoption and may lead to AI solutions that fail to meet business requirements or introduce inefficiencies',
          'Accessibility issues excluding users with disabilities'
        ],
        controls: [
          'User-Centred Design: Apply principles that focus on user needs and usability',
          'Compliance with assessibility standards: Ensure systems meet accessibility standards to cater to users with disabilities. For example, compliance with WCAG 2.2'
        ],
        principles: [
          'Accessibility',
          'Human-Centered Design',
          'Usability',
          'Universal Design'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 4,
        name: 'Ethics Assessment',
        riskLevel: 'High',
        risks: [
          'Ethical oversights leading to public distrust',
          'Violation of ethical principles resulting in legal repercussions'
        ],
        controls: [
          'Ethical Impact Assessment: Conduct comprehensive assessments to identify potential ethical issues. Potentially have this covered by the Commonwealth AI Assurance Framework',
          'Commonwealth AI Assurance Framework: Use the framework for continuous ethical review and guidance which includes departmental legal team\'s review'
        ],
        principles: [
          'Ethical AI',
          'Responsible Innovation',
          'Trust and Transparency',
          'Public Interest'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 5,
        name: 'Aim/Context and Use Definition',
        riskLevel: 'Medium',
        risks: [
          'Misalignment with Objectives: Unclear aims can lead to ineffective AI solutions',
          'Inappropriate Use Cases: AI applications may not be suitable for certain contexts, leading to negative outcomes'
        ],
        controls: [
          'Define Clear Objectives: Use project management approaches such as PRINCE2 to set specific, measurable project management processes',
          'Use Case Evaluation: Validate AI applications against organisational mission and ethical guidelines to ensure suitability'
        ],
        principles: [
          'Purpose Alignment',
          'Contextual Appropriateness',
          'Clear Objectives',
          'Proportionality'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 6,
        name: 'Compliance with Standards and Legislation',
        riskLevel: 'High',
        risks: [
          'Non-compliance with policies such as "responsible use of AI in government"',
          'Standards Misalignment: Failure to adhere to standards like essential eight may compromise security'
        ],
        controls: [
          'Legal and Regulatory Review: Consult legal experts to ensure compliance with domestic and international laws and standards',
          'Standards Alignment: Implement best practices from relevant standards such as ISO/IEC 27001 for information security'
        ],
        principles: [
          'Privacy protection and security',
          'Accountability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 7,
        name: 'Programme Planning and Technical Design Connections',
        riskLevel: 'Medium',
        risks: [
          'Disjointed Planning: Lack of coordination between program planning and technical design can cause project failures',
          'Resource Misallocation: Inefficient resource planning may lead to budget overruns'
        ],
        controls: [
          'Integrated Project Management: Utilise structured project management methodologies',
          'Resource Planning Tools: Utilise budgeting and scheduling software to allocate resources effectively'
        ],
        principles: [
          'Reliability and safety',
          'Accountability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 8,
        name: 'Human in the loop - Personal Judgement Measurement',
        riskLevel: 'Medium',
        risks: [
          'Over-reliance on automation reducing human oversight',
          'Underutilisation of expertise Failing to incorporate expert judgment can diminish AI effectiveness'
        ],
        controls: [
          'Define Human-AI Interaction: Establish guidelines for appropriate levels of human involvement in decision-making and system operations',
          'Human-in-the-Loop Systems: Design AI to allow for human decision-making where necessary'
        ],
        principles: [
          'Transparency and explainability',
          'Accountability'
        ],
        technicalGuardrail: 'Mandatory'
      },
      {
        order: 9,
        name: 'Data Transformation and Model Selection',
        riskLevel: 'Medium',
        risks: [
          'Data loss from transformation processes',
          'inadequate models leading to suboptimal results'
        ],
        controls: [
          'Standardised Procedures: Use consistent data preprocessing methods to maintain data integrity',
          'Model Benchmarking: Compare multiple models using performance metrics to select the most appropriate one'
        ],
        principles: [
          'Reliability and safety',
          'Transparency and explainability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 10,
        name: 'Testing Suites',
        riskLevel: 'High',
        risks: [
          'Unidentified defects missing critical issues',
          'compliance failures resulting in breaches'
        ],
        controls: [
          'Comprehensive Testing: Develop extensive test suites covering functionality, security, and compliance requirements',
          'Automated Tools: Implement continuous integration/continuous deployment (CI/CD) pipelines for ongoing testing'
        ],
        principles: [
          'Reliability and safety',
          'Accountability'
        ],
        technicalGuardrail: 'Mandatory for High Risk Systems'
      },
      {
        order: 11,
        name: 'Bias Detection and Content Integrity',
        riskLevel: 'Medium',
        risks: [
          'Undetected biases causing discrimination',
          'content authenticity issues from unwatermarked outputs'
        ],
        controls: [
          'Bias Detection and Mitigation: Implement regular bias detection tools and techniques to identify, track, and mitigate biases in training data and models'
        ],
        principles: [
          'Fairness',
          'Transparency and explainability'
        ],
        technicalGuardrail: 'Mandatory'
      },
      {
        order: 12,
        name: 'Accessibility and User Training',
        riskLevel: 'Medium',
        risks: [
          'User exclusion from lack of accessible design',
          'Inadequate skills reducing effective interaction'
        ],
        controls: [
          'Accessible Design Standards: Follow guidelines such as the UK\'s Equality Act 2010',
          'User Training Programmes: Offer training sessions and materials to enhance user competence and confidence'
        ],
        principles: [
          'Human, social and environmental wellbeing',
          'Human-centred values'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 13,
        name: 'Metrics for Impact and Performance',
        riskLevel: 'Low',
        risks: [
          'Misaligned metrics not reflecting performance',
          'lack of transparency hindering assessment'
        ],
        controls: [
          'Define KPIs: Establish clear performance indicators aligned with objectives',
          'Transparent Reporting: Share performance data with stakeholders regularly to maintain trust'
        ],
        principles: [
          'Transparency and explainability',
          'Accountability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 14,
        name: 'Risk Assessments and Mitigation',
        riskLevel: 'High',
        risks: [
          'Unforeseen risks derailing projects',
          'inadequate mitigation plans exacerbating outcomes'
        ],
        controls: [
          'Risk Management Frameworks: Apply standards like ISO 31000 for systematic risk management',
          'Mitigation Strategies: Develop contingency plans for identified risks'
        ],
        principles: [
          'Reliability and safety',
          'Accountability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 15,
        name: 'Readiness Assessments and Technical Constraints',
        riskLevel: 'Medium',
        risks: [
          'Organisational unpreparedness hindering adoption',
          'technical limitations impeding functionality'
        ],
        controls: [
          'Maturity Models: Use assessments like the Capability Maturity Model Integration (CMMI) to gauge organisational readiness',
          'Feasibility Studies: Analyse technical requirements and limitations before implementation'
        ],
        principles: [
          'Reliability and safety',
          'Accountability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 16,
        name: 'AI systems security',
        riskLevel: 'High',
        risks: [
          'Security vulnerabilities leading to breaches',
          'AI systems may introduce security vulnerabilities, particularly if proper security controls are not implemented'
        ],
        controls: [
          'Security Assessments: Conduct threat modelling and vulnerability assessments',
          'Security controls are embedded throughout the AI lifecycle, from development through to deployment and operation'
        ],
        principles: [
          'Privacy protection and security'
        ],
        technicalGuardrail: 'Mandatory'
      },
      {
        order: 17,
        name: 'Cost Projections',
        riskLevel: 'High',
        risks: [
          'unexpected costs straining budgets'
        ],
        controls: [
          'Cost-Benefit Analysis: Perform detailed financial projections to ensure budget adherence and cost-effectiveness'
        ],
        principles: [
          'Accountability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 18,
        name: 'Re-use and Modularity',
        riskLevel: 'Low',
        risks: [
          'Redundancy wasting resources',
          'integration challenges with non-modular systems'
        ],
        controls: [
          'Modular Architecture: Design systems with interchangeable modules for flexibility',
          'Component Libraries: Maintain repositories of reusable code to promote efficiency and consistency'
        ],
        principles: [
          'Reliability and safety',
          'Accountability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 19,
        name: 'Accountability and Ethics',
        riskLevel: 'High',
        risks: [
          'Lack of oversight causing unmanaged risks',
          'ambiguous responsibilities resulting in gaps'
        ],
        controls: [
          'Governance Structures: Establish clear lines of accountability and responsibility',
          'Oversight Meetings: Conduct regular reviews by ethics committees to ensure compliance and address issues'
        ],
        principles: [
          'Accountability',
          'Privacy protection and security'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 20,
        name: 'Design model transparency',
        riskLevel: 'Medium',
        risks: [
          'AI solutions lack the ability to explain how they arrive at outcomes, making it difficult to evidence effective controls or risk management'
        ],
        controls: [
          'Transparency is integrated into AI model design, documentation, management',
          'Allow human experts to challenge the AI\'s output or to meet external requirements',
          'Any human overrides of AI decisions should also be tracked'
        ],
        principles: [
          'Accountability',
          'Transparency and explainability'
        ],
        technicalGuardrail: 'Mandatory for High Risk Systems'
      },
      {
        order: 21,
        name: 'Data Sources and Provenance',
        riskLevel: 'High',
        risks: [
          'Data quality issues corrupting AI models',
          'illegitimate data use leading to legal violations'
        ],
        controls: [
          'Data Validation: Ensure the integrity of data by verifying its sources, accuracy, and compliance with requirements',
          'The AI system should capture data leading to outputs',
          'Provenance Tracking: Establish mechanisms to monitor data throughout its lifecycle'
        ],
        principles: [
          'Privacy protection and security',
          'Accountability'
        ],
        technicalGuardrail: 'Mandatory for High Risk Systems'
      }
    ]
  },
  data: {
    title: '2. Data',
    color: '#48BB78',
    guardrails: [
      {
        order: 22,
        name: 'Bias Detection and Mitigation',
        riskLevel: 'High',
        risks: [
          'Biased datasets causing unfair outcomes',
          'reinforcement of existing biases in data'
        ],
        controls: [
          'Bias Audits: Analyse data for biases using statistical methods',
          'Diverse Collection: Ensure datasets are representative of diverse groups and demographics, promoting fairness and reducing the risk of discrimination',
          'Fairness Techniques: Apply debiasing methods like re-sampling or adversarial debiasing',
          'Bias Mitigation Techniques: Implement appropriate methods to address and reduce bias, such as re-sampling, data augmentation, or other fairness-enhancing approaches tailored to the specific context of the AI system'
        ],
        principles: [
          'Fairness',
          'Human-centred values'
        ],
        technicalGuardrail: 'Mandatory for High Risk Systems'
      },
      {
        order: 23,
        name: 'Data Orchestration and Management',
        riskLevel: 'Medium', 
        risks: [
          'Inconsistent data handling causing integrity issues',
          'data silos impeding comprehensive analysis'
        ],
        controls: [
          'Data Governance: Develop and implement policies and procedures to ensure the proper management, quality, security, and compliance of data throughout its lifecycle',
          'Unified Platforms: Use centralised repositories with controlled access to facilitate collaboration and data consistency'
        ],
        principles: [
          'Reliability and safety',
          'Accountability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 24,
        name: 'Indigenous Data Considerations',
        riskLevel: 'High',
        risks: [
          'Cultural insensitivity harming communities',
          'violation of rights breaching legal protections'
        ],
        controls: [
          'Engage with Indigenous Communities: Follow the AIATSIS Code of Ethics for respectful engagement',
          'CARE Principles: Adhere to principles for indigenous data governance, focusing on Collective benefit, Authority to control, Responsibility, and Ethics'
        ],
        principles: [
          'Human-centred values',
          'Fairness'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 25,
        name: 'Data Categorisation and Pre-trained Models',
        riskLevel: 'Medium',
        risks: [
          'AI solution results may be inaccurate due to model deficiencies or incorrect logic',
          'Misclassification impairing accuracy',
          'incompatibility with pre-trained models leading to poor performance'
        ],
        controls: [
          'Accurate Labelling: Use standardised taxonomies and labelling protocols',
          'Model Evaluation: Assess pre-trained models for suitability and align with organisational data',
          'Controls monitor data quality over time (e.g. to detect data drift)'
        ],
        principles: [
          'Reliability and safety',
          'Transparency and explainability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 26,
        name: 'Data Supply Chain, Lineage, and Metadata',
        riskLevel: 'Medium',
        risks: [
          'Traceability gaps hampering accountability',
          'metadata mismanagement leading to misuse'
        ],
        controls: [
          'Data Lineage Tools: Implement systems to track data origins and transformations',
          'Metadata Standards: Adopt standards like Dublin Core or ISO 23081 for metadata management'
        ],
        principles: [
          'Transparency and explainability',
          'Accountability'
        ],
        technicalGuardrail: 'Mandatory for High Risk Systems'
      },
      {
        order: 27,
        name: 'Privacy and Synthetic Data Generation',
        riskLevel: 'High',
        risks: [
          'Privacy violations exposing personal information',
          'synthetic data limitations missing critical nuances'
        ],
        controls: [
          'Privacy Techniques: Apply methods like differential privacy or anonymisation',
          'Synthetic Data: Generate synthetic datasets when working with sensitive information'
        ],
        principles: [
          'Privacy protection and security',
          'Reliability and safety'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 28,
        name: 'Data Security',
        riskLevel: 'High',
        risks: [
          'Unauthorised access leading to breaches',
          'cyber threats compromising data'
        ],
        controls: [
          'Encryption: Use strong encryption protocols like AES-256 for data at rest and in transit',
          'Access Control: Implement Role-Based Access Control (RBAC)',
          'Compliance: Follow ISO/IEC 27001 for information security management'
        ],
        principles: [
          'Privacy protection and security',
          'Accountability'
        ],
        technicalGuardrail: 'Mandatory for High Risk Systems'
      },
      {
        order: 29,
        name: 'Data Management Lifecycle',
        riskLevel: 'Medium',
        risks: [
          'Non-compliance with retention laws leading to penalties',
          'over-retention increasing breach risks'
        ],
        controls: [
          'Acquisition process',
          'Retention Schedules: Define data retention periods aligned with requirements',
          'Secure Deletion: Implement secure data deletion practices'
        ],
        principles: [
          'Privacy protection and security',
          'Accountability'
        ],
        technicalGuardrail: 'Mandatory'
      }
    ]
  },
  training: {
    title: '3. Training',
    color: '#ED8936',
    guardrails: [
      {
        order: 30,
        name: 'Training Methodology and Human-in-the-Loop',
        riskLevel: 'Medium',
        risks: [
          'Automation errors without human oversight',
          'Inefficient processes may also increase costs'
        ],
        controls: [
          'Human Oversight: Implement checkpoints where humans review AI outputs to catch errors and make adjustments',
          'Staged Development: Use iterative development processes for flexibility with human-in-the-loop checks'
        ],
        principles: [
          'Reliability and safety',
          'Contestability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 31,
        name: 'Bias Detection During Training',
        riskLevel: 'High',
        risks: [
          'Model bias causing discriminatory decisions',
          'unfair outcomes affecting certain groups'
        ],
        controls: [
          'Fairness Metrics: Apply statistical measures like disparate impact ratio',
          'Regular Monitoring: Continuously assess models during training for bias and adjust as necessary'
        ],
        principles: [
          'Fairness',
          'Human-centred values'
        ],
        technicalGuardrail: 'Mandatory for High Risk Systems'
      },
      {
        order: 32,
        name: 'Techniques and Learning Types',
        riskLevel: 'Medium',
        risks: [
          'Misapplied algorithms not solving the problem',
          'overfitting or underfitting causing poor generalisation'
        ],
        controls: [
          'Algorithm Selection: Choose algorithms based on data characteristics and problem requirements',
          'Cross-Validation: Use methods like k-fold cross-validation to assess model performance and prevent overfitting'
        ],
        principles: [
          'Reliability and safety',
          'Transparency and explainability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 33,
        name: 'Cost and Compute Resources',
        riskLevel: 'Medium',
        risks: [
          'Budget overruns exceeding allocated funds',
          'Environmental impact from high compute resource consumption'
        ],
        controls: [
          'Resource Optimisation: Use efficient algorithms and hardware to reduce computational load',
          'Cost Monitoring: Track compute costs in real-time to stay within budget',
          'Green Computing Practices: Implement energy-efficient computing to minimise environmental impact'
        ],
        principles: [
          'Human, social and environmental wellbeing',
          'Reliability and safety'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 34,
        name: 'Specialist Knowledge and Reinforcement Learning',
        riskLevel: 'Medium',
        risks: [
          'Complexity requiring specialised expertise',
          'unpredictable behaviour from reinforcement learning agents'
        ],
        controls: [
          'Expert Involvement: Include AI specialists and domain experts in the development team',
          'Safety Constraints: Set operational boundaries and fail-safes within the AI system to prevent undesirable behaviour'
        ],
        principles: [
          'Reliability and safety',
          'Accountability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 35,
        name: 'Ethics and Bias Assessment of Training Data',
        riskLevel: 'High',
        risks: [
          'Ethical violations using unethical data',
          'privacy breaches from unauthorised use'
        ],
        controls: [
          'Ethical Review Statement: Review data sources and ensure ethical compliance',
          'Consent Management: Ensure data usage aligns with consent agreements and legal requirements'
        ],
        principles: [
          'Privacy protection and security',
          'Accountability'
        ],
        technicalGuardrail: 'Good practice'
      }
    ]
  },
  test: {
    title: '4. Test',
    color: '#9F7AEA',
    guardrails: [
      {
        order: 36,
        name: 'Usability Testing and Stakeholder Engagement',
        riskLevel: 'Medium',
        risks: [
          'Unidentified usability issues may hinder adoption',
          'resistance to change among staff'
        ],
        controls: [
          'Beta Testing: Involve end-users in early testing phases to gather detailed feedback on usability and performance',
          'User Feedback Loops: Establish continuous feedback mechanisms (e.g., surveys, focus groups) for users to report issues',
          'Change Management Support: Provide training and resources to ease the transition'
        ],
        principles: [
          'Human-centred values',
          'Transparency and explainability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 37,
        name: 'Performance Against Intended Impact',
        riskLevel: 'High',
        risks: [
          'Ineffectiveness in delivering intended outcomes',
          'negative impacts inadvertently caused'
        ],
        controls: [
          'Impact Assessments: Evaluate whether the AI system meets its intended goals using tools like Logic Models',
          'Performance Dashboards: Monitor key metrics in real-time to identify and address issues swiftly'
        ],
        principles: [
          'Reliability and safety',
          'Accountability'
        ],
        technicalGuardrail: 'Mandatory for High Risk Systems'
      },
      {
        order: 38,
        name: 'Measuring Effectiveness and Unintended Consequences',
        riskLevel: 'High', 
        risks: [
          'Failure to achieve intended outcomes',
          'unintended negative consequences due to inaccurate performance evaluation'
        ],
        controls: [
          'Impact Evaluation: Conduct thorough evaluations using tools like Logic Models',
          'Performance Dashboards: Implement dashboards to continuously monitor key metrics'
        ],
        principles: [
          'Reliability and safety',
          'Accountability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 39,
        name: 'Test-Driven Development',
        riskLevel: 'Medium',
        risks: [
          'Delayed issue detection increasing costs',
          'incomplete testing overlooking critical areas'  
        ],
        controls: [
          'Comprehensive Test Planning: Develop detailed test cases before and during development',
          'Continuous Integration Testing: Integrate automated and manual testing throughout the lifecycle'
        ],
        principles: [
          'Reliability and safety',
          'Accountability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 40,
        name: 'Continuous Testing',
        riskLevel: 'Medium',
        risks: [
          'Insufficient automated testing can lead to delayed issue detection',
          'undetected bugs impacting reliability'
        ],
        controls: [
          'Automation Framework: Implement automated testing tools to ensure coverage across multiple scenarios',
          'Early Feedback Loops: Use continuous testing feedback for rapid detection and resolution'
        ],
        principles: [
          'Reliability and safety',
          'Accountability'
        ],
        technicalGuardrail: 'Mandatory for High Risk Systems'
      },
      {
        order: 41,
        name: 'Security Testing and Red-Teaming',
        riskLevel: 'High',
        risks: [
          'Unaddressed vulnerabilities exploitable by attackers',
          'compliance gaps failing security standards'
        ],
        controls: [
          'Penetration Testing: Regularly assess system defences against potential attacks',
          'Red Team Exercises: Simulate adversarial attacks to identify and fix vulnerabilities'
        ],
        principles: [
          'Privacy protection and security',
          'Accountability'
        ],
        technicalGuardrail: 'Mandatory for High Risk Systems'
      },
      {
        order: 42,
        name: 'Scenario and Stress Testing',
        riskLevel: 'Medium',
        risks: [
          'System failures under high load',
          'data loss from system crashes'
        ],
        controls: [
          'Load Testing: Simulate high-usage scenarios to ensure system stability',
          'Backup Systems: Implement redundancy and robust backup solutions to prevent data loss'
        ],
        principles: [
          'Reliability and safety',
          'Accountability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 43,
        name: 'Model Validation and Closure',
        riskLevel: 'High',
        risks: [
          'Model drift degrading performance over time',
          'regulatory non-compliance of models'
        ],
        controls: [
          'Validation Techniques: Use methods like cross-validation and ROC analysis',
          'Compliance Checks: Regularly verify that models meet legal and ethical standards',
          'Model evaluation for LLM using example data'
        ],
        principles: [
          'Reliability and safety',
          'Accountability'
        ],
        technicalGuardrail: 'Mandatory for High Risk Systems'
      }
    ]
  },
  integrate: {
    title: '5. Integrate',
    color: '#667EEA', 
    guardrails: [
      {
        order: 44,
        name: 'API Development',
        riskLevel: 'Medium',
        risks: [
          'Interoperability issues hindering communication between systems, leading to inefficient integration'
        ],
        controls: [
          'API Compliance: Use standard protocols such as REST or GraphQL to ensure interoperability across different systems'
        ],
        principles: [
          'Reliability and safety',
          'Fairness',
          'Accountability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 45,
        name: 'Integration Testing',
        riskLevel: 'Medium',
        risks: [
          'Security vulnerabilities may arise during testing if systems fail to properly handle data exchanges'
        ],
        controls: [
          'Security Protocols: Implement OAuth 2.0 or other secure authentication methods to protect data during system integration and exchanges'
        ],
        principles: [
          'Privacy protection and security',
          'Reliability and safety'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 46,
        name: 'Performance Testing',
        riskLevel: 'Medium',
        risks: [
          'Poor system performance during integration may lead to downtime, affecting overall reliability'
        ],
        controls: [
          'Performance Testing: Use load and stress testing tools to simulate real-world scenarios and ensure the system performs as expected under various conditions'
        ],
        principles: [
          'Reliability and safety'
        ],
        technicalGuardrail: 'Good practice'
      }
    ]
  },
  deploy: {
    title: '6. Deploy',
    color: '#38B2AC',
    guardrails: [
      {
        order: 47,
        name: 'MLOps/LLMOps Practices',
        riskLevel: 'Medium',
        risks: [
          'Deployment errors may disrupt services',
          'inconsistent environments can lead to operational inefficiencies'
        ],
        controls: [
          'MLOps Pipelines: Automate deployment processes to minimise human error and ensure smooth, repeatable deployments',
          'Environment Consistency: Use containerisation tools (e.g., Docker) to maintain consistency across development, testing, and production environments'
        ],
        principles: [
          'Reliability and safety',
          'Accountability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 48, 
        name: 'Rollouts',
        riskLevel: 'Medium',
        risks: [
          'Uncontrolled deployment may overwhelm users, resulting in resistance, errors, or misconfigurations'
        ],
        controls: [
          'Phased Rollouts: Implement the AI solution in a gradual, controlled manner to manage user adaptation, identify potential issues early, and minimise disruption'
        ],
        principles: [
          'Reliability and safety',
          'Human-centred values'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 49,
        name: 'Staging',
        riskLevel: 'Medium',
        risks: [
          'Insufficient testing before deployment could lead to unforeseen issues in production environments'
        ],
        controls: [
          'Staging Environments: Use environments that replicate production settings to conduct thorough testing and validation before final deployment to ensure system stability'
        ],
        principles: [
          'Reliability and safety'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 50,
        name: 'Post-deployment Monitoring',
        riskLevel: 'High',
        risks: [
          'Lack of ongoing monitoring may lead to undetected issues, performance degradation, or risks to data privacy and security'
        ],
        controls: [
          'Real-Time Monitoring: Implement continuous monitoring for performance, reliability, and security issues',
          'User Feedback Loops: Ensure a system for capturing user input'
        ],
        principles: [
          'Reliability and safety',
          'Privacy protection and security'
        ],
        technicalGuardrail: 'Mandatory for High Risk Systems'
      },
      {
        order: 51,
        name: 'User Adaptation',
        riskLevel: 'Medium',
        risks: [
          'Users may lack understanding of AI tools, leading to improper use or mistrust'
        ],
        controls: [
          'Training Programmes: Provide comprehensive user training, including ethical use and limitations of AI',
          'User Manuals: Develop clear documentation for end-users'
        ],
        principles: [
          'Human-centred values',
          'Transparency and explainability'
        ],
        technicalGuardrail: 'Mandatory for High Risk Systems'
      }
    ]
  },
  monitor: {
    title: '7. Monitor',
    color: '#4299E1',
    guardrails: [
      {
        order: 52,
        name: 'Capturing Staff and User Feedback',
        riskLevel: 'Medium',
        risks: [
          'Unaddressed issues leading to dissatisfaction',
          'system misuse continuing without feedback'
        ],
        controls: [
          'Feedback Channels: Provide portals, surveys, or hotlines for reporting issues',
          'Regular Check-ins: Schedule meetings to discuss system performance and gather feedback'
        ],
        principles: [
          'Human-centred values',
          'Transparency and explainability'
        ],
        technicalGuardrail: 'Mandatory for High Risk Systems'
      },
      {
        order: 53,
        name: 'Automated and Manual Feedback Loops',
        riskLevel: 'Medium',
        risks: [
          'Delayed responses allowing issues to escalate',
          'over-reliance on automation missing qualitative insights'
        ],
        controls: [
          'Automated Alerts: Set up notifications for anomalies or performance drops',
          'Manual Reviews: Conduct periodic audits and user interviews to gather in-depth feedback'
        ],
        principles: [
          'Reliability and safety',
          'Accountability' 
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 54,
        name: 'Model Drift and Trigger Interventions',
        riskLevel: 'High',
        risks: [
          'Decreased accuracy from performance decline',
          'undetected changes from environmental shifts'
        ],
        controls: [
          'Drift Detection: Implement algorithms to monitor changes in data patterns and model performance',
          'Retraining Protocols: Establish schedules and criteria for updating models when drift is detected'
        ],
        principles: [
          'Reliability and safety',
          'Accountability'
        ],
        technicalGuardrail: 'Mandatory for High Risk Systems'
      },
      {
        order: 55,
        name: 'Legislative and Policy Review/Changes',
        riskLevel: 'High',
        risks: [
          'Non-compliance due to new laws',
          'policy misalignment impacting strategy'
        ],
        controls: [
          'Regulatory Monitoring: Stay updated on legal developments relevant to AI',
          'Policy Reviews: Regularly assess and update internal policies to remain compliant and aligned with best practices'
        ],
        principles: [
          'Accountability',
          'Privacy protection and security'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 56,
        name: 'Incident Management and Escalation',
        riskLevel: 'High',
        risks: [
          'Delayed or inappropriate responses to AI incidents may lead to significant operational or reputational damage'
        ],
        controls: [
          'Incident Response Plans: Define clear steps for managing incidents, including roles and responsibilities',
          'Escalation Procedures: Establish authority lines and communication protocols to ensure swift resolution',
          'Incident Response Decision Matrix: Develop a decision matrix that categorises types of incidents and outlines the appropriate response steps'
        ],
        principles: [
          'Reliability and safety',
          'Accountability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 57,
        name: 'Model Retirement and Re-use',
        riskLevel: 'Low',
        risks: [
          'Obsolete models not performing adequately',
          'inefficiencies from duplicate efforts'
        ],
        controls: [
          'Model Inventory: Keep detailed records of all models in use, including versioning and performance metrics',
          'Reusability Standards: Develop guidelines for model reuse and adaptation to new contexts'
        ],
        principles: [
          'Reliability and safety',
          'Accountability'
        ],
        technicalGuardrail: 'Good practice'
      }
    ]
  },
  decommission: {
    title: '8. Decommission',
    color: '#E53E3E',
    guardrails: [
      {
        order: 58,
        name: 'Secure Decommissioning',
        riskLevel: 'High',
        risks: [
          'Failure to securely decommission AI systems can result in data leaks, security risks, or non-compliance with regulations'
        ],
        controls: [
          'Data Deletion Protocols: Implement secure and compliant data deletion practices, ensuring all sensitive data is wiped',
          'Asset Management: Keep a record of decommissioned systems'
        ],
        principles: [
          'Privacy protection and security',
          'Accountability'
        ],
        technicalGuardrail: 'Mandatory'
      },
      {
        order: 59,
        name: 'Documentation and Handover',
        riskLevel: 'Medium',
        risks: [
          'Lack of proper documentation or knowledge transfer can result in the loss of valuable insights gained during AI\'s lifecycle'
        ],
        controls: [
          'Knowledge Transfer Protocols: Ensure key learnings, risks, and outcomes from the AI system are properly documented and handed over',
          'Archiving: Archive relevant data for legal purposes'
        ],
        principles: [
          'Reliability and safety',
          'Transparency and explainability'
        ],
        technicalGuardrail: 'Good practice'
      },
      {
        order: 60,
        name: 'Final Compliance Review',
        riskLevel: 'Medium',
        risks: [
          'AI systems that are not ethically reviewed before decommissioning may leave unresolved risks or ethical issues'
        ],
        controls: [
          'Ethical Closure Review: Conduct a final review to ensure that all ethical considerations, including user impact, have been addressed before system decommissioning'
        ],
        principles: [
          'Human, social, and environmental wellbeing',
          'Accountability'
        ],
        technicalGuardrail: 'Good practice'
      }
    ]
  }
};
