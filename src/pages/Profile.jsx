// export default function Profile() {
//   return (
//     <div>Profile</div>
//   )
// }



// import { Box, Image } from '@chakra-ui/react';
// import { motion } from 'framer-motion';

// const MotionBox = motion(Box);

// export default function HoverTiltImage() {
//   return (
//     <MotionBox
//       whileHover={{ scale: 1.1, rotateX: 10 }} // Tilts the image forward on hover
//       transition={{ type: "spring", stiffness: 300 }}
//       width="fit-content"
//       margin="auto"
//       perspective={1000} // Add perspective to give the tilt a 3D effect
//     >
//       <Image
//         src="/path-to-your-image/Screenshot 2024-08-23 at 12.20.19 AM.png" // Update this path to your actual image path
//         alt="Unsupervised Clustering: A Guide"
//         borderRadius="md"
//         boxShadow="md"
//         transformOrigin="center" // Ensure the tilt happens from the center
//       />
//     </MotionBox>
//   );
// }

// import { Box, Image } from '@chakra-ui/react';
// import { motion } from 'framer-motion';

// const MotionBox = motion(Box);

// export default function HoverRotateImage() {
//   return (
//     <MotionBox
//       whileHover={{ rotate: 90 }} // Rotates the image 90 degrees on hover
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//       width="fit-content"
//       margin="auto"
//       perspective={1000} // Optional: Add perspective for a 3D effect
//     >
//       <Image
//         src="/path-to-your-image/Screenshot 2024-08-23 at 12.20.19 AM.png" // Update this path to your actual image path
//         alt="Unsupervised Clustering: A Guide"
//         borderRadius="md"
//         boxShadow="md"
//       />
//     </MotionBox>
//   );
// }


// import { Box, Image } from '@chakra-ui/react';
// import { motion } from 'framer-motion';

// const MotionBox = motion(Box);

// export default function Hover3DTiltImage() {
//   return (
//     <MotionBox
//       whileHover={{ rotateX: 45 }} // Tilts the image forward by 45 degrees
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//       width="fit-content"
//       margin="auto"
//       perspective={1000} // Adds perspective for a 3D effect
//     >
//       <Image
//         src="../public/img/mario.png" // Update this path to your actual image path
//         alt="Unsupervised Clustering: A Guide"
//         borderRadius="md"
//         boxShadow="md"
//         transformOrigin="center" // Ensures the rotation happens from the center
//       />
//     </MotionBox>
//   );
// }

// import {
//   Box,
//   Text,
//   Flex,
//   Grid,
//   GridItem,
//   Stat,
//   StatLabel,
//   StatNumber,
// } from '@chakra-ui/react';
// import { Line } from 'react-chartjs-2'; // You can use any chart library of your choice

// export default function DashboardCard() {
//   return (
//     <Box
//       bg="black"
//       borderRadius="lg"
//       p={6}
//       color="white"
//       boxShadow="lg"
//       maxW="600px"
//       mx="auto"
//     >
//       {/* Top Section with Inflow Today and Percent Change */}
//       <Flex justify="space-between" align="center" mb={4}>
//         <Stat>
//           <StatNumber fontSize="4xl" color="green.300">
//             192
//           </StatNumber>
//           <StatLabel>Inflow Today</StatLabel>
//         </Stat>
//         <Text color="green.300" fontSize="xl" fontWeight="bold">
//           +12%
//         </Text>
//       </Flex>

//       {/* Middle Section with Inflow and Outflow */}
//       <Grid templateColumns="repeat(2, 1fr)" gap={6} mb={4}>
//         <GridItem>
//           <Stat>
//             <Text fontSize="md" fontWeight="bold" color="green.300" mb={2}>
//               $80000
//             </Text>
//             <Text>Inflow</Text>
//           </Stat>
//         </GridItem>
//         <GridItem>
//           <Stat>
//             <Text fontSize="md" fontWeight="bold" color="blue.300" mb={2}>
//               $2000
//             </Text>
//             <Text>Outflow</Text>
//           </Stat>
//         </GridItem>
//       </Grid>

//       {/* Bottom Section with Line Chart */}
//     </Box>
//   );
// }


