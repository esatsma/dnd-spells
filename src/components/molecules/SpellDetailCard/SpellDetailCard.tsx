import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchSpellDetails from "../../../services/fetchSpellDetails";

export const SpellDetailCard = () => {
  const { id } = useParams();

  const result = useQuery(["spells", id], fetchSpellDetails);

  const details = result.data;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          variant="h3"
          sx={{ fontSize: 18 }}
          color="text.secondary"
          gutterBottom
        >
          {details?.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {details?.level}
        </Typography>
        {details?.desc.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </CardContent>
    </Card>
  );
};
