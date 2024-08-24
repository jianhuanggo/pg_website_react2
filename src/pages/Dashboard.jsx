import { Heading, SimpleGrid, Text, Box, Flex, Divider, Avatar } from '@chakra-ui/react';
import { useEffect, useState } from 'react';



export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../data/test.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result); // Correctly set the data here
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);
  // useEffect(() => {
  //   // Temporarily use hardcoded data to check if the rendering works
  //   const mockData = [
  //     {
  //       id: 1,
  //       title: "Item 1",
  //       description: "This is the first item.",
  //       image: "https://via.placeholder.com/150"
  //     },
  //     {
  //       id: 2,
  //       title: "Item 2",
  //       description: "This is the second item.",
  //       image: "https://via.placeholder.com/150"
  //     },
  //     {
  //       id: 3,
  //       title: "Item 3",
  //       description: "This is the third item.",
  //       image: "https://via.placeholder.com/150"
  //     },
  //     {
  //       id: 4,
  //       title: "Item 4",
  //       description: "This is the third item.",
  //       image: "https://via.placeholder.com/150"
  //     }
  //   ];
  //   setData(mockData);
  // }, []);

  // return (
  //   <SimpleGrid spacing={10} minChildWidth="250px">
  //     {data.map((item) => (
  //       <Box key={item.id} bg="white" h="auto" border="1px solid" p={5}>
  //         {/* <Image src={item.image} alt={item.title} /> */}
  //         <Heading size="md" mt={4}>{item.title}</Heading>
  //         <Text mt={2}>{item.description}</Text>
  //       </Box>
  //     ))}
  //   </SimpleGrid>
  // );

  return (
    <Flex align="center" p={4} borderRadius="md" borderWidth="1px">
      <Divider orientation="vertical" borderColor="blue.500" height="12" mr={4} />
      <Box>
        <Flex align="center">
          <Avatar
            size="sm"
            name="Sanatan Mishra"
            src="https://bit.ly/dan-abramov" // Placeholder avatar image URL
            mr={2}
          />
          <Text fontWeight="bold">Sanatan Mishra</Text>
        </Flex>
        <Text fontSize="xl" fontWeight="bold" mt={2}>
          Unsupervised Clustering: A Guide
        </Text>
      </Box>
    </Flex>
  );
  // return (
  //   <div>
  //     {data ? (
  //       <pre>{JSON.stringify(data, null, 2)}</pre> // Display the fetched data
  //     ) : (
  //       <p>Loading...</p> // Show a loading state while data is being fetched
  //     )}
  //   </div>
  // );
}


// export default function Dashboard() {
//   const [data, setData] = useState([]);
  
//   useEffect(() => {
//   // Assuming you fetch the JSON data from a file or API
//   const fetchData = async () => {
//     const response = await fetch('/Users/jianhuang/projects/ui/starter/starter/data/test.json');
//     const result = await response.json();
//     console.log(result)
//     setData(result);
//   };

//   fetchData();
// }, []);
//   return (
//     <SimpleGrid spacing={10} minChildWidth="250px">
//       {data.map((item) => (
        
//         <Box key={item.id} bg="white" h="auto" border="1px solid" p={5}>
//           <Image src={item.image} alt={item.title} />
//           <Heading size="md" mt={4}>{item.title}</Heading>
//           <Text mt={2}>{item.description}</Text>
//         </Box>
//       ))}
//     </SimpleGrid>

//     // <SimpleGrid spacing={10} minChildWidth="250px">
//     //   <Box bg="white" h="200px" border="1px solid"></Box>
//     //   <Box bg="white" h="200px" border="1px solid"></Box>
//     //   <Box bg="white" h="200px" border="1px solid"></Box>
//     //   <Box bg="white" h="200px" border="1px solid"></Box>
//     //   <Box bg="white" h="200px" border="1px solid"></Box>
//     //   <Box bg="white" h="200px" border="1px solid"></Box>
//     // </SimpleGrid>
//   )
// }


// const [data, setData] = useState([]);

//   useEffect(() => {
//     // Assuming you fetch the JSON data from a file or API
//     const fetchData = async () => {
//       const response = await fetch('/path/to/your/json/file.json');
//       const result = await response.json();
//       setData(result);
//     };

//     fetchData();
//   }, []);

//   return (
//     <SimpleGrid columns={[1, 2, 3]} spacing="20px">
//       {data.map((item) => (
//         <Box key={item.id} p={5} shadow="md" borderWidth="1px">
//           <Image src={item.image} alt={item.title} />
//           <Text mt={4} fontSize="xl" fontWeight="bold">
//             {item.title}
//           </Text>
//           <Text mt={2}>{item.description}</Text>
//         </Box>
//       ))}
//     </SimpleGrid>