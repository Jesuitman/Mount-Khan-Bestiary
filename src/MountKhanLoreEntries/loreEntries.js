import React, { useState } from 'react';
import Ideas from "../Ideas/Ideas";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import loreStuff from '../Resources/LoreEntriesResources/LoreEntriesResource';

function LoreEntries() {
  const [lore, setLore] = useState(loreStuff); 


  return (


        <Ideas ideas={lore} /> 

  );
}

export default LoreEntries;