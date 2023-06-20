import { SyntheticEvent, useState } from "react";
import { SpellListItem } from "./components/molecules/spellListItem/spellListItem";
import { useGranularEffect } from "./hooks/useGranularEffect";
import "./scss/index.scss";
import "./services/i18n";
import {
  getAllClasses,
  getAllSpells,
  getClassSpells,
  getSpellDetails,
} from "./services/spellService";
import { BasicData, getSpellDetailsResponse } from "./types/spells.type";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import { ClassTabs } from "./components/molecules/ClassTabs/classTabs";
import { SpellDetailCard } from "./components/molecules/SpellDetailsCard/spellDetailsCard";

function App() {
  const [isLoading, setIsLoading] = useState<Boolean>();
  const [abortController, setAbortController] =
    useState<AbortController | null>();
  const [spellList, setSpellList] = useState<BasicData[]>();
  const [classList, setClassList] = useState<BasicData[]>();
  const [spellDetails, setSpellDetails] = useState<getSpellDetailsResponse>();
  const [value, setValue] = useState(0);

  useGranularEffect(
    () => {
      setIsLoading(true);
      getAllSpells().then((response) => {
        setSpellList(response?.results);
      });

      getAllClasses().then((response) => {
        setClassList(response?.results);
      });
      setIsLoading(false);
    },
    [],
    [abortController, isLoading]
  );

  const handleChange = (
    newValue: number
  ) => {
    setValue(newValue);
    console.log("triggered");
    getClassSpells(classList![newValue - 1].index).then((response) => {
      setSpellList(response?.results);
    });
  };

  const handleListItemClick = (spellIndex: string) => {
    getSpellDetails(spellIndex).then((response) => {
      setSpellDetails(response);
    });
  };

  return (
    <Box sx={{ width: "80%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <ClassTabs
          value={value}
          classes={classList}
          onChange={handleChange}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <List>
            {spellList?.length === 0 ? "This class has no spells" : spellList?.map((spell) => (
                   <SpellListItem spell={spell} onClick={() => handleListItemClick(spell.index)} key={spell.index}/>
                ))}
            </List>
        </Grid>
        <Grid item md={8}>
          {spellDetails ? <SpellDetailCard details={spellDetails} /> : <></>}
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