// import { Box, Image, Text, Flex } from '@chakra-ui/react';
// import { useState } from 'react';

// export default function SplitImageBox() {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <Box
//       width="400px"
//       height="250px"
//       bg="gray.200"
//       borderRadius="md"
//       overflow="hidden"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       position="relative"
//       transition="all 0.5s ease-in-out"
//     >
//       {!isHovered ? (
//         // Initial state with single image and description
//         <Flex
//           align="center"
//           justify="center"
//           height="100%"
//           bg="gray.800"
//           color="white"
//           flexDirection="column"
//           p={4}
//         >
//           <Image
//             src="https://via.placeholder.com/150"
//             alt="Initial Image"
//             boxSize="150px"
//             objectFit="cover"
//             mb={4}
//           />
//           <Text fontSize="lg">This is a description of the image.</Text>
//         </Flex>
//       ) : (
//         // Hover state with two boxes
//         <Flex>
//           <Box
//             width="50%"
//             height="100%"
//             bg="white"
//             p={4}
//             transition="all 0.5s ease-in-out"
//             transform="translateX(-10px)" // Move left box to the left
//           >
//             <Image
//               src="https://via.placeholder.com/150/FF0000"
//               alt="Left Image"
//               boxSize="100%"
//               objectFit="cover"
//               mb={4}
//             />
//             <Text textAlign="center">Left Image Description</Text>
//           </Box>
//           <Box
//             width="50%"
//             height="100%"
//             bg="white"
//             p={4}
//             transition="all 0.5s ease-in-out"
//             transform="translateX(10px)" // Move right box to the right
//           >
//             <Image
//               src="https://via.placeholder.com/150/0000FF"
//               alt="Right Image"
//               boxSize="100%"
//               objectFit="cover"
//               mb={4}
//             />
//             <Text textAlign="center">Right Image Description</Text>
//           </Box>
//         </Flex>
//       )}
//     </Box>
//   );
// }


// import { Box, Image, Text, Flex } from '@chakra-ui/react';
// import { useState } from 'react';

// export default function SlidingBoxesAnimation() {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <Box
//       width="400px"
//       height="250px"
//       bg="gray.200"
//       borderRadius="md"
//       overflow="hidden"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       position="relative"
//     >
//       {/* The initial content */}
//       <Flex
//         align="center"
//         justify="center"
//         height="100%"
//         bg="gray.800"
//         color="white"
//         flexDirection="column"
//         p={4}
//         transition="opacity 0.5s ease-in-out"
//         opacity={isHovered ? 0 : 1}  // Fade out on hover
//         position={isHovered ? "absolute" : "relative"}
//         zIndex={isHovered ? 0 : 1}
//       >
//         <Image
//           src="https://via.placeholder.com/150"
//           alt="Initial Image"
//           boxSize="150px"
//           objectFit="cover"
//           mb={4}
//         />
//         <Text fontSize="lg">This is a description of the image.</Text>
//       </Flex>

//       {/* The two sliding boxes */}
//       <Flex
//         justify="space-between"
//         height="100%"
//         position="absolute"
//         top={0}
//         left={0}
//         width="100%"
//         opacity={isHovered ? 1 : 0}
//         transition="opacity 0.5s ease-in-out"
//         zIndex={isHovered ? 1 : 0}
//       >
//         <Box
//           width="50%"
//           height="100%"
//           bg="white"
//           p={4}
//           display="flex"
//           flexDirection="column"
//           justifyContent="center"
//           alignItems="center"
//           transition="transform 0.5s ease-in-out"
//           transform={isHovered ? "translateX(-10%)" : "translateX(0)"}
//         >
//           <Image
//             src="https://via.placeholder.com/150/FF0000"
//             alt="Left Image"
//             boxSize="100%"
//             objectFit="cover"
//             mb={4}
//           />
//           <Text textAlign="center">Left Image Description</Text>
//         </Box>
//         <Box
//           width="50%"
//           height="100%"
//           bg="white"
//           p={4}
//           display="flex"
//           flexDirection="column"
//           justifyContent="center"
//           alignItems="center"
//           transition="transform 0.5s ease-in-out"
//           transform={isHovered ? "translateX(10%)" : "translateX(0)"}
//         >
//           <Image
//             src="https://via.placeholder.com/150/0000FF"
//             alt="Right Image"
//             boxSize="100%"
//             objectFit="cover"
//             mb={4}
//           />
//           <Text textAlign="center">Right Image Description</Text>
//         </Box>
//       </Flex>
//     </Box>
//   );
// }

