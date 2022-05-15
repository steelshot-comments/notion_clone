import Image from "next/image";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";

function KanbanCard({ title, src, datetime, tag }) {
  const [id, setId] = useState(null);

  useEffect(() => {
    const fetchId = async () => {
      const response = await fetch("http://localhost:3000/api/hello");
      const data = await response.json();
      setId(data.id);
    };
    fetchId();
  }, []);

  function dragStartHandler(e) {
    console.log(e.target);
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text/plain", e.target.id);
  }

  return (
    <a
      href="#"
      className="block rounded-md shadow bg-white p-5"
      draggable="true"
      onDragStart={dragStartHandler}
      id={id}
    >
      <div className="flex justify-between pointer-events-none">
        <p className="leading-snug text-sm font-medium text-gray-900">
          {title}
        </p>
        <Image
          width={24}
          height={24}
          className="rounded-full w-6 h-6"
          src={src}
          alt="person"
        />
      </div>
      <div className="flex justify-between items-baseline pointer-events-none">
        <time dateTime="2019=-09-14" className="text-sm text-gray-600">
          {datetime}
        </time>
        <div className="mt-2">
          <span className="h-6 gap-[.3rem] bg-teal-100 inline-flex items-center rounded px-2 py-1">
            <svg
              viewBox="0 0 8 8"
              fill="currentColor"
              className="h-2 w-2 text-teal-500"
            >
              <circle cx="4" cy="4" r="3"></circle>
            </svg>
            <span className="text-sm font-medium text-teal-500">{tag}</span>
          </span>
        </div>
      </div>
    </a>
  );
}

export default KanbanCard;
