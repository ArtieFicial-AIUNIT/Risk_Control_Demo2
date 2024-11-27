import { useState } from 'react';
import { AppLayout } from '../components/AppLayout';
import { PageContent } from '@ag.ds-next/react/content';
import { DocumentTitle } from '../components/DocumentTitle';
import { H1 } from '@ag.ds-next/react/heading';
import { Textarea } from '@ag.ds-next/react/textarea';
import { Button } from '@ag.ds-next/react/button';
import { Box } from '@ag.ds-next/react/box';
import { Text } from '@ag.ds-next/react/text';
import { Card } from '@ag.ds-next/react/card';
import { useRouter } from 'next/router';
import { keyframes } from '@emotion/react';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(76, 81, 191, 0.4); }
  70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(76, 81, 191, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(76, 81, 191, 0); }
`;

const BusinessCasePage = () => {
  const [businessCase, setBusinessCase] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (businessCase.trim().length === 0) {
      setError('Please enter your business case');
      return;
    }

    if (businessCase.trim().split(/\s+/).length > 200) {
      setError('Please keep your business case under 200 words');
      return;
    }

    // Here you could store the business case in your application state
    // For now, we'll just redirect to the assessment page
    router.push('/assessment');
  };

  const wordCount = businessCase.trim().split(/\s+/).length;

  return (
    <AppLayout>
      <DocumentTitle title="Business Case Analysis" />
      <Box css={{
        background: 'linear-gradient(135deg, #f6f8fa 0%, #ffffff 100%)',
        minHeight: '100vh',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 30%, rgba(76, 81, 191, 0.05) 0%, transparent 50%)',
          zIndex: 0
        }
      }}>
        <PageContent>
          <Box css={{ 
            maxWidth: '1200px', // Increased from 800px
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
            animation: `${fadeIn} 0.5s ease-out`
          }}>
            <Card css={{ 
              padding: '3rem', // Increased padding
              borderRadius: '24px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              border: '1px solid rgba(76, 81, 191, 0.1)',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}>
              <Box css={{ 
                textAlign: 'center',
                marginBottom: '2.5rem',
                position: 'relative'
              }}>
                <H1 css={{
                  background: 'linear-gradient(120deg, #1a365d, #4C51BF)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '1rem',
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '25%',
                    width: '50%',
                    height: '4px',
                    background: 'linear-gradient(90deg, transparent, rgba(76, 81, 191, 0.5), transparent)',
                    borderRadius: '2px'
                  }
                }}>
                  Business Case Analysis
                </H1>
                <Text as="p" css={{ 
                  color: '#4A5568',
                  maxWidth: '600px',
                  margin: '2rem auto',
                  lineHeight: '1.8',
                  animation: `${float} 3s ease-in-out infinite`
                }}>
                  Please describe your AI project's business case in 200 words or less. 
                  Include the problem you're trying to solve, your proposed AI solution, 
                  and expected outcomes.
                </Text>
              </Box>

              {/* Two Column Layout */}
              <Box css={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr', // Create two equal columns
                gap: '3rem',
                marginBottom: '2rem',
              }}>
                {/* Left Column - Guidelines */}
                <Box css={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  padding: '2rem',
                  background: 'rgba(76, 81, 191, 0.03)',
                  borderRadius: '16px',
                  border: '1px solid rgba(76, 81, 191, 0.1)',
                }}>
                  <Text weight="bold" css={{ color: '#1a365d', fontSize: '1.2rem' }}>
                    Business Case Guidelines
                  </Text>
                  <Box as="ul" css={{ 
                    listStyle: 'none', 
                    padding: 0,
                    margin: 0,
                    '& li': {
                      position: 'relative',
                      paddingLeft: '1.5rem',
                      marginBottom: '1rem',
                      '&::before': {
                        content: '"→"',
                        position: 'absolute',
                        left: 0,
                        color: '#4C51BF',
                      }
                    }
                  }}>
                    <li>Define the problem your AI solution addresses</li>
                    <li>Explain your proposed AI implementation</li>
                    <li>Outline expected outcomes and benefits</li>
                    <li>Consider potential stakeholders</li>
                    <li>Highlight any unique technical requirements</li>
                  </Box>
                </Box>

                {/* Right Column - Input Area */}
                <Box css={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-15px',
                    left: '-15px',
                    right: '-15px',
                    bottom: '-15px',
                    border: '2px solid rgba(76, 81, 191, 0.1)',
                    borderRadius: '16px',
                    pointerEvents: 'none'
                  }
                }}>
                  <Textarea
                    label="Business Case Description"
                    hint="Maximum 200 words"
                    value={businessCase}
                    onChange={(e) => {
                      setBusinessCase(e.target.value);
                      setError('');
                    }}
                    maxLength={2000}
                    rows={12} // Increased from 8
                    css={{
                      '& textarea': {
                        border: error ? '2px solid #E53E3E' : '2px solid rgba(76, 81, 191, 0.2)',
                        borderRadius: '16px', // Increased from 12px
                        padding: '2rem', // Increased from 1.5rem
                        fontSize: '1.2rem', // Increased from 1.1rem
                        lineHeight: '1.8',
                        minHeight: '300px', // Added minimum height
                        transition: 'all 0.3s ease',
                        background: 'rgba(255, 255, 255, 0.8)',
                        width: '100%', // Ensure full width
                        '&:hover': {
                          borderColor: '#4C51BF',
                          background: 'rgba(255, 255, 255, 0.95)'
                        },
                        '&:focus': {
                          borderColor: '#4C51BF',
                          boxShadow: '0 0 0 3px rgba(76, 81, 191, 0.2)',
                          background: 'white'
                        }
                      },
                      '& label': {
                        fontSize: '1.2rem', // Increased label size
                        marginBottom: '1rem' // Added more space below label
                      },
                      '& .hint': {
                        fontSize: '1rem', // Increased hint size
                        marginBottom: '1rem' // Added more space below hint
                      }
                    }}
                  />
                </Box>
              </Box>

              <Box css={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem',
                padding: '1rem',
                background: 'rgba(76, 81, 191, 0.05)',
                borderRadius: '12px'
              }}>
                <Text css={{ 
                  color: wordCount > 200 ? '#E53E3E' : '#4A5568',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span css={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: wordCount > 200 ? '#E53E3E' : '#4C51BF',
                    animation: wordCount > 0 ? `${pulse} 2s infinite` : 'none'
                  }} />
                  Word count: {wordCount}/200
                </Text>
                {error && (
                  <Text css={{ 
                    color: '#E53E3E',
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span>⚠️</span>
                    {error}
                  </Text>
                )}
              </Box>

              <Box css={{ 
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '1rem'
              }}>
                <Button
                  variant="secondary"
                  onClick={() => router.push('/')}
                  css={{
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleSubmit}
                  css={{
                    background: 'linear-gradient(135deg, #4C51BF, #6B46C1)',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(76, 81, 191, 0.3)'
                    }
                  }}
                >
                  Proceed to Risk Assessment
                </Button>
              </Box>
            </Card>
          </Box>
        </PageContent>
      </Box>
    </AppLayout>
  );
};

export default BusinessCasePage;
