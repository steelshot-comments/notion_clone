import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import RowHandle from "./RowHandle";
import ColumnHandle from "./ColumnHandle";
import TableInput from "./TableInput";

function Table() {
  const [cells, setCells] = useState([
    [
      { id: 1, content: "Backlog" },
      { id: 2, content: "In Progress" },
      { id: 3, content: "Done" },
    ],
    [
      { id: 4, content: "Backlog" },
      { id: 5, content: "In Progress" },
      { id: 6, content: "Done" },
    ],
    [
      { id: 7, content: "Backlog" },
      { id: 8, content: "In Progress" },
      { id: 9, content: "Done" },
    ],
  ]);

  const [RowBtnMouseDown, setRowBtnMouseDown] = useState(false);
  const [ColumnBtnMouseDown, setColumnBtnMouseDown] = useState(false);
  const [MouseDown, setMouseDown] = useState(false);

  function addRow() {
    setCells([
      ...cells,
      // create cell for each column
      cells[0].map((cell) => ({ id: uuid(), content: "" })),
    ]);
  }

  function addColumn() {
    setCells(cells.map((row) => [...row, { id: uuid(), content: "" }]));
  }

  return (
    <div className="relative">
      <table className="relative">
        <tbody>
          {cells.map((cell, i) => (
            <tr key={uuid()} className="h-8 group">
              {cell.map(({ id, content }, j) => {
                return (
                  <td
                    key={id}
                    className="relative min-h-full border-[1px] border-solid border-[#373737]"
                  >
                    {i === 0 ? <ColumnHandle /> : null}
                    {j === 0 ? <RowHandle /> : null}
                    <TableInput />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {RowBtnMouseDown ? (
        <div
          className="absolute grid place-items-center bg-[#373737] opacity-100 transition-all duration-300 ease-linear w-full h-4 -bottom-5 left-0 rounded-[3px] cursor-row-resize select-none"
          onClick={addRow}
          onMouseDown={(e) => setRowBtnMouseDown(true)}
          onMouseUp={(e) => setRowBtnMouseDown(false)}
        >
          <svg
            viewBox="0 0 16 16"
            className="w-3 h-3 block fill-white shrink-0"
          >
            <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path>
          </svg>
        </div>
      ) : (
        <div
          className="absolute grid place-items-center bg-[#373737] opacity-0 transition-all duration-300 ease-linear w-full h-4 -bottom-5 left-0 rounded-[3px] cursor-row-resize hover:opacity-100 select-none"
          onClick={addRow}
          onMouseDown={(e) => setRowBtnMouseDown(true)}
          onMouseUp={(e) => setRowBtnMouseDown(false)}
        >
          <svg
            viewBox="0 0 16 16"
            className="w-3 h-3 block fill-white shrink-0"
          >
            <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path>
          </svg>
        </div>
      )}

      {ColumnBtnMouseDown ? (
        <div
          className="absolute grid place-items-center bg-[#373737] opacity-100 transition-all duration-300 ease-linear w-4 h-full -right-5 top-0 rounded-[3px] cursor-col-resize select-none"
          onClick={addColumn}
          onMouseDown={(e) => setColumnBtnMouseDown(true)}
          onMouseUp={(e) => setColumnBtnMouseDown(false)}
        >
          <svg
            viewBox="0 0 16 16"
            className="w-3 h-3 block fill-white shrink-0"
          >
            <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path>
          </svg>
        </div>
      ) : (
        <div
          className="absolute grid place-items-center bg-[#373737] opacity-0 transition-all duration-300 ease-linear w-4 h-full -right-5 top-0 rounded-[3px] cursor-col-resize hover:opacity-100 select-none"
          onClick={addColumn}
          onMouseDown={(e) => setColumnBtnMouseDown(true)}
          onMouseUp={(e) => setColumnBtnMouseDown(false)}
        >
          <svg
            viewBox="0 0 16 16"
            className="w-3 h-3 block fill-white shrink-0"
          >
            <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path>
          </svg>
        </div>
      )}

      {MouseDown ? (
        <div
          className="absolute grid place-items-center bg-[#373737] opacity-100 transition-all duration-300 ease-linear w-4 h-4 -right-5 -bottom-5 rounded-full cursor-se-resize select-none"
          // onClick={addBoth}
        >
          <svg
            viewBox="0 0 16 16"
            className="w-3 h-3 block fill-white shrink-0"
          >
            <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path>
          </svg>
        </div>
      ) : (
        <div
          className="absolute grid place-items-center bg-[#373737] opacity-0 transition-all duration-300 ease-linear w-4 h-4 -right-5 -bottom-5 rounded-full cursor-se-resize hover:opacity-100 select-none"
          // onClick={addBoth}
        >
          <svg
            viewBox="0 0 16 16"
            className="w-3 h-3 block fill-white shrink-0"
          >
            <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path>
          </svg>
        </div>
      )}
    </div>
  );
}

export default Table;
