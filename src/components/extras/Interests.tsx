import React, { useEffect } from "react";

const Interests: React.FC = () => {
    useEffect(() => {
      document.title = "Interests";
    }, []);

    return (
        <div style={{textAlign: 'left', paddingLeft: '5px'}}>
            Math and computers: <br />
            3Blue1Brown (@3blue1brown) <br />
            CodeParade (@CodeParade) <br />
            Primer (@PrimerBlobs) <br />
            Robert Miles AI Safety (@RobertMilesAI) <br />
            Sebastian Lague (@SebastianLague) <br />
            <br />
            Science: <br />
            hankschannel (@hankschannel) <br />
            Isaac Arthur (@isaacarthurSFIA) <br />
            Kurzgesagt – In a Nutshell (@kurzgesagt) <br />
            Sabine Hossenfelder (@SabineHossenfelder) <br />
            Tom Scott (@TomScotGo) <br />
            Veritasium (@veritasium) <br />
            Vsauce (@Vsauce) <br />
            <br />
            Tech: <br />
            AI Explained (@aiexplained-official) <br />
            WVFRM Podcast (@Waveform) <br />
            <br />
            Fitness, nutrition, looks: <br />
            Adam Ragusea (@aragusea) <br />
            Doctor Mike (@DoctorMike) <br />
            Renaissance Periodization (@RenaissancePeriodization) <br />
            QOVES Studio (@QOVESStudio) <br />
            <br />
            Martial arts: <br />
            hard2hurt (@hard2hurt) <br />
            Martial Arts Journey (@MartialArtsJourney) <br />
            Sensei Seth (@SenseiSeth) <br />
            <br />
            Finance: <br />
            Alex Hormozi (@AlexHormozi) <br />
            Money & Macro (@MoneyMacro) <br />
            Patrick Boyle (@PBoyle) <br />
            Y Combinator (@ycombinator) <br />
            <br />
            Personal development: <br />
            Dropping In Podcast (@DroppingInPodcast) <br />
            HealthyGamerGG (@HealthyGamerGG) <br />
            <br />
            Geopolitics: <br />
            Bridges Podcast (@BridgesStudio) <br />
            LegalEagle (@LegalEagle) <br />
            Perun (@PerunAU) <br />
            PolyMatter (@PolyMatter) <br />
            Task & Purpose (@Taskandpurpose) <br />
            Wendover Productions (@Wendoverproductions) <br />
            <br />
            Art and media: <br />
            Jacob Geller (@JacobGeller) <br />
            Sardonicast (@Sardonicast) <br />
            Solar Sands (@SolarSands) <br />
        </div>
    );
}

export default Interests;