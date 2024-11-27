import { useState } from 'react';
import { AppLayout } from '../components/AppLayout';
import { PageContent } from '@ag.ds-next/react/content';
import { DocumentTitle } from '../components/DocumentTitle';
import { H1, H2 } from '@ag.ds-next/react/heading';
import { Textarea } from '@ag.ds-next/react/textarea';
import { Button } from '@ag.ds-next/react/button';
import { Box } from '@ag.ds-next/react/box';
import { Text } from '@ag.ds-next/react/text';
import { Card } from '@ag.ds-next/react/card';
import { Tag } from '@ag.ds-next/react/tags';
import { useRouter } from 'next/router';
import { keyframes } from '@emotion/react';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { guardrailData } from '../data/guardrails';
import dynamic from 'next/dynamic';

// Dynamically import Modal with no SSR
const Modal = dynamic(() => import('@ag.ds-next/react/modal').then(mod => mod.Modal), {
  ssr: false
});

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
  const [businessCase, setBusinessCase] = useState<string>(
    "This project employs generative AI to streamline the process of accessing regulatory information for biosecurity importation conditions. Simplify compliance with Australian biosecurity and safety standards, thus supporting trade and safeguarding the nation's biosecurity. The implementation to incorporate publicly available data and text to improve the processing and dissemination of complex import conditions."
  );
  const [error, setError] = useState('');
  const [selectedStages, setSelectedStages] = useState<string[]>(['design', 'data', 'training']);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showUsagePattern, setShowUsagePattern] = useState(false); // Changed to false initially
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

    if (selectedStages.length === 0) {
      setError('Please select at least one stage');
      return;
    }

    setShowUsagePattern(true); // Show usage pattern modal after validation
  };

  const handleStageToggle = (stage: string) => {
    setSelectedStages(prev => 
      prev.includes(stage) 
        ? prev.filter(s => s !== stage)
        : [...prev, stage]
    );
    setShowUsagePattern(false); // Hide modal when changing stages
  };

  const handleProceed = () => {
    handleFinalNavigation();
  };

  const handleFinalNavigation = () => {
    router.push({
      pathname: '/assessment',
      query: { stages: selectedStages.join(',') }
    });
  };

  const handleUsagePatternConfirm = () => {
    setShowUsagePattern(false);
    setShowConfirmation(true);
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
                marginBottom: '3rem',
                position: 'relative'
              }}>
                <H1 css={{
                  background: 'linear-gradient(120deg, #1a365d, #4C51BF)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '2.5rem',
                  marginBottom: '0',
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
              </Box>

              <Box css={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '3rem',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '25%',
                  left: '0',
                  right: '0',
                  height: '2px',
                  background: 'rgba(76, 81, 191, 0.1)',
                  zIndex: 0
                }
              }}>
                {['Select Stages', 'Describe Case'].map((step, index) => (
                  <Box key={step} css={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    flex: 1,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <Box css={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: index + 1 <= (selectedStages.length > 0 ? 2 : 1) ? '#4C51BF' : 'white',
                      border: '2px solid #4C51BF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: index + 1 <= (selectedStages.length > 0 ? 2 : 1) ? 'white' : '#4C51BF',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease'
                    }}>
                      {index + 1}
                    </Box>
                    <Text css={{
                      color: index + 1 <= (selectedStages.length > 0 ? 2 : 1) ? '#4C51BF' : '#718096',
                      fontWeight: 'medium',
                      fontSize: '0.9rem'
                    }}>
                      {step}
                    </Text>
                  </Box>
                ))}
              </Box>

              {/* Step 1: Stage Selection */}
              <Card css={{
                marginBottom: '3rem',
                padding: '2rem',
                background: 'white',
                borderRadius: '16px',
                border: '1px solid rgba(76, 81, 191, 0.1)',
                boxShadow: '0 4px 12px rgba(76, 81, 191, 0.05)'
              }}>
                <Text weight="bold" css={{ 
                  marginBottom: '1.5rem',
                  fontSize: '1.2rem',
                  color: '#1a365d'
                }}>
                  Step 1: Select AI Development Stages
                </Text>
                <Box css={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                  gap: '1rem'
                }}>
                  {Object.entries(guardrailData).map(([stage, data]) => (
                    <Card 
                      key={stage} 
                      css={{
                        padding: '1rem',
                        background: selectedStages.includes(stage) ? 'rgba(76, 81, 191, 0.1)' : 'white',
                        border: `1px solid ${selectedStages.includes(stage) ? '#4C51BF' : '#E2E8F0'}`,
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(76, 81, 191, 0.1)'
                        }
                      }}
                      onClick={() => handleStageToggle(stage)}
                    >
                      <Checkbox
                        checked={selectedStages.includes(stage)}
                        onChange={() => handleStageToggle(stage)}
                        label=""
                      />
                      <Text weight="bold" css={{ 
                        color: data.color,
                        flex: 1
                      }}>
                        {data.title}
                      </Text>
                    </Card>
                  ))}
                </Box>
              </Card>

              {/* Step 2: Business Case */}
              <Card css={{
                marginBottom: '2rem',
                padding: '2rem',
                background: 'white',
                borderRadius: '16px',
                border: '1px solid rgba(76, 81, 191, 0.1)',
                boxShadow: '0 4px 12px rgba(76, 81, 191, 0.05)'
              }}>
                <Text weight="bold" css={{ 
                  marginBottom: '1.5rem',
                  fontSize: '1.2rem',
                  color: '#1a365d'
                }}>
                  Step 2: Describe Your Business Case
                </Text>

                <Box css={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2rem'
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
              </Card>

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

      {/* Usage Pattern Modal */}
      <Modal
        isOpen={showUsagePattern}
        onClose={() => null} // Remove close functionality from modal
        title={
          <Box css={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
          }}>
            <H2 css={{ 
              fontSize: '1.5rem',
              margin: 0,
              background: 'linear-gradient(120deg, #1a365d, #4C51BF)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Review Solution Details
            </H2>
            <Button
              variant="text"
              onClick={() => setShowUsagePattern(false)}
              css={{ color: '#4A5568' }}
            >
            
            </Button>
          </Box>
        }
      >
        <Box css={{ 
          maxHeight: '70vh', 
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#F7FAFC',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#CBD5E0',
            borderRadius: '4px',
            '&:hover': {
              background: '#A0AEC0'
            }
          }
        }}>
          <Box css={{ 
            marginBottom: '2rem',
            animation: `${fadeIn} 0.3s ease-out`
          }}>
            <Card css={{ 
              padding: '2rem',
              marginBottom: '2rem', 
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              border: '1px solid rgba(76, 81, 191, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 24px rgba(76, 81, 191, 0.1)'
              }
            }}>
              <H2 css={{ 
                fontSize: '1.2rem',
                marginBottom: '1.5rem', 
                color: '#1a365d',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                '&::before': {
                  content: '"📋"',
                  fontSize: '1.4rem'
                }
              }}>
                Usage pattern
              </H2>
              <Box as="ul" css={{ 
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gap: '1.5rem',
                '& > li': {
                  padding: '1.5rem',
                  background: '#F7FAFC',
                  borderRadius: '12px',
                  border: '1px solid rgba(76, 81, 191, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(4px)',
                    boxShadow: '0 4px 12px rgba(76, 81, 191, 0.05)'
                  }
                }
              }}>
                <li>
                  <Text css={{ fontWeight: 'bold', color: '#2D3748' }}>Service Delivery: </Text>
                  <Text>Solution aims to improve the processing and dissemination of complex export/import conditions, which can automate and streamline workflows, enhance communication, and support decision-making processes.</Text>
                </li>
                <li>
                  <Text css={{ fontWeight: 'bold', color: '#2D3748' }}>Analytics for Insights: </Text>
                  <Text>The generative AI can analyse and synthesise publicly available data and text to provide insights and generate relevant information for stakeholders.</Text>
                </li>
                <li>
                  <Text css={{ fontWeight: 'bold', color: '#2D3748' }}>Decision Making and Administrative Action: </Text>
                  <Text>The solution provides recommendations on import conditions.</Text>
                </li>
                <li>
                  <Text css={{ fontWeight: 'bold', color: '#2D3748' }}>Policy and Legal: </Text>
                  <Text>The solutions support the analysis of policies and legal documents related to export/import conditions, providing advice and assurance on their impact and ensuring consistency with existing laws.</Text>
                </li>
              </Box>
            </Card>
          </Box>
          
          <Box css={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            gap: '1rem', 
            marginTop: '2rem',
            borderTop: '1px solid #E2E8F0',
            paddingTop: '1.5rem'
          }}>
            <Button 
              onClick={handleUsagePatternConfirm}
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
              Continue to Risk Analysis
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        title={
          <Box css={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
          }}>
            <H2 css={{ 
              fontSize: '1.5rem',
              margin: 0,
              background: 'linear-gradient(120deg, #E53E3E, #F56565)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              '&::before': {
                content: '"⚠️"',
                fontSize: '1.4rem',
                WebkitTextFillColor: 'initial'
              }
            }}>Important Risk Considerations</H2>
            <Button
              variant="text"
              onClick={() => setShowConfirmation(false)}
              css={{ color: '#4A5568' }}
            ></Button>
          </Box>
        }
      >
        <Box css={{ 
          maxHeight: '70vh', 
          overflowY: 'auto',
          padding: '1rem',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#F7FAFC',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#CBD5E0',
            borderRadius: '4px',
            '&:hover': {
              background: '#A0AEC0'
            }
          }
        }}>
         
          
          {selectedStages.map(stage => (
            <Box key={stage} css={{ 
              marginBottom: '2rem',
              animation: `${fadeIn} 0.3s ease-out`
            }}>
              <H2 css={{ 
                color: guardrailData[stage].color,
                fontSize: '1.4rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                '&::after': {
                  content: '""',
                  flex: 1,
                  height: '2px',
                  background: `linear-gradient(90deg, ${guardrailData[stage].color}20, transparent)`
                }
              }}>{guardrailData[stage].title}</H2>
              {guardrailData[stage].guardrails.map((guardrail, index) => (
                <Card key={index} css={{ 
                  marginTop: '1rem',
                  padding: '1.5rem',
                  border: '1px solid rgba(76, 81, 191, 0.1)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(76, 81, 191, 0.1)'
                  }
                }}>
                  <Text weight="bold" css={{ 
                    fontSize: '1.1rem',
                    color: '#2D3748',
                    marginBottom: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    {guardrail.name}
                    <Tag css={{
                      background: guardrail.riskLevel === 'High' ? '#FED7D7' 
                        : guardrail.riskLevel === 'Medium' ? '#FEEBC8' 
                        : '#C6F6D5',
                      color: guardrail.riskLevel === 'High' ? '#C53030'
                        : guardrail.riskLevel === 'Medium' ? '#C05621'
                        : '#2F855A'
                    }}>
                      {guardrail.riskLevel} Risk
                    </Tag>
                  </Text>
                  <Box as="ul" css={{ 
                    marginTop: '0.5rem',
                    listStyle: 'none',
                    padding: 0
                  }}>
                    {guardrail.risks.map((risk, rIndex) => (
                      <Box as="li" key={rIndex} css={{ 
                        marginBottom: '0.75rem',
                        paddingLeft: '1.5rem',
                        position: 'relative',
                        color: '#4A5568',
                        lineHeight: '1.6',
                        '&::before': {
                          content: '"•"',
                          position: 'absolute',
                          left: 0,
                          color: guardrailData[stage].color,
                          fontWeight: 'bold'
                        }
                      }}>
                        {risk}
                      </Box>
                    ))}
                  </Box>
                </Card>
              ))}
            </Box>
          ))}
          
          {/* Modal Footer with Buttons */}
          <Box css={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            gap: '1rem', 
            marginTop: '2rem',
            borderTop: '1px solid #E2E8F0',
            paddingTop: '1.5rem'
          }}>
            <Button variant="secondary" onClick={() => {
              setShowConfirmation(false);
              setShowUsagePattern(true);
            }}>
              Back
            </Button>
            <Box css={{ display: 'flex', gap: '1rem' }}>
              <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
                Close
              </Button>
              <Button 
                variant="secondary" 
                onClick={() => router.push('/assessment')}
                css={{
                  background: '#F7FAFC',
                  borderColor: '#4C51BF',
                  color: '#4C51BF',
                  '&:hover': {
                    background: '#EDF2F7',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(76, 81, 191, 0.1)'
                  }
                }}
              >
                Complete Risk Assessment Report
              </Button>
              <Button 
                onClick={handleProceed}
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
                Continue with Selected Stages
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </AppLayout>
  );
};
export default BusinessCasePage;
