import Tab from '@mui/material/Tab';
import { BasicData } from '../../../../types/spells.type';

export const ClassTab = ({dndClass}: { dndClass: BasicData }) => {

    function a11yProps(index: string) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

    return (
        dndClass ? (
        <Tab
        label={dndClass.name}
        {...a11yProps(dndClass.index)}
        key={dndClass.index}
      />
        ) : <></>
    )
}
