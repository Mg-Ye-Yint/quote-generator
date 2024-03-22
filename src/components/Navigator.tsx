"use client";

import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/navigation";

const Navigator = ({ param }: { param: string }) => {
  const [category, setCategory] = useState(param);

  const router = useRouter();

  const categories = [
    "time",
    "thinking",
    "friends",
    "love",
    "study",
    "happiness",
    "kindness",
    "family",
    "environment",
    "passion",
    "charity",
    "meditation",
  ];

  console.log(categories[categories.length - 1]);

  const currentIndex = categories.indexOf(param);

  const backwardNavigate = () => {
    const navigateBack = categories[currentIndex - 1];
    if (currentIndex === 0) {
      router.push(`/${categories[categories.length - 1]}`);
    } else {
      router.push(`/${navigateBack}`);
    }
  };

  const forwardNavigate = () => {
    const navigateForward = categories[currentIndex + 1];
    if (currentIndex + 1 > 11) {
      router.push(`/${categories[0]}`);
    } else {
      router.push(`/${navigateForward}`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <ArrowBackIosIcon
          sx={{
            width: "25px",
            height: "25px",
            color: "white",
            "&:hover": {
              color: "cyan",
            },
          }}
          onClick={backwardNavigate}
        />
        <p
          style={{
            opacity: "50%",
            color: "white",
            fontSize: "16px",
            textTransform: "capitalize",
          }}
        >
          {currentIndex === 0 ? categories[11] : categories[currentIndex - 1]}
        </p>
      </div>
      <p
        style={{
          color: "white",
          fontWeight: "1000",
          fontSize: "30px",
          textShadow: "1px 2px 2px rgba(0, 0, 0, 0.5)",
          textTransform: "capitalize",
        }}
      >
        {param}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <ArrowForwardIosIcon
          sx={{
            width: "25px",
            height: "25px",
            color: "white",
            "&:hover": {
              color: "cyan",
            },
          }}
          onClick={forwardNavigate}
        />
        <p
          style={{
            opacity: "50%",
            color: "white",
            fontSize: "16px",
            textTransform: "capitalize",
          }}
        >
          {currentIndex === 11 ? categories[0] : categories[currentIndex + 1]}
        </p>
      </div>
    </div>
  );
};

export default Navigator;
