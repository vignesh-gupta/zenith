"use client";

import ForumCard from "@/components/forum/ForumCard";
import { Input } from "@/components/ui/input";
import { dummyForums } from "@/lib/dummy";
import useDebounce from "@/lib/hooks/use-debounce";
import { Search } from "lucide-react";
import React, { useState } from "react";

export default function ForumListPage() {
  const [searchTerm, setSearchTerm] = useState(null);
  const deSearchTerm = useDebounce(searchTerm, 500)

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full my-4">
        <Input
          type="text"
          placeholder="Search Keywords"
          className="text-black"
          value={searchTerm}
          onChange={(e) => {
            e.target.value === ""
              ? setSearchTerm(null)
              : setSearchTerm(e.target.value);
          }}
        />
        <Search className="absolute text-gray-400 right-2 top-2 " />
      </div>
      <div className="flex flex-col w-full gap-3">
        {dummyForums
          ?.filter((f) => {
            if (!searchTerm) return true;
            return f.keywords.join("-").includes(deSearchTerm);
          })
          .map(({ id, title, description, user }, i) => (
            <ForumCard
              key={i}
              title={title}
              id={id}
              description={description}
              user={user}
            />
          ))}
      </div>
    </div>
  );
}
