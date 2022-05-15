function MenuItem({title}) {
  return (
    <li
    className="transition: background 20ms ease-in 0s; cursor-pointer w-[calc(100%-8px)] mx-auto rounded-[3px] min-h-[26px] hover:bg-hover flex items-center gap-3 px-2">
      {title}
    </li>
  );
}

export default MenuItem;
