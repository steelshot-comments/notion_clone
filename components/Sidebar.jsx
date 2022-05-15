import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Tooltip } from "antd";

function Sidebar() {
  const [visible, setVisible] = useState(false);
  const [pages, setPages] = useState(["Home", "About", "Contact"]);

  function toggleSidebar() {
    setVisible(!visible);
    console.log(visible);
  }

  return (
    <div
      id="nav-hover"
      className="w-4 h-screen z-10 absolute group left-0 top-0"
    >
      {visible ? (
        <nav
        className={`absolute w-60 h-screen bg-nav select-none transition-all duration-300 opacity-100 left-0`}
        onClick={toggleSidebar}
      >
        <div className="absolute right-0 w-[2px] h-full cursor-col-resize hover:bg-hover-light transition-all duration-300 ease-in"></div>
        <div
          id="sidenav-switcher"
          className="h-[45px] w-full flex items-center py-[2px] px-[14px] cursor-pointer hover:bg-hover-light"
        >
          <div className="w-[18px] h-[18px] mr-2">
            <Image
              src="https://lh3.googleusercontent.com/a-/AOh14Gg-3mWIyEwoQ2ZGgKj1EhaGE9RyWu6cGU9vyZ9i=s100"
              alt="user-avatar"
              width={18}
              height={18}
              className="w-full h-full object-cover rounded-[3px]"
              draggable="false"
            />
          </div>
          Yeshaya&apos;s notion
          <div className="w-3 h-3 flex-1">
            <svg
              viewBox="-1 -1 9 11"
              className="w-full h-full fill-white/40 flex-shrink-0 block"
            >
              <path
                id="path0_stroke"
                d="M 3.5 0L 3.98809 -0.569442L 3.5 -0.987808L 3.01191 -0.569442L 3.5 0ZM 3.5 9L 3.01191 9.56944L 3.5 9.98781L 3.98809 9.56944L 3.5 9ZM 0.488094 3.56944L 3.98809 0.569442L 3.01191 -0.569442L -0.488094 2.43056L 0.488094 3.56944ZM 3.01191 0.569442L 6.51191 3.56944L 7.48809 2.43056L 3.98809 -0.569442L 3.01191 0.569442ZM -0.488094 6.56944L 3.01191 9.56944L 3.98809 8.43056L 0.488094 5.43056L -0.488094 6.56944ZM 3.98809 9.56944L 7.48809 6.56944L 6.51191 5.43056L 3.01191 8.43056L 3.98809 9.56944Z"
              ></path>
            </svg>
          </div>
        </div>
        <section className="w-full mb-5 py-[2px]">
          <Tooltip title="Quickly jump to pages or text" placement="right">
            <div
              className="min-h-[27px] text-sm px-[14px] flex items-center cursor-pointer hover:bg-hover-light"
              target="quick-find"
            >
              Quick find
            </div>
          </Tooltip>
          <Tooltip
            title="Updates for all pages in this space"
            placement="right"
          >
            <div className="min-h-[27px] text-sm px-[14px] flex items-center cursor-pointer hover:bg-hover-light">
              Updates
            </div>
          </Tooltip>
          <Tooltip title="prompt text" placement="right">
            <div
              className="min-h-[27px] text-sm px-[14px] flex items-center cursor-pointer hover:bg-hover-light"
              target="settings"
            >
              Settings
            </div>
          </Tooltip>
        </section>
        <section className="w-full mb-5 py-[2px]">
          {pages.map((page) => {
            const id = uuid();
            return (
              <Link href={id} as={page} key={id} passHref>
                <div className="min-h-[27px] text-sm px-[14px] flex items-center cursor-pointer hover:bg-hover-light">
                  {page}
                </div>
              </Link>
            );
          })}
          <div
            className="min-h-[27px] text-sm px-[14px] flex items-center cursor-pointer hover:bg-hover-light"
            onClick={() => setPages([...pages, "Untitled"])}
          >
            New Page
          </div>
        </section>
        <section className="w-full mb-5 py-[2px]">
          <Tooltip
            title="View and clone templates into your workspace"
            placement="right"
          >
            <div
              className="min-h-[27px] text-sm px-[14px] flex items-center cursor-pointer hover:bg-hover-light"
              target="templates"
            >
              Templates
            </div>
          </Tooltip>
          <Tooltip
            title="Import from Evernote, Word, Trello and more"
            placement="right"
          >
            <div
              className="min-h-[27px] text-sm px-[14px] flex items-center cursor-pointer hover:bg-hover-light"
              target="import"
            >
              Import
            </div>
          </Tooltip>
          <Tooltip title="Restore deleted pages" placement="right">
            <div className="min-h-[27px] text-sm px-[14px] flex items-center cursor-pointer hover:bg-hover-light">
              Trash
            </div>
          </Tooltip>
        </section>
      </nav>
      )
      : (
        <nav
        className={`absolute w-60 h-screen bg-nav select-none opacity-0 -left-60 transition-all duration-300 group-hover:opacity-100 group-hover:left-0`}
        onClick={toggleSidebar}
      >
        <div className="absolute right-0 w-[2px] h-full cursor-col-resize hover:bg-hover-light transition-all duration-300 ease-in"></div>
        <div
          id="sidenav-switcher"
          className="h-[45px] w-full flex items-center py-[2px] px-[14px] cursor-pointer hover:bg-hover-light"
        >
          <div className="w-[18px] h-[18px] mr-2">
            <Image
              src="https://lh3.googleusercontent.com/a-/AOh14Gg-3mWIyEwoQ2ZGgKj1EhaGE9RyWu6cGU9vyZ9i=s100"
              alt="user-avatar"
              width={18}
              height={18}
              className="w-full h-full object-cover rounded-[3px]"
              draggable="false"
            />
          </div>
          Yeshaya&apos;s notion
          <div className="w-3 h-3 flex-1">
            <svg
              viewBox="-1 -1 9 11"
              className="w-full h-full fill-white/40 flex-shrink-0 block"
            >
              <path
                id="path0_stroke"
                d="M 3.5 0L 3.98809 -0.569442L 3.5 -0.987808L 3.01191 -0.569442L 3.5 0ZM 3.5 9L 3.01191 9.56944L 3.5 9.98781L 3.98809 9.56944L 3.5 9ZM 0.488094 3.56944L 3.98809 0.569442L 3.01191 -0.569442L -0.488094 2.43056L 0.488094 3.56944ZM 3.01191 0.569442L 6.51191 3.56944L 7.48809 2.43056L 3.98809 -0.569442L 3.01191 0.569442ZM -0.488094 6.56944L 3.01191 9.56944L 3.98809 8.43056L 0.488094 5.43056L -0.488094 6.56944ZM 3.98809 9.56944L 7.48809 6.56944L 6.51191 5.43056L 3.01191 8.43056L 3.98809 9.56944Z"
              ></path>
            </svg>
          </div>
        </div>
        <section className="w-full mb-5 py-[2px]">
          <Tooltip title="Quickly jump to pages or text" placement="right">
            <div
              className="min-h-[27px] text-sm px-[14px] flex items-center cursor-pointer hover:bg-hover-light"
              target="quick-find"
            >
              Quick find
            </div>
          </Tooltip>
          <Tooltip
            title="Updates for all pages in this space"
            placement="right"
          >
            <div className="min-h-[27px] text-sm px-[14px] flex items-center cursor-pointer hover:bg-hover-light">
              Updates
            </div>
          </Tooltip>
          <Tooltip title="prompt text" placement="right">
            <div
              className="min-h-[27px] text-sm px-[14px] flex items-center cursor-pointer hover:bg-hover-light"
              target="settings"
            >
              Settings
            </div>
          </Tooltip>
        </section>
        <section className="w-full mb-5 py-[2px]">
          {pages.map((page) => {
            const id = uuid();
            return (
              <Link href={id} as={page} key={id} passHref>
                <div className="min-h-[27px] text-sm px-[14px] flex items-center cursor-pointer hover:bg-hover-light">
                  {page}
                </div>
              </Link>
            );
          })}
          <div
            className="min-h-[27px] text-sm px-[14px] flex items-center cursor-pointer hover:bg-hover-light"
            onClick={() => setPages([...pages, "Untitled"])}
          >
            New Page
          </div>
        </section>
        <section className="w-full mb-5 py-[2px]">
          <Tooltip
            title="View and clone templates into your workspace"
            placement="right"
          >
            <div
              className="min-h-[27px] text-sm px-[14px] flex items-center cursor-pointer hover:bg-hover-light"
              target="templates"
            >
              Templates
            </div>
          </Tooltip>
          <Tooltip
            title="Import from Evernote, Word, Trello and more"
            placement="right"
          >
            <div
              className="min-h-[27px] text-sm px-[14px] flex items-center cursor-pointer hover:bg-hover-light"
              target="import"
            >
              Import
            </div>
          </Tooltip>
          <Tooltip title="Restore deleted pages" placement="right">
            <div className="min-h-[27px] text-sm px-[14px] flex items-center cursor-pointer hover:bg-hover-light">
              Trash
            </div>
          </Tooltip>
        </section>
      </nav>
      )}
    </div>
  );
}

export default Sidebar;
