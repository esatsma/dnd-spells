import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { SyntheticEvent } from 'react';
import { BasicData } from '../../../types/spells.type';

type classTabsProps = {
    onChange: (newValue: number) => void;
    classes?: BasicData[];
    value: number;
}

export const ClassTabs = ({onChange, classes, value}: classTabsProps) => {
    const handleChange = (event: SyntheticEvent<Element, Event>, newValue: number) => {
        console.log('triggered')
        onChange(newValue)
    }

    function a11yProps(index: string) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

  return (
    <Tabs value={value} onChange={handleChange} aria-label="classes">
        <Tab label="All spells" {...a11yProps('all')} key="all" />
       { classes?.map((classdata) => (
             <Tab
             label={classdata.name}
             {...a11yProps(classdata.index)}
             key={classdata.index}
           />
        ))}      
    </Tabs>
  );
};
