import React, { Component } from "react";
import Head from "../../components/head";
import ContentContainer from "../../components/ContentContainer";
import MainContainer from "../../components/MainContainer";
import BossList from "../../components/BossList";

import { mc } from "../../data/data";

class MajordomoExecutus extends Component {
  render() {
    return (
      <MainContainer>
        <Head title="Home" />
        <BossList bosses={mc.bosses} selected="Majordomo Executus" />
        <ContentContainer
          panels={[
            "Overview",
            "Abilities",
            "Strategy",
            "Tips",
            "Loot",
            "Videos"
          ]}
        >
          {panel => {
            switch (panel) {
              case "Overview":
                return <Overview />;
              case "Abilities":
                return <Abilities />;
              case "Strategy":
                return <Strategy />;
              case "Tips":
                return <Tips />;
              case "Loot":
                return <Loot />;
              case "Videos":
                return <Videos />;
              default:
                return <Overview />;
            }
          }}
        </ContentContainer>
      </MainContainer>
    );
  }
}

const Overview = () => (
  <div>
    <img
      src="https://wow.zamimg.com/uploads/screenshots/small/86829.jpg"
      alt="MajordomoExecutus"
    />
    MajordomoExecutus is one of the four flamewaker captains of Ragnaros, and the first
    boss of Molten Core.
  </div>
);
const Abilities = () => (
  <div>
    <h3>MajordomoExecutus</h3>
    <p>
      <strong>
        <a href="http://classicdb.ch/?spell=19702">Impending Doom</a>
      </strong>
      Inflicts 2000 Shadow damage to nearby enemies after 10 sec. Dispel Type:
      Magic School: Shadow Radius: 40 yards{" "}
    </p>

    <p>
      <strong>MajordomoExecutus's Curse</strong>
      >Curses nearby enemies, increasing the costs of their spells and abilities
      by 100% for 5 min. This cost increase applies to all spells and abilities,
      whether they cost mana, rage, energy, runes, or runic power. Dispel Type:
      Curse School: Shadow Radius: 40 yards{" "}
    </p>

    <p>
      <strong>Shadow Shock</strong>
      Instantly lashes nearby enemies with dark magic, inflicting Shadow damage.
      School: Shadow Radius: 20 yards{" "}
    </p>
  </div>
);
const Strategy = () => (
  <div>
    <p>
      In most cases, raids will first dispatch the first Core Hound Pack to give
      some room for the pullers and the main tank. It is important when MajordomoExecutus
      is pulled that he not come near the main raid groupimport MajordomoExecutus from './majordomo-executus';
 or there could be an
      instantaneous wipe. His guards have the ability to mind control, so it is
      sometimes easier to have one or two dummies move ahead of the main tank to
      suck up the mind control. Additionally, no one can move near the tunnel to
      the west, or the imps and surgers inside could chain aggro and wipe the
      raid.
    </p>
    <br />
    <p>
      Generally, two hunters will use one of their insta-cast shots to pull the
      Flamewalker Protectors, while the Main Tank must run up, tag, and pull
      MajordomoExecutus in the opposite direction of his guards. Generally the back cove
      is where the guards are pulled, while MajordomoExecutus is taken to another alcove
      on the east, far from the main raid. Each of the guards must then be
      picked up by two offtanks and dispatched accordingly before MajordomoExecutus is
      targeted.
    </p>
    <br />
    <p>
      Mages will not be contributing any large part of the DPS in this fight as
      they will be tied up with removing the curse that MajordomoExecutus casts on the
      raid every 15 seconds. Priests and Paladins will also be tied up
      dispelling the Impending Doom debuff from healers, and especially the main
      tanks, and whoever becomes mind controlled. The core DPS for this fight
      therefore falls upon the rogues, hunters, and warlocks.
    </p>
    <br />
    <p>
      Once the two guards are defeated, all DPS will shift over to MajordomoExecutus.
      Usually around 20-25%, it is safe for some of the mages to begin casting
      their nukes, depending on their mana and how quickly they decurse the
      raid.
    </p>
    <br />
    <p>
      MajordomoExecutus's debuffs have a range of 40 yards. It is possible for every
      healer (except the MT-decurser), and properly spec'ed hunters to stay out
      of MajordomoExecutus's curse-range, so with a good group you can minimize every
      curse-wave to about 10 raid members (melees). This makes the fight much
      easier and allows the mages to do damage too. You can also choose to keep
      only necessary players within the radius (healers, decursers, dispellers,
      tanks), and hold back the DPS players out of the range until Luci's mana
      is depleted. It takes a few minutes, but it saves the trouble of nearly
      wiping when the entire raid is bing hit by the curses and magic effects.
      Its good to note that any ranged DPS that can attack at 41 yards through
      talents can exceed Luci's range and still DPS him down. They just have to
      be at their maximum range.
    </p>
    <br />
    <p>
      If MajordomoExecutus is not defeated before the group wipes, the guards will
      respawn.{" "}
    </p>
  </div>
);
const Tips = () => <div>Bring Resto pots</div>;
const Loot = () => (
  <div>
    <a href="https://classicdb.ch/?item=16665">Tome of Tranquilizing Shot</a>
  </div>
);
const Videos = () => (
  <div>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/Y-8CaOSdRzo"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
);

export default MajordomoExecutus;
