import { PageContent } from '@ag.ds-next/react/content'; 
import { Box } from '@ag.ds-next/react/box';
import { Text } from '@ag.ds-next/react/text';
import { H1, H2 } from '@ag.ds-next/react/heading';
import { AppLayout } from '../AppLayout';
import { StageCard } from '../StageCard/StageCard';
import { keyframes } from '@emotion/react';
import { useRouter } from 'next/router';
import { guardrailData } from '../../data/guardrails';
import { useState, useMemo } from 'react';
import { Select } from '@ag.ds-next/react/select';
import { Card } from '@ag.ds-next/react/card';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const highlightText = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const countUp = keyframes`
  from { transform: translateY(10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const stages = [
  { 
    title: 'Design',
    description: 'Plan and architect your AI solution with ethical considerations in mind.',
    color: '#4299E1'
  },
  { 
    title: 'Data',
    description: 'Collect and prepare data while ensuring privacy and fairness.',
    color: '#48BB78'
  },
  { 
    title: 'Training',
    description: 'Train models with focus on accuracy and bias mitigation.',
    color: '#ED8936'
  },
  { 
    title: 'Test',
    description: 'Validate model performance and check for potential issues.',
    color: '#9F7AEA'
  },
  { 
    title: 'Integrate',
    description: 'Implement the solution while maintaining security standards.',
    color: '#F56565'
  },
  { 
    title: 'Deploy',
    description: 'Launch your AI solution with proper monitoring in place.',
    color: '#38B2AC'
  },
  { 
    title: 'Monitor',
    description: 'Track performance and address emerging issues.',
    color: '#667EEA'
  },
  { 
    title: 'Decommission',
    description: 'Safely retire or replace AI systems when needed.',
    color: '#718096'
  }
];

export const HomePage = () => {
  const router = useRouter();
  const [selectedStage, setSelectedStage] = useState<string>('all');
  const [selectedRiskLevel, setSelectedRiskLevel] = useState<string>('all');  // Fixed syntax error
  const [selectedGuardrail, setSelectedGuardrail] = useState<string>('all');

  // Get unique guardrail names across all stages
  const guardrailOptions = useMemo(() => {
    const guardrails = new Set<string>();
    Object.values(guardrailData).forEach(stageData => {
      stageData.guardrails.forEach(guardrail => {
        guardrails.add(guardrail.name);
      });
    });
    return Array.from(guardrails).sort();
  }, []);

  const handleStageClick = (stageId: string) => {
    router.push(`/stage/${stageId.toLowerCase()}`);
  };

  const riskStats = useMemo(() => {
    let totalRisks = 0;
    let highRisks = 0;
    let mediumRisks = 0;
    let lowRisks = 0;
    
    Object.entries(guardrailData).forEach(([_, stageData]) => {
      stageData.guardrails.forEach(guardrail => {
        totalRisks += guardrail.risks.length;
        if (guardrail.riskLevel === 'High') highRisks += guardrail.risks.length;
        if (guardrail.riskLevel === 'Medium') mediumRisks += guardrail.risks.length;
        if (guardrail.riskLevel === 'Low') lowRisks += guardrail.risks.length;
      });
    });

    return { totalRisks, highRisks, mediumRisks, lowRisks };
  }, []);

  const filteredRisks = useMemo(() => {
    let risks: Array<{ stage: string; level: string; risk: string; guardrail: string; }> = [];
    
    Object.entries(guardrailData).forEach(([stageName, stageData]) => {
      if (selectedStage === 'all' || selectedStage === stageName) {
        stageData.guardrails.forEach(guardrail => {
          if ((selectedRiskLevel === 'all' || selectedRiskLevel === guardrail.riskLevel) &&
              (selectedGuardrail === 'all' || selectedGuardrail === guardrail.name)) {
            guardrail.risks.forEach(risk => {
              risks.push({
                stage: stageName,
                level: guardrail.riskLevel,
                risk: risk,
                guardrail: guardrail.name
              });
            });
          }
        });
      }
    });

    return risks;
  }, [selectedStage, selectedRiskLevel, selectedGuardrail]);

  return (
    <AppLayout>
      {/* Introduction Section */}
      <Box css={{ 
        background: 'linear-gradient(135deg, #f6f8fa 0%, #ffffff 100%)',
        padding: '6rem 2rem',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 30%, rgba(147, 197, 253, 0.15) 0%, transparent 50%)',
          zIndex: 0
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 80% 70%, rgba(199, 210, 254, 0.15) 0%, transparent 50%)',
          zIndex: 0
        }
      }}>
        <PageContent>
          <Box css={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            <Box css={{
              marginBottom: '3rem',
              position: 'relative'
            }}>
              <H1 css={{
                fontSize: ['2.5rem', '3.5rem', '4rem'],
                fontWeight: '800',
                marginBottom: '3rem',
                position: 'relative',
                paddingBottom: '2rem'
              }}>
                <span css={{
                  background: 'linear-gradient(120deg, #1a365d 0%, #4C51BF 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    animation: `${shimmer} 3s linear infinite`,
                  }
                }}>
                  Navigate AI Development with Confidence
                </span>
                <span css={{
                  display: 'block',
                  position: 'absolute',
                  bottom: '-1rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  animation: `${float} 3s ease-in-out infinite`,
                  fontSize: '2rem',
                  WebkitTextFillColor: 'initial'
                }}>
                  🎯
                </span>
              </H1>
            </Box>

            <Box css={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              position: 'relative',
              padding: '2rem',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '10%',
                right: '10%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.2), transparent)'
              }
            }}>
              <Text 
                as="p" 
                fontSize="xl"
                css={{
                  color: '#2D3748',
                  lineHeight: '1.8',
                  fontWeight: '500',
                  animation: `${fadeIn} 1s ease-out forwards`,
                  opacity: 0,
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}
              >
                Our AI Risk and Control Framework provides a structured approach to developing safe, 
                ethical, and reliable AI solutions. From initial design to deployment and monitoring, 
                we guide you through each critical stage.
              </Text>
              <Text 
                as="p"
                css={{
                  color: '#4A5568',
                  lineHeight: '1.8',
                  animation: `${fadeIn} 1s ease-out forwards`,
                  opacity: 0,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-1rem',
                    left: '35%',
                    right: '35%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.2), transparent)'
                  }
                }}
              >
                Follow our comprehensive 8-stage process to ensure your AI development 
                journey adheres to best practices and risk management principles.
              </Text>
            </Box>
          </Box>
        </PageContent>
      </Box>

      {/* New Dashboard Section */}
      <Box css={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
        padding: '4rem 2rem',
        borderBottom: '1px solid #E2E8F0'
      }}>
        <PageContent>
          <H2 css={{
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#2D3748',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #4299E1, #667EEA)',
              borderRadius: '2px'
            }
          }}>
            Risk Analytics Dashboard
          </H2>

          {/* Statistics Cards */}
          <Box css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {[
              { label: 'Total Risks', value: riskStats.totalRisks, color: '#4299E1' },
              { label: 'High Risks', value: riskStats.highRisks, color: '#F56565' },
              { label: 'Medium Risks', value: riskStats.mediumRisks, color: '#ED8936' },
              { label: 'Low Risks', value: riskStats.lowRisks, color: '#48BB78' }
            ].map((stat, index) => (
              <Card key={stat.label} css={{
                padding: '1.5rem',
                textAlign: 'center',
                animation: `${countUp} 0.5s ease-out forwards ${index * 0.1}s`,
                opacity: 0,
                background: `linear-gradient(135deg, white, ${stat.color}08)`,
                border: `1px solid ${stat.color}20`,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 12px 24px ${stat.color}20`
                }
              }}>
                <Text css={{ fontSize: '2.5rem', fontWeight: '700', color: stat.color }}>
                  {stat.value}
                </Text>
                <Text css={{ color: '#4A5568', fontWeight: '500' }}>{stat.label}</Text>
              </Card>
            ))}
          </Box>

          {/* Filters */}
          <Box css={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <Box css={{ flex: '1', minWidth: '200px' }}>
              <Select
                label="Filter by Stage"
                options={[
                  { label: 'All Stages', value: 'all' },
                  ...Object.keys(guardrailData).map(stage => ({
                    label: stage.charAt(0).toUpperCase() + stage.slice(1),
                    value: stage
                  }))
                ]}
                value={selectedStage}
                onChange={e => setSelectedStage(e.target.value)}
              />
            </Box>
            <Box css={{ flex: '1', minWidth: '200px' }}>
              <Select
                label="Filter by Risk Level"
                options={[
                  { label: 'All Levels', value: 'all' },
                  { label: 'High', value: 'High' },
                  { label: 'Medium', value: 'Medium' },
                  { label: 'Low', value: 'Low' }
                ]}
                value={selectedRiskLevel}
                onChange={e => setSelectedRiskLevel(e.target.value)}
              />
            </Box>
            <Box css={{ flex: '1', minWidth: '200px' }}>
              <Select
                label="Filter by Guardrail"
                options={[
                  { label: 'All Guardrails', value: 'all' },
                  ...guardrailOptions.map(guardrail => ({
                    label: guardrail,
                    value: guardrail
                  }))
                ]}
                value={selectedGuardrail}
                onChange={e => setSelectedGuardrail(e.target.value)}
              />
            </Box>
          </Box>

          {/* Risks List */}
          <Box css={{
            display: 'grid',
            gap: '1rem',
            maxHeight: '400px',
            overflowY: 'auto',
            padding: '1rem',
            background: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}>
            {filteredRisks.map((risk, index) => (
              <Box
                key={index}
                css={{
                  padding: '1rem',
                  borderRadius: '8px',
                  background: risk.level === 'High' ? '#FFF5F5' 
                    : risk.level === 'Medium' ? '#FFFAF0'
                    : '#F0FFF4',
                  borderLeft: `4px solid ${
                    risk.level === 'High' ? '#F56565'
                    : risk.level === 'Medium' ? '#ED8936'
                    : '#48BB78'
                  }`,
                  animation: `${fadeIn} 0.3s ease-out forwards ${index * 0.05}s`,
                  opacity: 0
                }}
              >
                <Text css={{ fontWeight: '500', color: '#2D3748', marginBottom: '0.5rem' }}>
                  {risk.risk}
                </Text>
                <Box css={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', flexWrap: 'wrap' }}>
                  <Text css={{ color: '#4A5568' }}>Stage: {risk.stage}</Text>
                  <Text css={{ color: '#4A5568' }}>Guardrail: {risk.guardrail}</Text>
                  <Text css={{ 
                    color: risk.level === 'High' ? '#F56565'
                      : risk.level === 'Medium' ? '#ED8936'
                      : '#48BB78'
                  }}>
                    {risk.level} Risk
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </PageContent>
      </Box>

      {/* Stages Section */}
      <Box css={{ 
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden',
        perspective: '1000px',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(147, 197, 253, 0.1) 0%, transparent 50%)',
          zIndex: 0
        }
      }}>
        <PageContent>
          <Box css={{ 
            display: 'grid',
            gridTemplateColumns: ['1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)'],
            gap: '2rem',
            position: 'relative'
          }}>
            {stages.map((stage, index) => {
              return (
                <Box 
                  key={stage.title}
                  css={{
                    cursor: 'pointer',
                    position: 'relative',
                    background: '#ffffff',
                    borderRadius: '24px',
                    padding: '2rem',
                    minHeight: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: stage.color,
                      opacity: 0.8
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 40px ${stage.color}30`
                    }
                  }}
                  onClick={() => handleStageClick(stage.title)}
                >
                  <div css={{ position: 'relative', zIndex: 1 }}>
                    <Box css={{
                      fontSize: ['2.5rem', '3rem'],
                      fontWeight: '900',
                      color: stage.color,
                      opacity: 0.12,
                      position: 'absolute',
                      top: '-1.5rem',
                      right: '-1rem',
                      fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                      letterSpacing: '-0.04em'
                    }}>
                      {index + 1}
                    </Box>
                    <Text
                      as="h3"
                      css={{
                        fontSize: ['1.4rem', '1.6rem'],
                        fontWeight: '700',
                        color: stage.color,
                        marginBottom: '1.25rem',
                        letterSpacing: '-0.02em',
                        fontFamily: "'Inter', -apple-system, system-ui, sans-serif"
                      }}
                    >
                      {stage.title}
                    </Text>
                    <Text
                      as="p"
                      css={{
                        color: '#4A5568',
                        lineHeight: '1.7',
                        fontSize: '1rem',
                        fontWeight: '450',
                        letterSpacing: '0.01em',
                        fontFamily: "'Inter', system-ui, sans-serif",
                      }}
                    >
                      {stage.description}
                    </Text>
                  </div>
                  <Box css={{
                    marginTop: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: stage.color,
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    letterSpacing: '0.02em',
                    opacity: 0.9,
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    '&::after': {
                      content: '"→"',
                      marginLeft: '0.25rem'
                    },
                    '&:hover': {
                      opacity: 1,
                      transform: 'translateX(4px)'
                    }
                  }}>
                    Learn More
                  </Box>
                </Box>
              );
            })}
          </Box>
        </PageContent>
      </Box>
    </AppLayout>
  );
};
