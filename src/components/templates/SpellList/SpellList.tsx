import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import fetchAllSpells from "../../../services/fetchAllSpells";
import fetchClassSpells from "../../../services/fetchClassSpells";
import { BasicApiResponseObject } from "../../../types/spells.type";

export const SpellList = () => {
  const { dndClass } = useParams();

  const result = dndClass
    ? useQuery(["spells", dndClass], fetchClassSpells)
    : useQuery(["spells"], fetchAllSpells);
  const spells = result.data?.results;

  return (
    <List>
      {spells?.length === 0
        ? "This class has no spells"
        : spells?.map((spell) => (
            <Link to={`/details/${spell.index}`} key={spell.index}>
              <ListItem key={spell.index}>
                <ListItemText primary={spell.name} />
              </ListItem>
            </Link>
          ))}
    </List>
  );
};

export default SpellList;
