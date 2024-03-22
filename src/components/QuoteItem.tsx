import { useRouter } from "next/navigation";
import React, { CSSProperties } from "react";
import Link from "next/link";

const QuoteItem = ({
  icon,
  text,
  label,
  href,
  style,
}: {
  icon: any;
  text: string;
  label: any;
  href: string;
  style: React.CSSProperties;
}) => {
  const router = useRouter();

  const go = () => {
    router.push("/[categories]");
  };

  return (
    <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        className="hover:bg-white hover:text-[#2E8b57]"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          borderRadius: "14px",
          position: "relative",
        }}
        onClick={go}
      >
        {icon}
        <p style={{ fontWeight: "700" }}>{text}</p>
      </div>
    </Link>
  );
};

export default QuoteItem;