// import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
// import React from "react";

// const theme = extendTheme({});

// const SplitBoxAnimation = () => {
//   return (
//     <ChakraProvider theme={theme}>
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         height="100vh"
//         bg="#f0f0f0"
//       >
//         <Box
//           position="relative"
//           width="300px"
//           height="300px"
//           _hover={{
//             ".left-box": {
//               transform: "rotateY(-90deg) translateX(-50%)",
//             },
//             ".right-box": {
//               transform: "rotateY(90deg) translateX(50%)",
//             },
//           }}
//         >
//           <Box
//             className="left-box"
//             position="absolute"
//             width="100%"
//             height="100%"
//             bg="blue.500"
//             transition="transform 1s ease-in-out"
//             transformOrigin="right center"
//           />
//           <Box
//             className="right-box"
//             position="absolute"
//             width="100%"
//             height="100%"
//             bg="blue.500"
//             transition="transform 1s ease-in-out"
//             transformOrigin="left center"
//           />
//         </Box>
//       </Box>
//     </ChakraProvider>
//   );
// };

// export default SplitBoxAnimation;


import { Box, Image, Text, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import itemData from '../../data/personal_picture.json';

export default function SlidingBoxesAnimation() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
      bg="gray.100"
    >
      <Box
        width="900px"
        height="700px"
        bg="gray.200"
        borderRadius="md"
        overflow="hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        position="relative"
      >
        {/* The initial content */}
        <Flex
          align="center"
          justify="flex-start"
          height="100%"
          bg="gray.800"
          color="white"
          flexDirection="column"
          p={4}
          transition="opacity 0.5s ease-in-out"
          opacity={isHovered ? 0 : 1}  // Fade out on hover
          position={isHovered ? "absolute" : "relative"}
          zIndex={isHovered ? 0 : 1}
        >
          <Image
            // src="https://via.placeholder.com/150"
            src="../public/img/elon_image2.jpeg"
            alt="Initial Image"
            boxSize="300px"
            objectFit="cover"
            mb={4}
          />
          <Text fontSize="lg" textAlign="center"  p={4}>Elon appears to show a man with a short, slicked-back hairstyle, wearing a black shirt, and sitting in front of a blue background. He is smiling slightly with his lips pressed together and is wearing a microphone headset, suggesting he might be speaking at an event or in a discussion. The lighting is focused on his face, making him the main subject of the image..</Text>
        </Flex>

        {/* The two sliding boxes */}
        <Flex
          justify="space-between"
          height="100%"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          opacity={isHovered ? 1 : 0}
          transition="opacity 0.5s ease-in-out"
          zIndex={isHovered ? 1 : 0}
        >
          <Box
            width="50%"
            height="100%"
            // bg="white"
            bg="blue.200"
            p={4}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            transition="transform 0.5s ease-in-out"
            transform={isHovered ? "translateX(-10%)" : "translateX(0)"}
          >
            <Image
              src="../public/img/elon_image2.jpeg"
              alt="Left Image"
              // boxSize="100%"
              boxSize="300px"
              objectFit="cover"
              mb={4}
            />
             <Text textAlign="center" p={10}>{itemData.left_description}</Text>
          </Box>
          <Box
            width="50%"
            height="100%"
            // bg="white"
            bg="red.200"
            p={4}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            transition="transform 0.5s ease-in-out"
            transform={isHovered ? "translateX(10%)" : "translateX(0)"}
          >
            <Image
              src="../public/img/elon_image2.jpeg"
              alt="Right Image"
              // boxSize="100%"
              boxSize="300px"
              objectFit="cover"
              mb={4}
            />
            <Text textAlign="center" p={10}>{itemData.right_description}</Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
