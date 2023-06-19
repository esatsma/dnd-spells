import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { getSpellDetailsResponse } from '../../../types/spells.type';


export const SpellDetailCard = ({details} : {details?: getSpellDetailsResponse}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h3" sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          {details?.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         {details?.level}-level {details?.school.name}
        </Typography>
        <Grid container>

        </Grid>
      </CardContent>
    </Card>
  );
}