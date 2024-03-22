"use client";
import React, { createContext, useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PeopleIcon from "@mui/icons-material/People";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SchoolIcon from "@mui/icons-material/School";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import PublicIcon from "@mui/icons-material/Public";
import SnowboardingIcon from "@mui/icons-material/Snowboarding";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import QuoteItem from "./QuoteItem";

export const itemContext = createContext("");

const Initial = () => {
  const [chooseText, setChooseText] = useState(
    "Time" ||
      "Thinking" ||
      "Friends" ||
      "Love" ||
      "Study" ||
      "Happiness" ||
      "Kindness" ||
      "Family" ||
      "Envirnoment" ||
      "Passion" ||
      "Charity" ||
      "Meditation"
  );

  const quoteItems = [
    {
      icon: <AccessTimeIcon style={{ width: "100px", height: "100px" }} />,
      text: "Time",
      href: "/time",
    },
    {
      icon: <PsychologyIcon style={{ width: "100px", height: "100px" }} />,
      text: "Thinking",
      href: "/thinking",
    },
    {
      icon: <PeopleIcon style={{ width: "100px", height: "100px" }} />,
      text: "Friends",
      href: "/friends",
    },
    {
      icon: <FavoriteIcon style={{ width: "100px", height: "100px" }} />,
      text: "Love",
      href: "/love",
    },
    {
      icon: <SchoolIcon style={{ width: "100px", height: "100px" }} />,
      text: "Study",
      href: "/study",
    },
    {
      icon: (
        <SentimentSatisfiedAltIcon
          style={{ width: "100px", height: "100px" }}
        />
      ),
      text: "Happiness",
      href: "/happiness",
    },
    {
      icon: <SportsKabaddiIcon style={{ width: "100px", height: "100px" }} />,
      text: "Kindness",
      href: "/kindness",
    },
    {
      icon: <FamilyRestroomIcon style={{ width: "100px", height: "100px" }} />,
      text: "Family",
      href: "/family",
    },
    {
      icon: <PublicIcon style={{ width: "100px", height: "100px" }} />,
      text: "Environment",
      href: "/environment",
    },
    {
      icon: <SnowboardingIcon style={{ width: "100px", height: "100px" }} />,
      text: "Passion",
      href: "/passion",
    },
    {
      icon: (
        <VolunteerActivismIcon style={{ width: "100px", height: "100px" }} />
      ),
      text: "Charity",
      href: "/charity",
    },
    {
      icon: <SelfImprovementIcon style={{ width: "100px", height: "100px" }} />,
      text: "Meditation",
      href: "/meditation",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: "url('/images/bg.webp')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        justifyContent: "center",
        position: "relative",
        padding: "5px",
      }}
    >
      <p
        className="sm:text-[24px] md:text-[26px] lg:text-[28px]"
        style={{
          marginTop: "5px",
          fontWeight: "800",
          color: "white",
          textShadow: "1px 2px 2px rgba(0, 0, 0, 0.5)",
        }}
      >
        {" "}
        Quotes for you
      </p>
      <p
        className="sm:text-[20px] md:text-[22px] lg:text-[24px]"
        style={{
          color: "white",
          fontWeight: "800",
          textShadow: "1px 2px 2px rgba(0, 0, 0, 0.5)",
          textAlign: "center",
        }}
      >
        {" "}
        Click the icons below to generate quotes by categories
      </p>
      <div
        style={{
          borderRadius: "14px",
          width: "80%",
          position: "relative",
          backgroundImage: "url('/images/background.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          padding: "0 15px",
        }}
      >
        <div
          className="grid md:grid-cols-3 grid-cols-4 "
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px 0",
            gap: "15px",
          }}
        >
          <itemContext.Provider value={chooseText}>
            {quoteItems.map((item, index) => (
              <QuoteItem
                key={index}
                icon={item.icon}
                text={item.text}
                label={() => setChooseText(item.text)}
                href={item.href}
                style={{ backgroundColor: "red" }}
              />
            ))}
          </itemContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Initial;
