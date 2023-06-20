import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { BasicData } from "../../../types/spells.type";

type SpellListItemProps = {
  spell: BasicData;
  onClick: () => void;
};

export const SpellListItem = ({ spell, onClick }: SpellListItemProps) => {
  return (
    <ListItem key={spell.index}>
      <ListItemButton component="button" onClick={onClick}>
        <ListItemText primary={spell.name} />
      </ListItemButton>
    </ListItem>
  );
};
