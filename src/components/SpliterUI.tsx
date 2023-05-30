import { useState } from "react";
import { Button, Box, Slider, Typography } from "@mui/material";
import DropZone from "./DropZone";
import { SplitSample } from "../helpers/splitSample";

const OnSelectedUI = ({ filename }: { filename: string }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
      <Typography variant="h6" sx={{ marginRight: 2 }}>
        Selected File:
      </Typography>
      <Typography variant="h6">{filename}</Typography>
    </Box>
  );
};

const SpliterUI = () => {
  const [threshold, setThreshold] = useState(0.5);
  const [file, setFile] = useState<File | null>(null);

  const handleFileDrop = (droppedFile: File) => {
    setFile(droppedFile);
  };

  const handleSplit = () => {
    if (file) {
      const samples = SplitSample(file, threshold);
      // to zip
      const zip = new JSZip();
      samples.forEach((sample, index) => {
        zip.file(`sample${index}.wav`, sample);
      });

      zip.generateAsync({ type: "blob" }).then((content) => {
        saveAs(content, "samples.zip");
      });

      setFile(null);
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <OnSelectedUI filename={file?.name || ""} />
      <DropZone onFileChange={handleFileDrop} />
      <Typography gutterBottom>Silent Threshold</Typography>
      <Slider
        value={threshold}
        onChange={(_, newValue) => setThreshold(newValue as number)}
        step={0.001}
        min={0}
        max={1.0}
        marks
        valueLabelDisplay="auto"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSplit}
        disabled={!file}
        sx={{ marginTop: 2 }}
      >
        Split
      </Button>
    </Box>
  );
};

export default SpliterUI;
