import { useState } from "react";
import { Select, Dropdown, Menu } from "antd";
const { Option, OptGroup } = Select;

function Selectable({ children }) {
  const [color, setColor] = useState("text-white");
  const [borderColor, setBorderColor] = useState("border-white");
  const [bgColor, setBgColor] = useState("");
  const [selected, setSelected] = useState(false);
  const [visible, setVisible] = useState(true);

  function select() {
    setSelected(!selected);
    // setBgColor(selected ? "bg-hover-light" : "");
  }

  const menu = (
    <Menu
      onClick={(e) => {
        switch (e.key) {
          case "delete":
            setVisible(false);
            break;
          case "1":
            setColor("text-white");
            setBorderColor("border-white");
            break;
          case "2":
            setColor("text-gray-700");
            setBorderColor("border-gray-700");
            break;
          case "3":
            setColor("text-brown-700");
            setBorderColor("border-brown-700");
            break;
          case "4":
            setColor("text-orange-700");
            setBorderColor("border-orange-700");
            break;
          case "5":
            setColor("text-yellow-700");
            setBorderColor("border-yellow-700");
            break;
          case "6":
            setColor("text-green-700");
            setBorderColor("border-green-700");
            break;
          case "7":
            setColor("text-blue-700");
            setBorderColor("border-blue-700");
            break;
          case "8":
            setColor("text-purple-700");
            setBorderColor("border-purple-700");
            break;
          case "9":
            setColor("text-pink-700");
            setBorderColor("border-pink-700");
            break;
          case "10":
            setColor("text-red-700");
            setBorderColor("border-red-700");
            break;
          case "11":
            setBgColor("");
            break;
          case "12":
            setBgColor("bg-gray-700");
            break;
          case "13":
            setBgColor("bg-brown-700");
            break;
          case "14":
            setBgColor("bg-orange-700");
            break;
          case "15":
            setBgColor("bg-yellow-700");
            break;
          case "16":
            setBgColor("bg-green-700");
            break;
          case "17":
            setBgColor("bg-blue-700");
            break;
          case "18":
            setBgColor("bg-purple-700");
            break;
          case "19":
            setBgColor("bg-pink-700");
            break;
          case "20":
            setBgColor("bg-red-700");
            break;
        }
      }}
      items={[
        {
          label: "Delete",
          key: "delete",
        },
        {
          label: "Duplicate",
          key: "duplicate",
        },
        {
          label: "Turn into",
          key: "turn-into",
          children: [
            {
              label: "Text",
              key: "text",
            },
            {
              label: "Heading 1",
              key: "Heading 1",
            },
            {
              label: "Heading 2",
              key: "Heading 2",
            },
            {
              label: "Heading 3",
              key: "Heading 3",
            },
            {
              label: "Page",
              key: "Page",
            },
            {
              label: "To do list",
              key: "To do list",
            },
            {
              label: "Bulleted list",
              key: "Bulleted 2",
            },
            {
              label: "Numbered list",
              key: "Numbered list",
            },
            {
              label: "Code",
              key: "Code",
            },
            {
              label: "Quote",
              key: "Quote",
            },
            {
              label: "Callout",
              key: "Callout",
            },
            {
              label: "Equation",
              key: "equation",
            },
            {
              label: "Synced block",
              key: "Synced block",
            },
          ],
        },
        {
          label: "Turn into page in",
          key: "turn-into-page-in",
        },
        {
          label: "Copy link to block",
          key: "link",
        },
        {
          type: "divider",
        },
        {
          label: "Move to",
          key: "move",
        },
        {
          type: "divider",
        },
        {
          label: "Comment",
          key: "comment",
        },
        {
          type: "divider",
        },
        {
          label: "Color",
          children: [
            {
              type: "group",
              label: "Text color",
              children: [
                {
                  key: "1",
                  label: "default",
                },
                {
                  key: "2",
                  label: "gray",
                },
                {
                  key: "3",
                  label: "brown",
                },
                {
                  key: "4",
                  label: "orange",
                },
                {
                  key: "5",
                  label: "yellow",
                },
                {
                  key: "6",
                  label: "green",
                },
                {
                  key: "7",
                  label: "blue",
                },
                {
                  key: "8",
                  label: "purple",
                },
                {
                  key: "9",
                  label: "pink",
                },
                {
                  key: "10",
                  label: "red",
                },
              ],
            },
            {
              type: "group",
              label: "Background color",
              children: [
                {
                  key: "11",
                  label: "default",
                },
                {
                  key: "12",
                  label: "gray",
                },
                {
                  key: "13",
                  label: "brown",
                },
                {
                  key: "14",
                  label: "orange",
                },
                {
                  key: "15",
                  label: "yellow",
                },
                {
                  key: "16",
                  label: "green",
                },
                {
                  key: "17",
                  label: "blue",
                },
                {
                  key: "18",
                  label: "purple",
                },
                {
                  key: "19",
                  label: "pink",
                },
                {
                  key: "20",
                  label: "red",
                },
              ],
            },
          ],
        },
      ]}
    />
  );

  if (!visible) return null;

  return (
    <div
      className={`relative w-screen min-h-[24px] rounded-sm group mb-3`}
    >
      <div className={`flex transition-all duration-300 ease-linear ${bgColor} ${color} ${borderColor} mx-[409px]`}>
        <div className="absolute -translate-x-[40px] p-1 cursor-pointer grid place-items-center hover:bg-white/5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-linear">
          <svg
            viewBox="0 0 16 16"
            className="w-[14px] h-[14px] block fill-white/40 flex-shrink-0"
          >
            <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path>
          </svg>
        </div>
        <Dropdown overlay={menu} trigger={"click"}>
          <div
            className="absolute -translate-x-[18px] w-[18px] h-6 cursor-pointer grid place-items-center hover:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-linear"
            onClick={select}
          >
            <svg
              viewBox="0 0 10 10"
              className="w-[14px] h-[14px] block fill-white/40 flex-shrink-0"
            >
              <path d="M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z"></path>
            </svg>
          </div>
        </Dropdown>
        {children}
        {/* <Select
        showSearch
        className="w-full bg-transparent border-0 outline-0 text-white"
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        showArrow={false}
      >
        <OptGroup label="Basic bloks">
          <Option value="Text" className="">Text</Option>
          <Option value="Page">Page</Option>
          <Option value="To do list">To do list</Option>
          <Option value="Bulleted list">Bulleted list</Option>
          <Option value="Numbered list">Numbered list</Option>
          <Option value="Toggle list">Toggle list</Option>
          <Option value="Heading 1">Heading 1</Option>
          <Option value="Heading 2">Heading 2</Option>
          <Option value="Heading 3">Heading 3</Option>
          <Option value="Quote">Quote</Option>
          <Option value="Divider">Divider</Option>
          <Option value="Link to Page">Link to Page</Option>
          <Option value="Callout">Callout</Option>
        </OptGroup>
        <OptGroup label="Inline">
          <Option value="person">Mention a person</Option>
          <Option value="page">Mention a page</Option>
          <Option value="Date">Date or reminder</Option>
          <Option value="Emoji">Emoji</Option>
          <Option value="equation">Inline equation</Option>
        </OptGroup>
        <OptGroup label="Media">
          <Option value="Image">Image</Option>
          <Option value="Video">Video</Option>
          <Option value="Audio">Audio</Option>
          <Option value="File">File</Option>
          <Option value="Code">Code</Option>
          <Option value="Web bookmark">Web bookmark</Option>
        </OptGroup>
        <OptGroup label="Database">
          <Option value="Table">Table</Option>
          <Option value="List">List</Option>
          <Option value="Kanban">Kanban</Option>
          <Option value="Gallery">Gallery</Option>
          <Option value="Timeline">Timeline</Option>
          <Option value="Calendar">Calendar</Option>
        </OptGroup>
        <OptGroup label="Advanced">
          <Option value="Table of Contents">Table of Contents</Option>
          <Option value="Template button">Template button</Option>
          <Option value="Breadcrumb">Breadcrumb</Option>
          <Option value="Synced block">Synced block</Option>
        </OptGroup>
      </Select> */}
      </div>
    </div>
  );
}

export default Selectable;
