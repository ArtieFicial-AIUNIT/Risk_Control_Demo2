import { useRouter } from 'next/router';
import { AppLayout } from '../../components/AppLayout';
import { PageContent } from '@ag.ds-next/react/content';
import { H1, H2 } from '@ag.ds-next/react/heading';
import { Box } from '@ag.ds-next/react/box';
import { Text } from '@ag.ds-next/react/text';
import { Card } from '@ag.ds-next/react/card';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { DocumentTitle } from '../../components/DocumentTitle';
import { guardrailData } from '../../data/guardrails';
import { Tag } from '@ag.ds-next/react/tags';

// Add helper function for risk level color
const getRiskLevelColor = (level: string) => {
  switch (level) {
    case 'High':
      return '#E53E3E';
    case 'Medium':
      return '#ED8936';
    case 'Low':
      return '#48BB78';
    default:
      return '#718096';
  }
};

const StagePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const stageInfo = guardrailData[id as keyof typeof guardrailData];

  if (!stageInfo) {
    return (
      <AppLayout>
        <PageContent>
          <Box padding={2}>
            <Text>Stage not found</Text>
          </Box>
        </PageContent>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <DocumentTitle title={`${stageInfo.title} Stage`} />
      <Box css={{
        background: 'linear-gradient(135deg, #f6f8fa 0%, #ffffff 100%)',
        padding: '2rem'
      }}>
        <PageContent>
          <Breadcrumbs
            links={[
              { href: '/', label: 'Home' },
              { label: stageInfo.title },
            ]}
          />
          <H1 css={{
            color: stageInfo.color,
            marginTop: '2rem',
            marginBottom: '3rem'
          }}>
            {stageInfo.title} Stage
          </H1>

          <Box css={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {stageInfo.guardrails.map((guardrail, index) => (
              <Card 
                key={index} 
                shadow 
                css={{ 
                  padding: '2rem',
                  border: `1px solid ${stageInfo.color}20`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: stageInfo.color,
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                <Box css={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <H2 css={{ 
                    color: stageInfo.color,
                    margin: 0
                  }}>
                    {guardrail.name}
                  </H2>
                  <Tag 
                    css={{
                      background: `${getRiskLevelColor(guardrail.riskLevel)}20`,
                      color: getRiskLevelColor(guardrail.riskLevel),
                      border: `1px solid ${getRiskLevelColor(guardrail.riskLevel)}40`,
                      fontWeight: 600
                    }}
                  >
                    {guardrail.riskLevel} Risk
                  </Tag>
                </Box>
                
                <Box css={{ marginTop: '1rem' }}>
                  <Text 
                    weight="bold"
                    css={{ 
                      color: '#4A5568',
                      marginBottom: '0.5rem'
                    }}
                  >
                    Associated Risks:
                  </Text>
                  <Box 
                    as="ul" 
                    css={{ 
                      listStyleType: 'none',
                      padding: 0,
                      margin: 0,
                      marginBottom: '2rem'
                    }}
                  >
                    {guardrail.risks.map((risk, riskIndex) => (
                      <Box
                        key={riskIndex}
                        as="li"
                        css={{
                          padding: '0.75rem',
                          marginBottom: '0.5rem',
                          background: `${stageInfo.color}10`,
                          borderLeft: `3px solid ${stageInfo.color}`,
                          borderRadius: '4px',
                          fontSize: '0.95rem',
                          lineHeight: '1.5',
                          color: '#4A5568'
                        }}
                      >
                        {risk}
                      </Box>
                    ))}
                  </Box>

                  <Text 
                    weight="bold"
                    css={{ 
                      color: '#4A5568',
                      marginBottom: '1rem'
                    }}
                  >
                    Control Measures:
                  </Text>
                  <Box 
                    as="ul" 
                    css={{ 
                      listStyleType: 'none',
                      padding: 0,
                      margin: 0
                    }}
                  >
                    {guardrail.controls.map((control, controlIndex) => (
                      <Box
                        key={controlIndex}
                        as="li"
                        css={{
                          padding: '0.75rem',
                          marginBottom: '0.5rem',
                          background: '#F7FAFC',
                          borderLeft: `3px solid ${stageInfo.color}`,
                          borderRadius: '4px',
                          fontSize: '0.95rem',
                          lineHeight: '1.5',
                          color: '#4A5568'
                        }}
                      >
                        {control}
                      </Box>
                    ))}
                  </Box>

                  <Text 
                    weight="bold"
                    css={{ 
                      color: '#4A5568',
                      marginBottom: '1rem',
                      marginTop: '2rem'
                    }}
                  >
                    AI Principles Applied:
                  </Text>
                  <Box 
                    css={{ 
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}
                  >
                    {guardrail.principles.map((principle, principleIndex) => (
                      <Tag
                        key={principleIndex}
                        css={{
                          background: `${stageInfo.color}15`,
                          color: stageInfo.color,
                          border: `1px solid ${stageInfo.color}30`,
                          fontWeight: 500,
                          padding: '0.5rem 1rem',
                          borderRadius: '1rem'
                        }}
                      >
                        {principle}
                      </Tag>
                    ))}
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
        </PageContent>
      </Box>
    </AppLayout>
  );
};

export default StagePage;
