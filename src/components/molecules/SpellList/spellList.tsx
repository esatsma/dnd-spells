import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { Link } from "react-router-dom";
import { BasicApiResponseObject } from "../../../types/spells.type";

export const SpellList = ({ spells }: { spells: BasicApiResponseObject[] }) => {
  return (
    <List>
      {spells?.length === 0
        ? "This class has no spells"
        : spells?.map((spell) => (
            <Link to={`/spells/details/${spell.index}`}>
              <ListItem>
                <ListItemText primary={spell.name} />
              </ListItem>
            </Link>
          ))}
    </List>
  );
};

export default SpellList;
