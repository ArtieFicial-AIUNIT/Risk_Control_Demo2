import { PageContent } from '@ag.ds-next/react/content'; 
import { Box } from '@ag.ds-next/react/box';
import { Text } from '@ag.ds-next/react/text';
import { H1, H2 } from '@ag.ds-next/react/heading';
import { AppLayout } from '../AppLayout';
import { StageCard } from '../StageCard/StageCard';
import { keyframes } from '@emotion/react';
import { useRouter } from 'next/router';

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
  
  const handleStageClick = (stageId: string) => {
    router.push(`/stage/${stageId.toLowerCase()}`);
  };

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
