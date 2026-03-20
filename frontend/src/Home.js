import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Heading,
  HStack,
  VStack,
  Text,
  Icon,
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';

function Home() {
  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-br, purple.700, blue.600, teal.500)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      position="relative"
      overflow="hidden"
    >
      <Helmet>
        <title>Home • Student–Teacher Portal</title>
      </Helmet>

      {/* Background Glow Effect */}
      <Box
        position="absolute"
        top="-100px"
        left="-100px"
        w="300px"
        h="300px"
        bg="purple.400"
        filter="blur(120px)"
        opacity="0.4"
      />
      <Box
        position="absolute"
        bottom="-100px"
        right="-100px"
        w="300px"
        h="300px"
        bg="blue.400"
        filter="blur(120px)"
        opacity="0.4"
      />

      {/* Glass Card */}
      <Box
        bg="whiteAlpha.200"
        backdropFilter="blur(20px)"
        p={10}
        borderRadius="2xl"
        boxShadow="2xl"
        textAlign="center"
        maxW="500px"
        w="100%"
        border="1px solid rgba(255,255,255,0.2)"
      >
        <VStack spacing={6}>
          {/* Title */}
          <Heading
            size="2xl"
            color="white"
            bgGradient="linear(to-r, white, gray.300)"
            bgClip="text"
          >
            🎓 Student–Teacher Portal
          </Heading>

          {/* Subtitle */}
          <Text fontSize="lg" color="gray.200">
            Manage students & teachers with ease 🚀
          </Text>

          <Text color="gray.300" fontSize="sm">
            Choose your role to continue
          </Text>

          {/* Buttons */}
          <HStack spacing={6} pt={4}>
            {/* Student Button */}
            <Button
              as={RouterLink}
              to="/student"
              size="lg"
              bgGradient="linear(to-r, teal.400, green.400)"
              color="white"
              leftIcon={<Icon as={FaUserGraduate} />}
              _hover={{
                transform: 'scale(1.08)',
                boxShadow: 'xl',
              }}
              transition="0.3s"
            >
              Student
            </Button>

            {/* Teacher Button */}
            <Button
              as={RouterLink}
              to="/teacher"
              size="lg"
              variant="outline"
              color="white"
              borderColor="whiteAlpha.600"
              leftIcon={<Icon as={FaChalkboardTeacher} />}
              _hover={{
                bg: 'whiteAlpha.300',
                transform: 'scale(1.08)',
              }}
              transition="0.3s"
            >
              Teacher
            </Button>
          </HStack>

          {/* Footer Text */}
          <Text fontSize="xs" color="gray.400" pt={4}>
            Built with ❤️ using React + Chakra UI
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

export default Home;