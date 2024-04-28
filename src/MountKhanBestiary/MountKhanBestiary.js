import React, { useState } from 'react';
import Ideas from "../Ideas/Ideas";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import makeLowerKhanIdeas from '../Resources/BestiaryResources/lowerKhanIdeasData';
import makeOuterKhanIdeas from '../Resources/BestiaryResources/outerKhanIdeasData';

function MountKhanBestiary() {
  const makeInnerKhanIdeas = [];
  const makeKhanForestIdeas = [];
  const makeUpperKhanIdeas = [];
  const makeMoonIdeas = [];

  const [lowerKhanIdeas, setLowerKhanIdeas] = useState(makeLowerKhanIdeas);
  const [outerKhanIdeas, setOuterKhanIdeas] = useState(makeOuterKhanIdeas);
  const [innerKhanIdeas, setInnerKhanIdeas] = useState(makeInnerKhanIdeas);
  const [khanForestIdeas, setKhanForestIdeas] = useState(makeKhanForestIdeas);
  const [upperKhanIdeas, setUpperKhanIdeas] = useState(makeUpperKhanIdeas);
  const [moonIdeas, setMoonIdeas] = useState(makeMoonIdeas);

  return (
    <Tabs>
      <TabList>
        <Tab>Lower Khan</Tab>
        <Tab>Outer Khan</Tab>
        <Tab>Inside Khan Mountain</Tab>
        <Tab>Khan Forests</Tab>
        <Tab>Upper Khan</Tab>
        <Tab>The Lunar Reaches of Nras'Dah</Tab>
      </TabList>

      <TabPanel>
        <Ideas ideas={lowerKhanIdeas} />
      </TabPanel>
      <TabPanel>
        <Ideas ideas={outerKhanIdeas} />
      </TabPanel>
      <TabPanel>
        <Ideas ideas={innerKhanIdeas} />
      </TabPanel>
      <TabPanel>
        <Ideas ideas={khanForestIdeas} />
      </TabPanel>
      <TabPanel>
        <Ideas ideas={upperKhanIdeas} />
      </TabPanel>
      <TabPanel>
        <Ideas ideas={moonIdeas} />
      </TabPanel>
    </Tabs>
  );
}

export default MountKhanBestiary;