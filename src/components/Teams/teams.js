import React from "react";

function Teams() {
  const TeamsCard = [
    {
      teamName: "Frontend Team",
      description:
        "Works on designing, developing, and maintaining the user experience aspects of the software. ",
      gradientStart: "#2B4776",
      gradientEnd: "rgba(25, 65, 133, 0)",
    },
    {
      teamName: "Backend Team",
      description:
        "Works on designing, developing, and maintaining the user experience aspects of the software. ",
      gradientStart: "#2B4776",
      gradientEnd: "rgba(25, 65, 133, 0)",
    },
    {
      teamName: "UI/UX Team",
      description:
        "Works on designing, developing, and maintaining the user experience aspects of the software. ",
      gradientStart: "#762B43",
      gradientEnd: "rgba(25, 65, 133, 0)",
    },
    {
      teamName: "Docs Team",
      description:
        "Works on designing, developing, and maintaining the user experience aspects of the software. ",
      gradientStart: "#762B43",
      gradientEnd: "rgba(25, 65, 133, 0)",
    },
    {
      teamName: "DevOps Team",
      description:
        "Works on designing, developing, and maintaining the user experience aspects of the software. ",
      gradientStart: "#2B7669",
      gradientEnd: "rgba(25, 65, 133, 0)",
    },
    {
      teamName: "AI Team",
      description:
        "Works on designing, developing, and maintaining the user experience aspects of the software. ",
      gradientStart: "##2B7669",
      gradientEnd: "rgba(25, 65, 133, 0)",
    },
    {
      teamName: "Creative Team",
      description:
        "Works on designing, developing, and maintaining the user experience aspects of the software. ",
      gradientStart: "#764F2B",
      gradientEnd: "rgba(25, 65, 133, 0)",
    },
  ];

  const card = TeamsCard.map((data) => {
    return (
      <div
        className="h-32 w-32 text-white flex flex-row rounded-lg m-4"
        style={{
          backgroundImage: `linear-gradient(180deg, ${data.gradientStart} 0%, ${data.gradientEnd} 100%)`,
        }}
      >
        <div></div>
        {data.teamName}
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center bg-[#07001D]">
      <h1 className="font-semibold text-5xl text-[#FCFCFD]">Teams</h1>
      <div className="flex flex-row ">{card}</div>
    </div>
  );
}

export default Teams;
