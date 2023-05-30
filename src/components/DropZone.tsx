import React from "react";
import { Box, Typography } from "@mui/material";

const Dropzone = ({ onFileChange }: { onFileChange: (file: File) => void }) => {
  const fileInput = React.createRef();

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    onFileChange(file);
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files[0];
    onFileChange(file);
  };

  const handleBoxClick = () => {
    fileInput.current.click();
  };

  return (
    <Box
      sx={{
        border: "2px dashed grey",
        borderRadius: 1,
        padding: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 200,
        marginBottom: 2,
        cursor: "pointer",
      }}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onClick={handleBoxClick}
    >
      <input
        ref={fileInput}
        type="file"
        style={{ display: "none" }}
        accept=".mp3,.wav"
        onChange={handleFileInputChange}
      />
      <Typography variant="h6" textAlign="center">
        Drop or Click to Select MP3 or WAV File
      </Typography>
    </Box>
  );
};

export default Dropzone;
