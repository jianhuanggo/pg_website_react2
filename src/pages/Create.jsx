// export default function Create() {
//   return (
//     <div>Create</div>
//   )
// }


import { Box, Flex, Text, VStack, Button, IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiBookmark, FiX, FiCheck } from 'react-icons/fi';

const MotionBox = motion(Box);

function JobBoard() {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    { title: "Marketing Manager", company: "AT&T", location: "Dallas, Texas", remote: true, level: "Senior Level" },
    { title: "Marketing Manager", company: "American Airlines Group", location: "Houston, Texas", remote: true, level: "Senior Level" },
    { title: "Marketing Manager", company: "Publix", location: "Lakeland, Florida", remote: true, level: "Senior Level" },
    // More jobs...
  ];

  return (
    <Flex height="100vh" bg="gray.50">
      {/* Sidebar */}
      <Box bg="white" w="20%" p={4}>
        <Text fontSize="2xl" fontWeight="bold" mb={8}>Job Board</Text>
        <VStack align="start" spacing={4}>
          {jobs.map((job, index) => (
            <MotionBox
              key={index}
              p={4}
              bg={selectedJob === index ? "teal.50" : "white"}
              borderRadius="md"
              w="full"
              cursor="pointer"
              onClick={() => setSelectedJob(index)}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Text fontSize="lg" fontWeight="bold">{job.title}</Text>
              <Text fontSize="sm">{job.company} - {job.location}</Text>
              <Text fontSize="sm">{job.remote ? "Remote" : "On-site"} • {job.level}</Text>
              <Flex mt={2} justifyContent="space-between">
                <Text fontSize="sm" color="green.500">100% Match</Text>
                <Flex>
                  <IconButton aria-label="Save Job" icon={<FiBookmark />} size="sm" variant="ghost" />
                  <IconButton aria-label="Dismiss Job" icon={<FiX />} size="sm" variant="ghost" />
                </Flex>
              </Flex>
            </MotionBox>
          ))}
        </VStack>
      </Box>

      {/* Job Details */}
      <Box bg="white" w="80%" p={8}>
        {selectedJob !== null && (
          <MotionBox
            p={4}
            bg="white"
            borderRadius="md"
            shadow="md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Flex justifyContent="space-between" mb={4}>
              <Text fontSize="2xl" fontWeight="bold">{jobs[selectedJob].title}</Text>
              <Button leftIcon={<FiCheck />} colorScheme="teal">Apply</Button>
            </Flex>
            <Text fontSize="lg" mb={2}>{jobs[selectedJob].company}</Text>
            <Text fontSize="sm" mb={4}>{jobs[selectedJob].location}</Text>
            <Text fontSize="md">Job Description and details go here...</Text>
          </MotionBox>
        )}
      </Box>
    </Flex>
  );
}

export default function Create() {
  return (
    <JobBoard />
  );
}
