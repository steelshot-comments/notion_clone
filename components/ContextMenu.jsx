import MenuItem from "./MenuItem";
function ContextMenu({ anchorPoint }) {
  return (
    <ul
      className="text-sm bg-white py-1 w-36 h-auto m-0 absolute list-none shadow-ctxmenuDark rounded z-10"
      style={{
        top: anchorPoint.y,
        left: anchorPoint.x,
      }}
    >
        <MenuItem title="Delete" />
        <MenuItem title="Cut" />
        <MenuItem title="Copy" />
        <hr className="my-1" />
        <MenuItem title="Refresh" />
        <MenuItem title="Exit" />
    </ul>
  );
}

export default ContextMenu;
