import React, { useState } from 'react';
import Ideas from "../Ideas/Ideas";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import makeNeptuniaQuests from '../Resources/NeptuniaQuestlog';
import makeNeptuniaPeople from '../Resources/MountKhanPeople';
import makeNeptuniaPOI from '../Resources/MountKhanPOI\'s';
import makeNeptuniaRumors from '../Resources/MountKhanRumors';
import makeNeptuniaRecap from "../Resources/MountKhanRecaps"

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