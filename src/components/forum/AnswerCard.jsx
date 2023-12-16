import moment from "moment";
import React from "react";

export default function AnswerCard({ answer }) {
  return (
    <div className="p-3 m-1 border rounded-lg border-muted-foreground">
     <div className="flex justify-between w-full" >
     <p>
        <span className="font-semibold">{answer.userName}</span> has suggested
      </p>
      <p className="text-sm text-muted-foreground">
        {moment(answer.updatedAt, "YYYYMMDD").fromNow()}
      </p>
     </div>
      <p className="ml-2">{answer.text}</p>
    </div>
  );
}
