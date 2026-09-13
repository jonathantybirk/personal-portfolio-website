import React, { useEffect } from "react";

const Interests: React.FC = () => {
  useEffect(() => {
    document.title = "Interests";
  }, []);

  return (
    <div className="interests" style={{ textAlign: 'left', paddingLeft: '5px' }}>
      <h3>Media I find inspiring</h3>
        <a href="https://en.wikipedia.org/wiki/Castle_in_the_Sky" target="_blank" rel="noopener noreferrer">
          Castle in the Sky (1986 movie)
        </a><br />
        <a href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings_(film_series)" target="_blank" rel="noopener noreferrer">
          The Lord of the Rings (2001-2003 movie trilogy)
        </a><br />
        <a href="https://en.wikipedia.org/wiki/Inception" target="_blank" rel="noopener noreferrer">
          Inception (2010 movie)
        </a><br />
        <a href="https://en.wikipedia.org/wiki/Blade_Runner_2049" target="_blank" rel="noopener noreferrer">
          Blade Runner 2049 (2017 movie)
        </a><br />
        <a href="https://en.wikipedia.org/wiki/Outer_Wilds" target="_blank" rel="noopener noreferrer">
          Outer Wilds (2019 video game)
        </a><br />
        <a href="https://en.wikipedia.org/wiki/Everything_Everywhere_All_at_Once" target="_blank" rel="noopener noreferrer">
          Everything Everywhere All at Once (2022 movie)
        </a><br />
      <h3>YouTube channels I like</h3>
        <b><i>Math and computers</i></b> <br />
          3Blue1Brown (
            <a href="https://www.youtube.com/@3blue1brown" target="_blank" rel="noopener noreferrer">@3blue1brown</a>
          )<br />
          CodeParade (
            <a href="https://www.youtube.com/@CodeParade" target="_blank" rel="noopener noreferrer">@CodeParade</a>
          )<br />
          Julia Turc (
            <a href="https://www.youtube.com/@juliaturc1" target="_blank" rel="noopener noreferrer">@juliaturc1</a>
          )<br />
          Primer (
            <a href="https://www.youtube.com/@PrimerBlobs" target="_blank" rel="noopener noreferrer">@PrimerBlobs</a>
          )<br />
          Robert Miles AI Safety (
            <a href="https://www.youtube.com/@RobertMilesAI" target="_blank" rel="noopener noreferrer">@RobertMilesAI</a>
          )<br />
          Sebastian Lague (
            <a href="https://www.youtube.com/@SebastianLague" target="_blank" rel="noopener noreferrer">@SebastianLague</a>
          )<br />
          Stand-up Maths (
            <a href="https://www.youtube.com/@standupmaths" target="_blank" rel="noopener noreferrer">@standupmaths</a>
          )<br />
        <br />
        <b><i>Science</i></b> <br />
          Isaac Arthur (
            <a href="https://www.youtube.com/@isaacarthurSFIA" target="_blank" rel="noopener noreferrer">@isaacarthurSFIA</a>
          )<br />
          The Space Race (
            <a href="https://www.youtube.com/@TheSpaceRaceYT" target="_blank" rel="noopener noreferrer">@TheSpaceRaceYT</a>
          )<br />
          Sabine Hossenfelder (
            <a href="https://www.youtube.com/@SabineHossenfelder" target="_blank" rel="noopener noreferrer">@SabineHossenfelder</a>
          )<br />
          Veritasium (
            <a href="https://www.youtube.com/@veritasium" target="_blank" rel="noopener noreferrer">@veritasium</a>
          )<br />
          Vsauce (
            <a href="https://www.youtube.com/@Vsauce" target="_blank" rel="noopener noreferrer">@Vsauce</a>
          )<br />
        <br />
        <b><i>Tech</i></b> <br />
          AI Explained (
            <a href="https://www.youtube.com/@aiexplained-official" target="_blank" rel="noopener noreferrer">@aiexplained-official</a>
          )<br />
          Dwarkesh Patel (
            <a href="https://www.youtube.com/@DwarkeshPatel" target="_blank" rel="noopener noreferrer">@DwarkeshPatel</a>
          )<br />
          WVFRM Podcast (
            <a href="https://www.youtube.com/@Waveform" target="_blank" rel="noopener noreferrer">@Waveform</a>
          )<br />
        <br />
        <b><i>Health, fitness and outdoors</i></b> <br />
          Adam Ragusea (
            <a href="https://www.youtube.com/@aragusea" target="_blank" rel="noopener noreferrer">@aragusea</a>
          )<br />
          Doctor Mike (
            <a href="https://www.youtube.com/@DoctorMike" target="_blank" rel="noopener noreferrer">@DoctorMike</a>
          )<br />
          HealthyGamerGG (
            <a href="https://www.youtube.com/@HealthyGamerGG" target="_blank" rel="noopener noreferrer">@HealthyGamerGG</a>
          )<br />
          Renaissance Periodization (
            <a href="https://www.youtube.com/@RenaissancePeriodization" target="_blank" rel="noopener noreferrer">@RenaissancePeriodization</a>
          )<br />
          Magnus Midtbø (
            <a href="https://www.youtube.com/@magmidt" target="_blank" rel="noopener noreferrer">@magmidt</a>
          )<br />
          Outdoor Boys (
            <a href="https://www.youtube.com/@OutdoorBoys" target="_blank" rel="noopener noreferrer">@OutdoorBoys</a>
          )<br />
        <br />
        <b><i>Martial arts</i></b> <br />
          hard2hurt (
            <a href="https://www.youtube.com/@hard2hurt" target="_blank" rel="noopener noreferrer">@hard2hurt</a>
          )<br />
          USDC by Rokas Leo (
            <a href="https://www.youtube.com/@usdc.rokasleo" target="_blank" rel="noopener noreferrer">@usdc.rokasleo</a>
          )<br />
          Sensei Seth (
            <a href="https://www.youtube.com/@SenseiSeth" target="_blank" rel="noopener noreferrer">@SenseiSeth</a>
          )<br />
        <br />
        <b><i>Business</i></b> <br />
          Alex Hormozi (
            <a href="https://www.youtube.com/@AlexHormozi" target="_blank" rel="noopener noreferrer">@AlexHormozi</a>
          )<br />
          Dropping In Podcast (
            <a href="https://www.youtube.com/@DroppingInPodcast" target="_blank" rel="noopener noreferrer">@DroppingInPodcast</a>
          )<br />
          Modern MBA (
            <a href="https://www.youtube.com/@ModernMBA" target="_blank" rel="noopener noreferrer">@ModernMBA</a>
          )<br />
        <br />
        <b><i>Defence and militaries</i></b> <br />
          Cappy Army (
            <a href="https://www.youtube.com/@ChrisCappy" target="_blank" rel="noopener noreferrer">@ChrisCappy</a>
          )<br />
          Justin Taylor (
            <a href="https://www.youtube.com/@Justin_Taylor" target="_blank" rel="noopener noreferrer">@Justin_Taylor</a>
          )<br />
          Perun (
            <a href="https://www.youtube.com/@PerunAU" target="_blank" rel="noopener noreferrer">@PerunAU</a>
          )<br />
        <br />
        <b><i>Economics</i></b> <br />
          Money & Macro (
            <a href="https://www.youtube.com/@MoneyMacro" target="_blank" rel="noopener noreferrer">@MoneyMacro</a>
          )<br />
          Patrick Boyle (
            <a href="https://www.youtube.com/@PBoyle" target="_blank" rel="noopener noreferrer">@PBoyle</a>
          )<br />
          PolyMatter (
            <a href="https://www.youtube.com/@PolyMatter" target="_blank" rel="noopener noreferrer">@PolyMatter</a>
          )<br />
          Wendover Productions (
            <a href="https://www.youtube.com/@Wendoverproductions" target="_blank" rel="noopener noreferrer">@Wendoverproductions</a>
          )<br />
        <br />
        <b><i>Society</i></b> <br />
          Alex O'Connor (
            <a href="https://www.youtube.com/@CosmicSkeptic" target="_blank" rel="noopener noreferrer">@CosmicSkeptic</a>
          )<br />
          Bridges Podcast (
            <a href="https://www.youtube.com/@BridgesStudio" target="_blank" rel="noopener noreferrer">@BridgesStudio</a>
          )<br />
          hankschannel (
            <a href="https://www.youtube.com/@hankschannel" target="_blank" rel="noopener noreferrer">@hankschannel</a>
          )<br />
          Jonas Laursen (
            <a href="https://www.youtube.com/@jonasblaursen" target="_blank" rel="noopener noreferrer">@jonasblaursen</a>
          )<br />
          Tom Scott (
            <a href="https://www.youtube.com/@TomScottGo" target="_blank" rel="noopener noreferrer">@TomScottGo</a>
          )<br />
        <br />
        <b><i>Art and media</i></b> <br />
          Big Joel (
            <a href="https://www.youtube.com/@BigJoel" target="_blank" rel="noopener noreferrer">@BigJoel</a>
          )<br />
          IHE TV (
            <a href="https://www.youtube.com/@IHE_TV" target="_blank" rel="noopener noreferrer">@IHE_TV</a>
          )<br />
          In Deep Geek (
            <a href="https://www.youtube.com/@InDeepGeek" target="_blank" rel="noopener noreferrer">@InDeepGeek</a>
          )<br />
          Jacob Geller (
            <a href="https://www.youtube.com/@JacobGeller" target="_blank" rel="noopener noreferrer">@JacobGeller</a>
          )<br />
          Solar Sands (
            <a href="https://www.youtube.com/@SolarSands" target="_blank" rel="noopener noreferrer">@SolarSands</a>
          )<br />
        <br />
    </div>
  );
}

export default Interests;
