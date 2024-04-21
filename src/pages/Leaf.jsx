import { Box } from "@chakra-ui/react";

const Leaf = ({ style, zIndex }) => {
  return (
    // Update the leaf component to have a more detailed and larger leaf image to be visually more like "Leaf Blower Revolution."
    <Box
      position="absolute"
      w="30px"
      h="30px"
      style={{ ...style, zIndex }}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url(path_to_detailed_leaf_image.png)",
        backgroundSize: "cover",
      }}
    />
  );
};

export default Leaf;
