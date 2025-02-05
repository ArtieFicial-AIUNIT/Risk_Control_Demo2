import React, { useState } from 'react';
import { AppLayout } from '../components/AppLayout';
import { PageContent } from '@ag.ds-next/react/content'; // Fixed typo in import
import { DocumentTitle } from '../components/DocumentTitle';
import { Box } from '@ag.ds-next/react/box';
import { H1, H2 } from '@ag.ds-next/react/heading';
import { Card } from '@ag.ds-next/react/card';
import { Text } from '@ag.ds-next/react/text';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const GuardrailAIPage = () => {
  const violationTypes = {
    'Content Filtering': { 
      color: '#FF6B6B', 
      violations: 15,
      description: 'Prevents harmful or non-compliant chatbot responses'
    },
    'Policy Enforcement': { 
      color: '#4ECDC4', 
      violations: 12,
      description: 'Ensures AI responses adhere to BICON and government import regulations'
    },
    'User Behavior Monitoring': { 
      color: '#45B7D1', 
      violations: 8,
      description: 'Detects unusual or risky input patterns'
    },
    'Bias & Fairness Audits': { 
      color: '#96CEB4', 
      violations: 10,
      description: 'Evaluates AI for unintended biases in responses'
    },
    'Data Privacy Controls': { 
      color: '#FFD93D', 
      violations: 14,
      description: 'Ensures AI does not expose sensitive information'
    },
    'Malicious Intent Detection': { 
      color: '#FF9F1C', 
      violations: 6,
      description: 'Identifies users attempting to manipulate AI responses'
    },
    'Misinformation Prevention': { 
      color: '#6C5B7B', 
      violations: 11,
      description: 'Ensures AI does not provide false or misleading import conditions'
    },
    'Automated Fraud Detection': { 
      color: '#355C7D', 
      violations: 9,
      description: 'Detects and flags users seeking loopholes in import policies'
    },
    'Hallucination Detection': { 
      color: '#FF6B6B', 
      violations: 4,
      description: 'Prevents AI from generating misleading or false responses'
    },
    'Data Leakage Prevention': { 
      color: '#4ECDC4', 
      violations: 7,
      description: 'Ensures AI does not expose sensitive or private data'
    },
    'Off-Topic Detection': { 
      color: '#45B7D1', 
      violations: 13,
      description: 'Flags irrelevant or off-topic queries to maintain chatbot focus'
    },
    'Prompt Injection Protection': { 
      color: '#96CEB4', 
      violations: 5,
      description: 'Detects and blocks adversarial prompts attempting to manipulate AI behavior'
    },
    'Prompt Leakage Prevention': { 
      color: '#FFD93D', 
      violations: 3,
      description: 'Avoids unintentional exposure of system instructions or AI logic'
    },
    'Profanity Prevention': { 
      color: '#FF9F1C', 
      violations: 8,
      description: 'Filters inappropriate language in user inputs and AI responses'
    },
    'SQL Security Enforcement': { 
      color: '#6C5B7B', 
      violations: 2,
      description: 'Blocks attempts to inject SQL commands that could compromise system integrity'
    }
  };

  // Calculate totals
  const totalViolations = Object.values(violationTypes).reduce((sum, type) => sum + type.violations, 0);
  const totalUsage = 1250; // Example total usage number

  return (
    <AppLayout>
      <DocumentTitle title="Guardrail AI Monitoring" />
      <PageContent>
        <Box css={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
          {/* Header */}
          <Box css={{
            marginBottom: '2rem',
            padding: '2.5rem 2rem',
            background: 'linear-gradient(135deg, #f6f8fc 0%, #f0f4f8 100%)',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            textAlign: 'center'
          }}>
            <H1 css={{ 
              fontSize: '2.5rem',
              marginBottom: '0.75rem',
              background: 'linear-gradient(120deg, #1a365d 0%, #4C51BF 50%, #1a365d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: `${fadeIn} 0.8s ease-out`
            }}>
              Guardrail Monitoring Dashboard
            </H1>
            <Box css={{
              maxWidth: '600px',
              margin: '0 auto',
              padding: '1rem',
              background: 'rgba(255,255,255,0.7)',
              borderRadius: '8px',
              backdropFilter: 'blur(4px)'
            }}>
              <Text css={{
                fontSize: '1.25rem',
                fontWeight: 500,
                color: '#4A5568',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Information Assistant for Import Condition (IAIC)
              </Text>
            </Box>
          </Box>

          {/* New Stats Cards Section */}
          <Box css={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            margin: '2rem auto 3rem',
            maxWidth: '1000px'
          }}>
            <Card css={{
              padding: '2rem',
              background: '#FFFFFF',
              borderRadius: '16px',
              boxShadow: '0 4px 6px rgba(76, 81, 191, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              overflow: 'hidden',
              position: 'relative',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 12px 20px rgba(76, 81, 191, 0.15)'
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #4C51BF, #6B46C1)'
              }
            }}>
              <Box css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <Box>
                  <Text css={{ 
                    fontSize: '3rem', 
                    fontWeight: 'bold',
                    color: '#4C51BF',
                    lineHeight: '1',
                    marginBottom: '0.5rem'
                  }}>
                    {totalUsage}
                  </Text>
                  <Text css={{ 
                    fontSize: '1.1rem',
                    color: '#4A5568',
                    letterSpacing: '0.05em'
                  }}>
                    Total IAIC Usage
                  </Text>
                </Box>
                <Box css={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  background: '#4C51BF10',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4C51BF'
                }}>
                  {/* Add icon here if needed */}
                </Box>
              </Box>
              <Box css={{
                marginTop: '1.5rem',
                padding: '0.75rem',
                background: '#F7FAFC',
                borderRadius: '8px',
                fontSize: '0.875rem',
                color: '#718096'
              }}>
                Daily active users: {Math.round(totalUsage/30)}
              </Box>
            </Card>

            <Card css={{
              padding: '2rem',
              background: '#FFFFFF',
              borderRadius: '16px',
              boxShadow: '0 4px 6px rgba(245, 101, 101, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              overflow: 'hidden',
              position: 'relative',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 12px 20px rgba(245, 101, 101, 0.15)'
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #F56565, #C53030)'
              }
            }}>
              <Box css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <Box>
                  <Text css={{ 
                    fontSize: '3rem', 
                    fontWeight: 'bold',
                    color: '#F56565',
                    lineHeight: '1',
                    marginBottom: '0.5rem'
                  }}>
                    {totalViolations}
                  </Text>
                  <Text css={{ 
                    fontSize: '1.1rem',
                    color: '#4A5568',
                    letterSpacing: '0.05em'
                  }}>
                    Total Violations
                  </Text>
                </Box>
                <Box css={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  background: '#F5656510',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F56565'
                }}>
                  {/* Add icon here if needed */}
                </Box>
              </Box>
              <Box css={{
                marginTop: '1.5rem',
                padding: '0.75rem',
                background: '#F7FAFC',
                borderRadius: '8px',
                fontSize: '0.875rem',
                color: '#718096'
              }}>
                Violation rate: {((totalViolations/totalUsage) * 100).toFixed(1)}%
              </Box>
            </Card>
          </Box>

          {/* Violation Summary Card */}
          <Card css={{ 
            padding: '2rem',
            animation: `${fadeIn} 0.5s ease-out forwards`,
            background: '#FFFFFF',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            borderRadius: '12px',
            opacity: 0
          }}>
            <Box css={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem'
            }}>
              <H2 css={{ 
                margin: 0,
                color: '#2D3748',
                fontSize: '1.5rem'
              }}>
                Daily Violation Summary
              </H2>
              <Text css={{ color: '#718096' }}>
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </Text>
            </Box>

            {/* Redesigned Violation Cards */}
            <Box css={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {Object.entries(violationTypes).map(([type, data], index) => (
                <Card
                  key={index}
                  css={{
                    padding: 0,
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
                    }
                  }}
                >
                  <Box css={{
                    padding: '1rem',
                    background: `${data.color}10`,
                    borderBottom: `2px solid ${data.color}`
                  }}>
                    <Text css={{ 
                      fontWeight: '600',
                      color: data.color,
                      fontSize: '1.1rem'
                    }}>
                      {type}
                    </Text>
                  </Box>
                  
                  <Box css={{ padding: '1.25rem' }}>
                    <Text css={{ 
                      color: '#4A5568',
                      fontSize: '0.9rem',
                      lineHeight: '1.5',
                      marginBottom: '1rem'
                    }}>
                      {data.description}
                    </Text>
                    
                    <Box css={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginTop: 'auto'
                    }}>
                      <Box css={{ 
                        flex: 1,
                        height: '6px',
                        background: '#EDF2F7',
                        borderRadius: '3px',
                        overflow: 'hidden'
                      }}>
                        <Box css={{
                          width: `${(data.violations / totalViolations) * 100}%`,
                          height: '100%',
                          background: data.color,
                          transition: 'width 0.3s ease',
                          boxShadow: `0 0 8px ${data.color}40`
                        }} />
                      </Box>
                      <Box css={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '999px',
                        background: `${data.color}20`,
                        color: data.color,
                        fontSize: '0.875rem',
                        fontWeight: '600'
                      }}>
                        {data.violations}/{totalViolations}
                      </Box>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Box>
          </Card>
        </Box>
      </PageContent>
    </AppLayout>
  );
};

export default GuardrailAIPage;