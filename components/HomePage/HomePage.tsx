import { PageContent } from '@ag.ds-next/react/content'; 
import { Box } from '@ag.ds-next/react/box';
import { Text } from '@ag.ds-next/react/text';
import { H1, H2 } from '@ag.ds-next/react/heading';
import { AppLayout } from '../AppLayout';
import { StageCard } from '../StageCard/StageCard';
import { keyframes } from '@emotion/react';

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

const glowPulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
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
                  animation: `${fadeIn} 1s ease-out 0.3s forwards`,
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
                  animation: `${fadeIn} 1s ease-out 0.6s forwards`,
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
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '20%',
              left: '0',
              right: '0',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.2), transparent)',
              zIndex: 0
            }
          }}>
            {stages.map((stage, index) => (
              <Box 
                key={stage.title}
                css={{
                  animation: `${fadeIn} 0.6s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    right: '-10px',
                    bottom: '-10px',
                    background: `linear-gradient(135deg, ${stage.color}20, transparent)`,
                    borderRadius: '20px',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: 0
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    '&::before': {
                      opacity: 1
                    }
                  }
                }}
              >
                <Box css={{
                  position: 'relative',
                  zIndex: 1,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '5px',
                    left: '5px',
                    width: '10px',
                    height: '10px',
                    background: stage.color,
                    borderRadius: '50%',
                    animation: `${glowPulse} 2s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`
                  }
                }}>
                  <StageCard
                    title={stage.title}
                    description={stage.description}
                    color={stage.color}
                    number={index + 1}
                    onClick={() => console.log(`Clicked ${stage.title}`)}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </PageContent>
      </Box>
    </AppLayout>
  );
};
