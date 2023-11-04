"use client";
import { Typewriter } from "react-simple-typewriter";
export default function TypeWriter() {
  return (
    <div>
      <h1 className="text-4xl">
        Our Lawers are{" "}
        <span style={{ color: "#7752FE", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Trustable", "Dependable", "Reliable"]}
            loop={false}
            cursor
            cursorStyle="|"
          />
        </span>
      </h1>
    </div>
  );
}
