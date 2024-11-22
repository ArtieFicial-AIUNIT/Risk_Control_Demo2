import { PageContent } from '@ag.ds-next/react/content'; 
import { H1 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { Box, Stack } from '@ag.ds-next/react/box';
import { AppLayout } from '../AppLayout';
import { StageCard } from '../StageCard/StageCard';
import { keyframes } from '@emotion/react';

const slideIn = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const shine = keyframes`
  to { background-position: 200% center; }
`;

const shineEffect = keyframes`
  10% {
    opacity: 1;
    top: -30%;
    left: -30%;
    transition: 0.3s;
  }
  100% {
    opacity: 0;
    top: -30%;
    left: 100%;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
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
      <Box css={{
        background: '#f5f5f5',
        position: 'relative',
        paddingTop: '2rem',
        paddingBottom: '2rem'
      }}>
        <PageContent>
          <Stack gap={2} alignItems="center">
            <Box css={{
              textAlign: 'center',
              maxWidth: '1000px',
              '& h1': {
                fontSize: ['2.5rem', '3rem', '3.5rem'],
                fontWeight: '700',
                background: 'linear-gradient(120deg, #1a365d 0%, #4C51BF 25%, #7366BD 50%, #4C51BF 75%, #1a365d 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: `${slideIn} 1s ease-out, ${shine} 5s linear infinite`,
                marginBottom: '2rem',
                position: 'relative',
                overflow: 'hidden',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '-110%',
                  left: '-210%',
                  width: '200%',
                  height: '200%',
                  opacity: 0,
                  transform: 'rotate(30deg)',
                  background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
                  animation: `${shineEffect} 4s ease-in-out infinite`
                }
              }
            }}>
              <H1>AI Risk and Control Framework</H1>
            </Box>

            <Box css={{
              maxWidth: '800px',
              textAlign: 'center',
              opacity: 0,
              animation: `${fadeIn} 1.2s ease-out forwards`,
              animationDelay: '0.7s'
            }}>
              <Text 
                as="p" 
                fontSize="xl"
                css={{
                  marginBottom: '1.5rem',
                  fontWeight: '500',
                  lineHeight: '1.8',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Navigate the journey of AI product development 
                with a guided risk management tool.
              </Text>
              <Text
                as="p"
                fontSize="lg"
                css={{
                  color: '#4A5568',
                  lineHeight: '1.8',
                  opacity: 0,
                  animation: `${fadeIn} 1.2s ease-out forwards`,
                  animationDelay: '1s',
                  '&:hover': {
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Explore stages, guardrails, and principles for safer and ethical AI.
              </Text>
            </Box>
          </Stack>
        </PageContent>
      </Box>

      <Box css={{ 
        background: '#ffffff',
        padding: '2rem'
      }}>
        <PageContent>
          <Box css={{ 
            display: 'grid',
            gridTemplateColumns: ['1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)'],
            gap: '1rem'
          }}>
            {stages.map((stage, index) => (
              <Box key={stage.title}>
                <StageCard
                  title={stage.title}
                  description={stage.description}
                  color={stage.color}
                  number={index + 1}
                  onClick={() => console.log(`Clicked ${stage.title}`)}
                />
              </Box>
            ))}
          </Box>
        </PageContent>
      </Box>
    </AppLayout>
  );
};
