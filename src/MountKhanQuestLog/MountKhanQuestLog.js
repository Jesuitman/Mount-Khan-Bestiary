import React, { useState } from 'react';
import Ideas from "../Ideas/Ideas";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import makeNeptuniaQuests from '../Resources/QuestlogResources/NeptuniaQuestlog';
import makeNeptuniaPeople from '../Resources/QuestlogResources/MountKhanPeople';
import makeNeptuniaPOI from '../Resources/QuestlogResources/MountKhanPOIs';
import makeNeptuniaRumors from '../Resources/QuestlogResources/MountKhanRumors';
import makeNeptuniaRecap from "../Resources/QuestlogResources/MountKhanRecaps"

function QuestLog() {
  const [quests, setQuests] = useState(makeNeptuniaQuests); 
  const [people, setPeople] = useState(makeNeptuniaPeople)
  const [pois, setPois] = useState(makeNeptuniaPOI)
  const [rumors, setRumors] = useState(makeNeptuniaRumors)
  const [recap, setRecap] = useState(makeNeptuniaRecap)

  return (
    <Tabs>
      <TabList>
        <Tab>Quests</Tab>
        <Tab>People of Interest</Tab>
        <Tab>Notable Locations</Tab>
        <Tab>Rumors</Tab>
        <Tab>Session Recaps</Tab>
      </TabList>

      <TabPanel>
        <Ideas ideas={quests} /> 
      </TabPanel>
      <TabPanel>
        <Ideas ideas={people} />
      </TabPanel>
      <TabPanel>
        <Ideas ideas={pois} />
      </TabPanel>
      <TabPanel>
        <Ideas ideas={rumors} />
      </TabPanel>
      <TabPanel>
        <Ideas ideas={recap} />
      </TabPanel>
    </Tabs>
  );
}

export default QuestLog;