export const guardrailData = {
  design: {
    title: 'Design',
    color: '#4299E1',
    guardrails: [
      {
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
          'Fairness and Non-discrimination',
          'Inclusivity',
          'Social and Environmental Benefit',
          'Stakeholder Impact Assessment'
        ]
      },
      {
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
          'Accountability',
          'Measurable Benefits',
          'Transparency',
          'Effectiveness'
        ]
      },
      {
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
        ]
      },
      {
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
        ]
      },
      {
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
        ]
      }
    ]
  }
  // Add other stages as needed
};
