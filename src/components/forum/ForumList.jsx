import React from "react";
import ForumCard from "./ForumCard";

const forums = new Array(9).fill(0);

export default function ForumList() {
  return (
    <div>
      {forums?.map((_, i) => (
        <ForumCard key={i} />
      ))}
    </div>
  );
}
