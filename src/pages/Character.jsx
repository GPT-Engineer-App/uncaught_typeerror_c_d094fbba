import { Box, Image } from "@chakra-ui/react";

const Character = ({ characterPosition }) => {
  return (
    // Update the character image path and styling to be more aligned with "Leaf Blower Revolution" aesthetics.
    <Box position="absolute" style={{ bottom: `${characterPosition.y}%`, left: `${characterPosition.x}%`, transform: "translate(-50%, -50%) scale(1.5)" }}>
      <Image src="path_to_updated_character_image.png" alt="Character Blowing Leaves" />
    </Box>
  );
};

export default Character;
