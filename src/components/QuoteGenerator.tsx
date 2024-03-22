"use client";

import React, { useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PeopleIcon from "@mui/icons-material/People";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SchoolIcon from "@mui/icons-material/School";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PublicIcon from "@mui/icons-material/Public";
import SnowboardingIcon from "@mui/icons-material/Snowboarding";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Navigator from "./Navigator";
import { useParams, useRouter } from "next/navigation";

interface QuoteProps {
  title: string;
  quote: string;
  category: string;
}

const QuoteGenerator = ({
  quotes,
  param,
}: {
  quotes: QuoteProps[];
  param: string;
}) => {
  const [quote, setQuote] = useState<QuoteProps>(quotes[0]);

  const router = useRouter();

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const getIcon = (param: string) => {
    switch (param) {
      case "time":
        return (
          <AccessTimeIcon
            style={{ height: "150px", width: "150px", color: "white" }}
          />
        );
        break;
      case "thinking":
        return (
          <PsychologyIcon
            style={{ height: "150px", width: "150px", color: "white" }}
          />
        );
        break;
      case "friends":
        return (
          <PeopleIcon
            style={{ height: "150px", width: "150px", color: "white" }}
          />
        );
        break;
      case "love":
        return (
          <FavoriteIcon
            style={{ height: "150px", width: "150px", color: "white" }}
          />
        );
        break;
      case "study":
        return (
          <SchoolIcon
            style={{ height: "150px", width: "150px", color: "white" }}
          />
        );
        break;
      case "happiness":
        return (
          <SentimentSatisfiedAltIcon
            style={{ height: "150px", width: "150px", color: "white" }}
          />
        );
        break;
      case "kindness":
        return (
          <SportsKabaddiIcon
            style={{ height: "150px", width: "150px", color: "white" }}
          />
        );
        break;
      case "family":
        return (
          <FamilyRestroomIcon
            style={{ height: "150px", width: "150px", color: "white" }}
          />
        );
        break;
      case "environment":
        return (
          <PublicIcon
            style={{ height: "150px", width: "150px", color: "white" }}
          />
        );
        break;
      case "passion":
        return (
          <SnowboardingIcon
            style={{ height: "150px", width: "150px", color: "white" }}
          />
        );
        break;
      case "charity":
        return (
          <VolunteerActivismIcon
            style={{ height: "150px", width: "150px", color: "white" }}
          />
        );
      case "meditation":
        return (
          <SelfImprovementIcon
            style={{ height: "150px", width: "150px", color: "white" }}
          />
        );
        break;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/${param}.avif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ArrowBackIcon
          className="text-white hover:text-red-500"
          style={{
            width: "30px",
            height: "30px",
          }}
          onClick={() => router.push("/")}
        />
        <Navigator param={param} />
        <div></div>
      </div>
      <div
        style={{
          width: "100%",
          height: "400px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          gap: "150px",
        }}
      >
        <div style={{ marginLeft: "30px" }}>
          <p
            style={{
              color: "white",
              maxWidth: "600px",
              fontSize: "23px",
              fontWeight: "800",
              wordWrap: "break-word",
              textShadow: "1px 2px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            {quote.quote}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          {getIcon(param)}
          <button
            className="text-white sm:text-[18px] md:text-[20px] lg:text-[22px] hover:text-blue-500 hover:underline"
            style={{
              fontWeight: "900",
              textShadow: "1px 2px 2px rgba(0, 0, 0, 0.5)",
              cursor: "pointer",
              transition: "color 0.3s",
            }}
            onClick={getRandomQuote}
          >
            Generate New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteGenerator;
