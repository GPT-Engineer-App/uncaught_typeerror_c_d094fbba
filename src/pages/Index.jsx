import React, { useState, useEffect } from "react";
import Leaf from "./Leaf.jsx";
import Character from "./Character.jsx";
import { Box, Button, Center, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { FaLeaf, FaFan } from "react-icons/fa";

// Simulating more dynamic leaf blowing effect
const generateRandomStyle = () => {
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const animationDirection = Math.random() < 0.5 ? "left" : "right";
  const translateX = animationDirection === "left" ? "-100vw" : "100vw";
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(${translateX}, -50vh)`,
    animation: `blowAway 2s ease-out forwards`,
  };
};

// Removed the redundant useEffect hook which is now correctly placed inside the Index component.

// Removed the duplicate import as it is already declared at the beginning of the file.

const Index = () => {
  useEffect(() => {
    // Moved the useEffect block here from outside of the component
    const style = document.createElement("style");
    style.textContent = `
      @keyframes blowAway {
        0% { opacity: 1; transform: translate(0, 0); }
        100% { opacity: 0; transform: translate(var(--translateX), -50vh); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [leafCount, setLeafCount] = useState(0);
  const [leaves, setLeaves] = useState([]);
  const [characterPosition, setCharacterPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newLeafStyle = generateRandomStyle();
      setLeaves((prevLeaves) => [...prevLeaves, <Leaf key={`leaf-${prevLeaves.length}`} style={newLeafStyle} />]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const onMouseMove = (event) => {
    const gameAreaRect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - gameAreaRect.left) / gameAreaRect.width) * 100;
    const y = ((event.clientY - gameAreaRect.top) / gameAreaRect.height) * 100;
    setCharacterPosition({ x, y });
  };

  // Removed duplicate return statement and incorrect code

  return (
    <Container maxW="100vw" minH="100vh" py={10} bg="blue.50" style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Box position="absolute" top="5" right="5" p="2" bg="whiteAlpha.700" borderRadius="md">
        <Text fontSize="2xl">Score: {leafCount}</Text>
      </Box>
      <Box onMouseMove={onMouseMove} style={{ width: "100%", height: "100%" }}>
        {leaves.map((leaf, index) => React.cloneElement(leaf, { key: index, zIndex: 2 }))}
        <Character characterPosition={characterPosition} />
      </Box>
    </Container>
  );
};

// This useEffect block has been moved inside the Index component to fix the error.

export default Index;
