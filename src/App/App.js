import './App.css';
import MountKhanBestiary from '../MountKhanBestiary/MountKhanBestiary';
import QuestLog from '../MountKhanQuestLog/MountKhanQuestLog';
import BountyBoard from '../BountyBoard/MountKhanBountyBoard';
import LoreEntries from '../MountKhanLoreEntries/loreEntries';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {
  return (
    <main className='App'>
      <h1>Mount Khan Resources</h1>
      <Tabs>
        <TabList>
          <Tab>Bestiary</Tab>
          <Tab>Questlog</Tab>
          <Tab>Items Sheet</Tab>
          <Tab>Bounty Board</Tab>
          <Tab>Maps</Tab>
          <Tab>Lore Entries</Tab>
        </TabList>

        <TabPanel>
          <MountKhanBestiary />
        </TabPanel>
        <TabPanel>
          <QuestLog />
        </TabPanel>
        <TabPanel>
          {/* Content for Items Sheet tab */}
        </TabPanel>
        <TabPanel>
          <BountyBoard />
        </TabPanel>
        <TabPanel>
          {/* Content for Maps tab */}
        </TabPanel>
        <TabPanel>
          <LoreEntries/>
        </TabPanel>
      </Tabs>
    </main>
  );
}

export default App;