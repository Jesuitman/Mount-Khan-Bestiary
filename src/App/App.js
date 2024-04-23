import './App.css';
import Ideas from "../Ideas/Ideas"
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {
  const makeLowerKhanIdeas = [
    {id: 1, designation: "Crustacean", title: "Crab - Giant", description: "This crab is a big one! Measuring 11 feet tall and an impressive digging ability that it thankfully won't use against the party, this monster is a sight to see."},
    {id: 2, designation: "Crustacean", title: "Small Crab", description: "What a small fry! These guys clearly possess no threat to you, being able to be taken out with a stomp. Given that they hold almost no meat, these crabs you are easily able to put down are clearly juvenile. Good job!"},
    {id: 3, designation: "Bounty Target - Videri", title: "Crab Queen", description: "Behold and tremble before the regal might of the fearsome CRAB QUEEN! Rumor has it that she holds a fertility unmatched by the common crabs, perhaps a mutation from the moons radiant energy? One can only gawk at her immense size and projectile children crabs with wonder. If being a Videri can have this drastic of an effect on a crab, what effect will it have on other creatures?"},
    {id: 4, designation: "Joke Creature", title: "Bouncy Deer", description: "Imported from a far off land, these creatures have been lost to the seas"},
    {id: 5, designation: "Tiny Mouse", title: "Stuart Little", description: "What a foul mouth little asshole. I am sure none of you felt anything as he was squished under your boot. This mouse looked like a normal mouse by all appearances but was actually able to speak common fluently. Unfortunately, he was the beloved son to the Stuart Family and you have now attracted the ire of all the Stuarts living on Mount Khan."},
    {id: 6, designation: "Tiny Mouse", title: "Stuart Large", description: "Oh no he's hot! For real though, this mouse was freakishly muscular and could spit rhymes like you wouldnt believe. a flow so hot, you felt the fire manifest as if directly on your brain. He seemed to lack any sense of self preservation though, as he quickly killed himself by removing his own tail and then bleeding out immediately. He is the younger brother of Stuart Little and wouldn't let his death go easily. The rest of the Stuart family probably feels the same."},
    {id: 7, designation: "Bounty Target - Videri", title: "HogZilla", description: "A Videri who was spawned from nowhere. Who knows where all these boars came from? They supposedly came from inside the mountain, but the volcanic waste of the inside of Mount Khan hardly seems like it could support a population pigs. How odd..."},
    {id: 8, designation: "Undead", title: "House Wraith", description: "A singular wraith charged with guarding the gloves of the Lart from any who would be unworthy. I wonder if the other artifacts of Lart have similar guardians and touching notes? This wraith wasn't too much of a threat so clearly no one has put much effort into gathering these artifacts yet."},
    {id: 9, designation: "Undead", title: "Punny Skeleton", description: "A boney boy! These insufferable guys won't stop making jokes the entire way through combat. Thank the Lart they aren't much of a threat. A few quick jabs will turn their bones to dust. With how brittle they are, there has to be a really weak necromancer keeping them intact somehow."},
    {id: 10, designation: "Lesser Demon", title: "Imp", description: "A small imp, it could be a lesser demon? I am not sure. Either way, it found its way under the lighthouse and was able to push the boss of the dungeon to keep the lighthouse light out. I wonder if they have a source from somewhere? They have to be getting in somehow."},
    {id: 11, designation: "Boss ", title: "Aquamentus", description: "A unicorn dragon, possibly the last of its kind. Mercifully spared by the party, it will go on to be trapped under the lighthouse for the rest of its life. The supply of crab meat will keep it going though and the stunning act of kindness from the party encouraged Aquamentus to reignite the lighthouse fire, thus ensuring the safe passage of all ships. Rumor has it that this dragon is the son of the dragon guardian who watches over Neptunia, but why is it here?"},
  ]

  const makeOuterKhanIdeas = [
    {id: 12, designation: "Greater Demon", title: "Bug Demon - Soldier", description: "Rumor has it that these bug demons established a nest on the mountain somewhere. They are normally water born, so where could lots of water be found?"},
    {id: 13, designation: "Greater Demon", title: "Bug Demon - Ultra Major", description: "Second only to the queen, these bug demons are called Ultra Majors and they are a sight to behold. instead of being restricted to 1 arm mutation like soldiers, these have 2. Can you imagine if a bug demon had all possible mutations?"},
  ]

  const makeInnerKhanIdeas = []
  const makeKhanForestIdeas = []
  const makeUpperKhanIdeas = []
  const makeMoonIdeas = []

  const [lowerKhanIdeas, setLowerKhanIdeas] = useState(makeLowerKhanIdeas);
  const [outerKhanIdeas, setOuterKhanIdeas] = useState(makeOuterKhanIdeas);
  const [innerKhanIdeas, setInnerKhanIdeas] = useState(makeInnerKhanIdeas);
  const [khanForestIdeas, setKhanForestIdeas] = useState(makeKhanForestIdeas);
  const [upperKhanIdeas, setUpperKhanIdeas] = useState(makeUpperKhanIdeas);
  const [moonIdeas, setMoonIdeas] = useState(makeMoonIdeas);

  return (
    <main className='App'>
      <h1>Mount Khan Bestiary</h1>
      <Tabs>
        <TabList>
          <Tab>Lower Khan</Tab>
          <Tab>Outer Khan</Tab>
          <Tab>Inside Khan Mountain</Tab>
          <Tab>Khan Forests</Tab>
          <Tab>Upper Khan</Tab>
          <Tab>The Lunar Reaches of Umbradread</Tab>
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
    </main>
  );
}

export default App;