import { SyntheticEvent, useState, } from "react";
import { useGranularEffect } from "../../../hooks/useGranularEffect";
import { getAllClasses, getAllSpells, getClassSpells, getSpellDetails } from "../../../services/spellService";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { BasicData, getSpellDetailsResponse, } from "../../../types/spells.type";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SpellDetailCard } from "../../molecules/SpellDetailsCard/spellDetailsCard";

export const SpellList = () => {
  const [isLoading, setIsLoading] = useState<Boolean>();
  const [abortController, setAbortController] =
    useState<AbortController | null>();
 const [ spellList, setSpellList] = useState<BasicData[]>();
 const [ classList, setClassList ] = useState<BasicData[]>();
 const [ spellDetails, setSpellDetails ] = useState<getSpellDetailsResponse>();
 const [value, setValue] = useState(0);

  useGranularEffect(
    () => {
        setIsLoading(true);
     getAllSpells().then(response => {
        setSpellList(response?.results);
      });

      getAllClasses().then(response => {
        setClassList(response?.results);
      })
      setIsLoading(false);
    },
    [],
    [abortController, isLoading]
  );
  
  function a11yProps(index: string) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
    
    const handleChange = (event: SyntheticEvent<Element, Event>, newValue: number) => {
      setValue(newValue);
      getClassSpells(classList![newValue -1].index).then(response => {
        setSpellList(response?.results)
      })
    }

    const handleListItemClick = (spellIndex: string) => {
        getSpellDetails(spellIndex).then(response => {
            setSpellDetails(response)
        })

        console.log(spellDetails)
    }
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="classes">
            <Tab label="All spells" {...a11yProps("0")} key="all"/>
            {classList?.map((className) => (
                <Tab label={className.name} {...a11yProps(className.index)} key={className.index} />
            ))}
          </Tabs>
        </Box>
        <Grid container spacing={2}>
            <Grid md={4}>
                <List>
                {spellList?.length === 0 ? "This class has no spells" : spellList?.map((spell) => (
                    <ListItem>
                    <ListItemButton component="button" onClick={() => handleListItemClick(spell.index)}>
                    <ListItemText primary={spell.name} />
                    </ListItemButton>
                </ListItem>
                ))}
                </List>
                </Grid>
            <Grid md={8}>
                { spellDetails ? <SpellDetailCard details={spellDetails} /> : <></>}      
            </Grid>
        </Grid>
      </Box>
    );

};
