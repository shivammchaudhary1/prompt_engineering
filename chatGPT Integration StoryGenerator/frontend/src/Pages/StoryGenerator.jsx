import { useState } from "react";
import {
  Box,
  Heading,
  Textarea,
  Button,
  Text,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { SpinnerIcon } from "@chakra-ui/icons";

const StoryGenerator = () => {
  const [story, setStory] = useState("");
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const generateStory = () => {
    setLoading(true);

    fetch("https://quote-generator-xuh9.onrender.com/generate?type=Story", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ keyword: userInput }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        console.log(res);
        setStory(res);
      });
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <Box bg="purple.400" minHeight="100vh" py={8}>
      <Container maxW="xl">
        <Box
          bg="white"
          borderRadius="lg"
          p={8}
          boxShadow="md"
          textAlign="center"
          mx="auto"
          maxW="85%"
        >
          <Heading mb={8} color="purple.500">
            Story Generator
          </Heading>
          <Text color="purple.500">I can complete your story</Text>
          <Grid templateColumns="1fr" gap={4}>
            <GridItem>
              <Textarea
                placeholder="Enter part of your story..."
                value={userInput}
                onChange={handleUserInput}
                bg="gray.200"
                color="gray.800"
                borderRadius="md"
                p={4}
                resize="vertical"
                _placeholder={{ color: "gray.400" }}
              />
            </GridItem>
            <GridItem>
              <Button
                colorScheme="purple"
                onClick={generateStory}
                w="100%"
                _hover={{ bg: "purple.600" }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <SpinnerIcon mr={2} />
                    Generating...
                  </>
                ) : (
                  "Complete Story"
                )}
              </Button>
            </GridItem>
            {story && (
              <GridItem>
                <Box bg="gray.200" borderRadius="md" p={4}>
                  <Text fontSize="lg" fontWeight="bold" mb={2}>
                    Generated Story:
                  </Text>
                  <Text fontSize="lg">{story}</Text>
                </Box>
              </GridItem>
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default StoryGenerator;
