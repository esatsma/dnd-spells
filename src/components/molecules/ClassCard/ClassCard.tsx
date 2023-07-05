import { SyntheticEvent } from "react";
import React from "react";
import Card from "@mui/material/Card";

type classCardProps = {
  name: string;
  index: string;
};

export const ClassCard = ({ name, index }: classCardProps) => {
  function a11yProps(index: string) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Card variant="outlined" aria-label="classes">
      {name}
    </Card>
  );
};
