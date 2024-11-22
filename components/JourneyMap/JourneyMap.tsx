import { Box } from '@ag.ds-next/react/box';
import { Text } from '@ag.ds-next/react/text';
import { keyframes } from '@emotion/react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stages = [
  { name: 'Design', color: '#4299E1' },
  { name: 'Data', color: '#48BB78' },
  { name: 'Training', color: '#ED8936' },
  { name: 'Test', color: '#9F7AEA' },
  { name: 'Integrate', color: '#F56565' },
  { name: 'Deploy', color: '#38B2AC' },
  { name: 'Monitor', color: '#667EEA' },
  { name: 'Decommission', color: '#718096' }
];

// Define keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const popIn = keyframes`
  from { transform: scale(0.5); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

// Enhanced keyframes
const glowEffect = keyframes`
  0% { box-shadow: 0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3) }
  50% { box-shadow: 0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.5) }
  100% { box-shadow: 0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3) }
`;

export const JourneyMap = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <Box css={{
      width: '100%',
      maxWidth: '100%', // Changed from 1400px
      margin: '4rem auto',
      padding: '2rem 0', // Removed horizontal padding
      opacity: 1, // Changed from 0
      animation: `${fadeIn} 0.5s ease-out`,
      position: 'relative' // Added position relative
    }}>
      <motion.div
        style={{
          width: '100%',
          cursor: 'grab',
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
      >
        <Box css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          width: '100%', // Changed from minWidth
          margin: '0 auto',
          gap: '0.5rem', // Added small gap
          padding: '0 2rem', // Added padding instead of absolute positioning
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '8%', // Adjusted line position
            right: '8%', // Adjusted line position
            height: '3px',
            background: 'linear-gradient(90deg, #E2E8F0 0%, #CBD5E0 100%)',
            zIndex: 0,
            opacity: 0.3, // Added for better visibility
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '8%',
            height: '3px',
            background: 'linear-gradient(90deg, #4299E1, #48BB78, #ED8936, #9F7AEA, #F56565, #38B2AC, #667EEA, #718096)',
            zIndex: 0,
            width: activeStage !== null ? `${(activeStage + 1) * (84/8)}%` : '0%',
            transition: 'width 0.5s ease-out',
          }
        }}>
          {stages.map((stage, index) => (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1 
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                onClick={() => setActiveStage(index)}
                css={{
                  position: 'relative',
                  width: ['60px', '80px', '100px'], // Made size responsive
                  height: ['60px', '80px', '100px'], // Made size responsive
                  marginTop: '2rem', // Add margin to make room for number on top
                  background: 'white',
                  border: '2px solid',
                  borderColor: stage.color,
                  borderRadius: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  animation: activeStage === index 
                    ? `${glowEffect} 2s infinite` 
                    : `${popIn} 0.5s ease-out forwards ${index * 0.1}s`,
                  opacity: 1, // Remove opacity: 0
                  zIndex: 1,
                  
                  '@keyframes popIn': {
                    from: { transform: 'scale(0.5)', opacity: 0 },
                    to: { transform: 'scale(1)', opacity: 1 }
                  },

                  '&:hover': {
                    boxShadow: `0 0 30px ${stage.color}80`,
                    background: stage.color,
                    zIndex: 2,
                    '& p': { color: 'white' },
                    '& .stage-number': {
                      opacity: 1,
                      transform: 'translateY(0)'
                    },
                    '& ~ div::before': {
                      background: `linear-gradient(90deg, ${stage.color}, transparent)`,
                    }
                  },
                  '&::after': index < stages.length - 1 ? {
                    content: '""',
                    position: 'absolute',
                    right: '-100%',
                    top: '50%',
                    width: '100%',
                    height: '3px',
                    background: activeStage >= index ? stage.color : '#E2E8F0',
                    transition: 'background 0.3s ease',
                    zIndex: 0,
                  } : {}
                }}
              >
                <AnimatePresence>
                  {activeStage === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${stage.color}40 0%, transparent 70%)`,
                        zIndex: -1,
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Stage number */}
                <Box
                  css={{
                    position: 'absolute',
                    top: '-2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    opacity: 1,
                    zIndex: 2,
                    '.stage-number': {
                      background: stage.color,
                      color: 'white',
                      borderRadius: '50%',
                      width: '1.5rem',
                      height: '1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <div className="stage-number">{index + 1}</div>
                </Box>

                {/* Stage name */}
                <Text
                  as="p"
                  fontSize={['xs', 'sm', 'sm']} // Made font size responsive
                  css={{
                    color: stage.color,
                    fontWeight: '600',
                    textAlign: 'center',
                    margin: 0,
                    transition: 'color 0.3s ease',
                  }}
                >
                  {stage.name}
                </Text>
              </Box>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};
