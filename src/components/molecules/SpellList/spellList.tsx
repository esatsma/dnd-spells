import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { BasicData, } from "../../../types/spells.type";

export const SpellList = ({spells, handleClick}: {spells: BasicData[], handleClick: any}) => {



    return (
    <List>
        {spells?.length === 0 ? "This class has no spells" : spells?.map((spell) => (
            <ListItem>
            <ListItemButton component="button" onClick={() => handleClick(spell.index)}>
            <ListItemText primary={spell.name} />
            </ListItemButton>
        </ListItem>
        ))}
        </List>
    )
}