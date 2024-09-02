// import React from 'react';
// import { Box, Text, Flex, VStack, Circle } from '@chakra-ui/react';
import React from 'react';
import { Box, Text, Flex, VStack, Circle, Stack, Divider } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';
import content from '../../data/content.json'; 

// npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
// npm install @chakra-ui/icons
// Sample JSON data

function getRandomLightColor() {
    // Define an array of 10 light colors
    const lightColors = [
      '#FFCDD2', // light red
      '#F8BBD0', // light pink
      '#E1BEE7', // light purple
      '#D1C4E9', // light deep purple
      '#C5CAE9', // light indigo
      '#BBDEFB', // light blue
      '#B3E5FC', // light light blue
      '#B2EBF2', // light cyan
      '#B2DFDB', // light teal
      '#C8E6C9'  // light green
    ];
  
    // Randomly select one color from the array
    const randomIndex = Math.floor(Math.random() * lightColors.length);
  
    // Return the randomly selected color
    return lightColors[randomIndex];
  }


  function getRandomDarkColor() {
    // Define an array of 10 light colors
    const darkColors = [
        '#3E2723', // dark brown
        '#212121', // dark grey
        '#1B5E20', // dark green
        '#0D47A1', // dark blue
        '#311B92', // dark purple
        '#880E4F', // dark pink
        '#BF360C', // dark orange
        '#263238', // dark blue grey
        '#004D40', // dark teal
        '#1A237E'  // dark indigo
      ];
  
    // Randomly select one color from the array
    const randomIndex = Math.floor(Math.random() * darkColors.length);
  
    // Return the randomly selected color
    return darkColors[randomIndex];
  }


const colors = [
  'red.200', 'blue.200', 'green.200', 'yellow.200', 'purple.200', 
  'orange.200', 'teal.200', 'pink.200', 'cyan.200', 'lime.200'
];

const SpecialBoundingBox = ({ text, color }) => {
  return (
    <Flex justify="center" align="center" w="100%" p={4}>
      <VStack
        spacing={4}
        p={4}
        bg={color}
        borderRadius="full"
        w="400px"
        minH="150px"
        textAlign="center"
        boxShadow="xl"
      >
        <Text fontWeight="bold" fontSize="lg">
          {text}
        </Text>
      </VStack>
    </Flex>
  );
};

// Updated SkillPlanImproved Component
const SkillPlanImproved = ({ category, color, alignLeft }) => {
  const gradient = `linear(to-b, ${color}.100, ${color}.200)`;
  const inner_box_color = getRandomDarkColor();
  return (
    <Flex
      direction="column"
      align={alignLeft ? "flex-start" : "flex-end"}
      w="50%"
      p={4}
      mb={5}
      ml={alignLeft ? 0 : -4}
    >
    <VStack
    //   spacing={6}
    //   p={6}
    //   bgGradient="linear(to-b, pink.100, pink.200)"
    //   borderRadius="3xl"
    //   w="350px"
    //   minH="100px"
    //   textAlign="left"
    //   boxShadow="2xl"
    //   color="gray.700"
    //   _hover={{ boxShadow: 'dark-lg', transform: 'scale(1.02)', transition: '0.3s ease-in-out' }}
    //   transition="0.3s ease-in-out"

        spacing={4}
        p={4}
        bg={color}
        borderRadius="full"
        w="300px"
        minH="200px"
        textAlign="center"
        boxShadow="xl"
        _hover={{ boxShadow: 'dark-lg', transform: 'scale(1.02)', transition: '0.3s ease-in-out' }}
        bgGradient={gradient}
        transition="0.3s ease-in-out"
      >
      {category.skills.map((skill, idx) => (
        <Box key={idx} w="full">
          <Text
            fontWeight="bold"
            fontSize="lg"
            mb={3}
            color="gray.900"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
          >
            {skill.skill}
          </Text>
          <VStack spacing={3} align="start" bg="white" p={4} borderRadius="lg" boxShadow="md">
            {skill.courses.map((course, idy) => (
              <Box
                key={idy}
                w="full"
                p={2}
                color="white"
                bg={inner_box_color}
                _hover={{ color: 'black', bg: 'gray.100', transform: 'translateX(5px)', transition: '0.2s ease-in-out' }}
                borderRadius="md"
              >
                <Text fontSize="sm">
                  {course.title} - <Text as="span" fontWeight="bold" color="green.600">{course.price}</Text>
                </Text>
              </Box>
            ))}
          </VStack>
          {idx < category.skills.length - 1 && <Divider mt={4} />}
        </Box>
      ))}
    </VStack>
    </Flex>
  );
};

const CurvedArrow = ({ alignLeft }) => {
  const pathD = alignLeft
    ? "M 0 0 C 0 100, 100 200, 500 300"  // Adjusted to create a curved path
    : "M 500 0 C 500 100, 400 200, 0 300"; // Adjusted to create a curved path
  return (
    <svg width="500" height="300">
        <defs>
        <linearGradient id="rainbowGradient" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="red" />
          <stop offset="17%" stopColor="orange" />
          <stop offset="33%" stopColor="yellow" />
          <stop offset="50%" stopColor="green" />
          <stop offset="67%" stopColor="blue" />
          <stop offset="83%" stopColor="indigo" />
          <stop offset="100%" stopColor="violet" />
        </linearGradient>
      </defs>
      <path d={pathD} stroke="url(#rainbowGradient)" strokeWidth="2" fill="none" />
    </svg>
  );
};



const SkillPlanWithArrows = () => {


  const { skillsToPursue } = content;
  return (
    <Stack align="center" spacing={5}>
      {/* Special bounding box at the top */}
      <SpecialBoundingBox text="Current Version of Jesse" color="gray.300" />
      

      {skillsToPursue.map((category, index) => (
        <React.Fragment key={index}>
          <SkillPlanImproved
            category={category}
            color={colors[index % colors.length]}
            alignLeft={index % 2 === 0}
          />
          {index < skillsToPursue.length - 1 && (
            <CurvedArrow alignLeft={index % 2 === 0} />
          )}
        </React.Fragment>
      ))}

      {/* Special bounding box at the bottom */}
      <SpecialBoundingBox text="Jesse's Aspiration" color="gray.300" />
    </Stack>
  );
};

export default SkillPlanWithArrows;