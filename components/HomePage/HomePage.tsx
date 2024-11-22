import { PageContent } from '@ag.ds-next/react/content'; 
import { Prose } from '@ag.ds-next/react/prose';
import { H1, H2 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { Box, Stack } from '@ag.ds-next/react/box';
import { AppLayout } from '../AppLayout';

export const HomePage = () => {
  return (
    <AppLayout>
      <Box css={{ padding: '3rem 2rem' }}>
        <PageContent>
          <Stack gap={2} alignItems="center">
            {/* Title section - keeping existing animations */}
            <Box css={{
              textAlign: 'center',
              maxWidth: '1000px',
              '& h1': {
                fontSize: ['3rem', '3.5rem', '4rem'], // Responsive font sizes
                fontWeight: '700',
                background: 'linear-gradient(120deg, #1a365d 0%, #4C51BF 25%, #7366BD 50%, #4C51BF 75%, #1a365d 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'slideIn 1s ease-out, shine 5s linear infinite',
                marginBottom: '2rem',
                position: 'relative',
                overflow: 'hidden',
                '@keyframes slideIn': {
                  from: { transform: 'translateY(-20px)', opacity: 0 },
                  to: { transform: 'translateY(0)', opacity: 1 }
                },
                '@keyframes shine': {
                  to: { backgroundPosition: '200% center' }
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '-110%',
                  left: '-210%',
                  width: '200%',
                  height: '200%',
                  opacity: 0,
                  transform: 'rotate(30deg)',
                  background: 'linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0.3) 50%,rgba(255,255,255,0) 100%)',
                  animation: 'shineEffect 4s ease-in-out infinite',
                },
                '@keyframes shineEffect': {
                  '10%': {
                    opacity: 1,
                    top: '-30%',
                    left: '-30%',
                    transition: '0.3s',
                  },
                  '100%': {
                    opacity: 0,
                    top: '-30%',
                    left: '100%',
                  }
                }
              }
            }}>
              <H1>AI Risk and Control Framework</H1>
            </Box>

            {/* Subtitle section with enhanced animations */}
            <Box css={{
              maxWidth: '800px',
              textAlign: 'center',
              opacity: 0,
              animation: 'fadeIn 1.2s ease-out forwards',
              animationDelay: '0.7s',
              padding: '0 1.5rem',
              '& > *': {
                marginBottom: '2rem'
              },
              '@keyframes fadeIn': {
                from: { opacity: 0, transform: 'translateY(20px)' },
                to: { opacity: 1, transform: 'translateY(0)' }
              }
            }}>
              <Text 
                as="p" 
                fontSize={['lg', 'xl', 'xl']}
                css={{
                  fontWeight: '500',
                  lineHeight: '1.8',
                  color: '#2D3748',
                  marginBottom: '1.5rem',
                  letterSpacing: '0.02em',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#1A365D',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Navigate the journey of AI product development 
                with a guided risk management tool.
              </Text>
              <Text
                as="p"
                fontSize={['md', 'lg', 'lg']}
                css={{
                  color: '#4A5568',
                  lineHeight: '1.8',
                  transition: 'all 0.3s ease',
                  opacity: 0,
                  animation: 'fadeIn 1.2s ease-out forwards 1s',
                  '&:hover': {
                    color: '#2D3748',
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
    </AppLayout>
  );
};
