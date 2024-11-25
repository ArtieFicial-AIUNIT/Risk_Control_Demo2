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

          <Card shadow css={{ padding: '2rem' }}>
            <H2>Guardrails</H2>
            <Box css={{ 
              display: 'grid',
              gap: '1rem',
              marginTop: '1.5rem'
            }}>
              {stageInfo.guardrails.map((guardrail, index) => (
                <Card 
                  key={index}
                  css={{
                    padding: '1.5rem',
                    border: `1px solid ${stageInfo.color}20`,
                    '&:hover': {
                      borderColor: stageInfo.color,
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <Text>{guardrail}</Text>
                </Card>
              ))}
            </Box>
          </Card>
        </PageContent>
      </Box>
    </AppLayout>
  );
};

export default StagePage;
