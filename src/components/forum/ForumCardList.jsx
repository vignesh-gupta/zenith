"use client";

import { getAllForums } from "@/lib/forum-actions";
import Link from "next/link";
import { useEffect, useState } from "react";
import ForumCard from "./ForumCard";

export default function ForumCardList({ count = 8 }) {
  const [forums, setForums] = useState([]);

  useEffect(() => {
    (async () => {
      let allForums = await getAllForums();
      setForums(allForums);
    })();
  }, []);

  return (
    <div className="flex flex-col items-center mt-6">
      <h3 className="text-lg font-semibold text-center text-black md:text-xl lg:text-2xl">
        Popular Forums
      </h3>

      <div className="grid w-full grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3">
        {forums
          ?.slice(0, count)
          .map(({ id, title, description, userName }, i) => (
            <ForumCard
              key={i}
              title={title}
              id={id}
              description={description}
              user={userName}
              isCompact
            />
          ))}

        {forums?.length > count && (
          <div className="flex flex-col items-center justify-center w-full h-48 p-3 border border-gray-300 rounded-lg">
            <p className="text-sm text-gray-500">
              <Link href="/forum" className="text-lg text-blue-500">
                View More &rarr;
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
