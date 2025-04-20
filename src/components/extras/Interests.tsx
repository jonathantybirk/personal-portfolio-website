import React, { useEffect } from "react";

const Interests: React.FC = () => {
  useEffect(() => {
    document.title = "Interests";
  }, []);

  return (
    <div style={{ textAlign: 'left', paddingLeft: '5px' }}>
      <h3>Favorite media</h3>
      Lord of the Rings (2001-2003 movie trilogy) <br />
      Blade Runner 2049 (2017 movie) <br />
      Outer Wilds (2019 video game) <br />
      Everything Everywhere All at Once (2022 movie) <br />
      <br />
      <h3>Philosophers of interest</h3>
      John Stuart Mill (b. 1806) <br />
      Karl Popper (b. 1902) <br />
      Albert Camus (b. 1913) <br />
      <br />
      <h3>YouTube channels I learn from</h3>
      <b><i>Math and computers</i></b> <br />
      3Blue1Brown (@3blue1brown) <br />
      Ben Eater (@BenEater) <br />
      CodeParade (@CodeParade) <br />
      Primer (@PrimerBlobs) <br />
      Robert Miles AI Safety (@RobertMilesAI) <br />
      Sebastian Lague (@SebastianLague) <br />
      Stand-up Maths (@standupmaths) <br />
      <br />
      <b><i>Science</i></b> <br />
      Isaac Arthur (@isaacarthurSFIA) <br />
      Kurzgesagt – In a Nutshell (@kurzgesagt) <br />
      Sabine Hossenfelder (@SabineHossenfelder) <br />
      Tom Scott (@TomScotGo) <br />
      Veritasium (@veritasium) <br />
      Vsauce (@Vsauce) <br />
      <br />
      <b><i>Tech</i></b> <br />
      AI Explained (@aiexplained-official) <br />
      WVFRM Podcast (@Waveform) <br />
      <br />
      <b><i>Health</i></b> <br />
      Adam Ragusea (@aragusea) <br />
      Doctor Mike (@DoctorMike) <br />
      HealthyGamerGG (@HealthyGamerGG) <br />
      Renaissance Periodization (@RenaissancePeriodization) <br />
      <br />
      <b><i>Martial arts</i></b> <br />
      hard2hurt (@hard2hurt) <br />
      Martial Arts Journey with Rokas (@MartialArtsJourney) <br />
      Sensei Seth (@SenseiSeth) <br />
      <br />
      <b><i>Finance and entrepreneurship</i></b> <br />
      Alex Hormozi (@AlexHormozi) <br />
      Dropping In Podcast (@DroppingInPodcast) <br />
      Modern MBA (@ModernMBA) <br />
      Money & Macro (@MoneyMacro) <br />
      Patrick Boyle (@PBoyle) <br />
      Y Combinator (@ycombinator) <br />
      <br />
      <b><i>Geopolitics</i></b> <br />
      Cappy Army (@ChrisCappy)  <br />
      Justin Taylor (@Justin_Taylor)  <br />
      Perun (@PerunAU) <br />
      PolyMatter (@PolyMatter) <br />
      Task & Purpose (@Taskandpurpose) <br />
      Wendover Productions (@Wendoverproductions) <br />
      <br />
      <b><i>Society</i></b> <br />
      Bridges Podcast (@BridgesStudio) <br />
      hankschannel (@hankschannel) <br />
      Knowing Better (@KnowingBetter) <br />
      Paul Platt (@paulplattcomedy) <br />
      <br />
      <b><i>Art and media</i></b> <br />
      Adam Neely (@AdamNeely) <br />
      Big Joel (@BigJoel) <br />
      Jacob Geller (@JacobGeller) <br />
      Solar Sands (@SolarSands) <br />
      <br />
    </div>
  );
}

export default Interests;
