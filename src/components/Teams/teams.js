import React from "react";
import AiCard from "./assets/AiCard.jpg";
import BackendCard from "./assets/BackendCard.jpg";
import CreativeCard from "./assets/CreativeCard.jpg";
import DevOpsCard from "./assets/DevOpsCard.jpg";
import DocsCard from "./assets/DocsCard.jpg";
import FrontendCard from "./assets/FrontendCard.jpg";
import UIUXCard from "./assets/UIUXCard.jpg";
import AITeamIcon from "./assets/AITeamIcon.png";
import CreativeIcon from "./assets/CreativeIcon.png";
import DevOpsIcon from "./assets/DevOpsIcon.png";
import DocsIcon from "./assets/DocsIcon.png";
import UIUXIcon from "./assets/UIUXIcon.png";
import WebIcon from "./assets/WebIcon.png";

function Teams() {
  const TeamsCard = [
    {
      teamName: "Frontend Team",
      description:
        "Works on designing, developing, and maintaining the user experience aspects of the software. ",
      gradientStart: "#2B4776",
      gradientEnd: "rgba(25, 65, 133, 0)",
      teamImg: FrontendCard,
      icon: WebIcon,
    },
    {
      teamName: "Backend Team",
      description:
        "Works on designing, developing, and maintaining the user experience aspects of the software. ",
      gradientStart: "#2B4776",
      gradientEnd: "rgba(25, 65, 133, 0)",
      teamImg: BackendCard,
      icon: WebIcon,
    },
    {
      teamName: "UI/UX Team",
      description:
        "Works on designing, developing, and maintaining the user experience aspects of the software. ",
      gradientStart: "#762B43",
      gradientEnd: "rgba(25, 65, 133, 0)",
      teamImg: UIUXCard,
      icon: UIUXIcon,
    },
    {
      teamName: "Docs Team",
      description:
        "Works on designing, developing, and maintaining the user experience aspects of the software. ",
      gradientStart: "#762B43",
      gradientEnd: "rgba(25, 65, 133, 0)",
      teamImg: DocsCard,
      icon: DocsIcon,
    },
    {
      teamName: "DevOps Team",
      description:
        "Works on designing, developing, and maintaining the user experience aspects of the software. ",
      gradientStart: "#2B7669",
      gradientEnd: "rgba(25, 65, 133, 0)",
      teamImg: DevOpsCard,
      icon: DevOpsIcon,
    },
    {
      teamName: "AI Team",
      description:
        "Works on designing, developing, and maintaining the user experience aspects of the software. ",
      gradientStart: "##2B7669",
      gradientEnd: "rgba(25, 65, 133, 0)",
      teamImg: AiCard,
      icon: AITeamIcon,
    },
    {
      teamName: "Creative Team",
      description:
        "Works on designing, developing, and maintaining the user experience aspects of the software. ",
      gradientStart: "#764F2B",
      gradientEnd: "rgba(25, 65, 133, 0)",
      teamImg: CreativeCard,
      icon: CreativeIcon,
    },
  ];

  const card = TeamsCard.map((data) => {
    return (
      <div
        className="lg:h-64 md:h-60 h-fit lg:w-[40%] max-w-xl overflow-hidden text-white flex flex-col md:flex-row lg:flex-wrap lg:rounded-2xl md:rounded-xl rounded-lg m-6 "
        style={{
          backgroundImage: `linear-gradient(180deg, ${data.gradientStart} 0%, ${data.gradientEnd} 100%)`,
        }}
      >
        <img
          src={data.teamImg}
          alt=""
          className="object-cover h-40 md:h-auto md:rounded-l-xl lg:rounded-l-2xl md:w-1/2 "
        />
        <div className="p-6 md:w-1/2 lg:min-w-min">
          <img src={data.icon} className="h-11 w-11 mb-2" alt={data.teamName} />
          <div className="text-xl font-medium">{data.teamName}</div>
          <div className="border w-full my-3 bg-[#344054]" />
          <div className="text-base lg:text-sm xl:text-base text-[#D0D5DD]">{data.description}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center bg-[#07001D]">
      <h1 className="font-semibold text-5xl mt-16 text-[#FCFCFD]">Teams</h1>
      <div className="w-screen lg:px-20">
        <div className="flex flex-row flex-wrap my-16  lg:justify-between justify-center">
          {card}
        </div>
      </div>
    </div>
  );
}

export default Teams;
