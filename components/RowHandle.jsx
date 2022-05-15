import { Dropdown, Menu } from "antd";

function RowHandle() {
  const menu = (
    <Menu
      className="w-60 bg-[#252525] text-white"
      items={[
        {
          label: "Color",
          children: [
            {
              type: 'group',
              label: 'Text color',
              children: [
                {
                  key: '1',
                  label: 'white',
                },
                {
                  key: '2',
                  label: 'gray',
                },
                {
                  key: '3',
                  label: 'brown',
                },
                {
                  key: '4',
                  label: 'orange',
                },
                {
                  key: '5',
                  label: 'yellow',
                },
                {
                  key: '6',
                  label: 'green',
                },
                {
                  key: '7',
                  label: 'blue',
                },
                {
                  key: '8',
                  label: 'purple',
                },
                {
                  key: '9',
                  label: 'pink',
                },
                {
                  key: '10',
                  label: 'red',
                },
              ],
            },
            {
              type: 'group',
              label: 'Background color',
              children: [
                {
                  key: '11',
                  label: 'white',
                },
                {
                  key: '12',
                  label: 'gray',
                },
                {
                  key: '13',
                  label: 'brown',
                },
                {
                  key: '14',
                  label: 'orange',
                },
                {
                  key: '15',
                  label: 'yellow',
                },
                {
                  key: '16',
                  label: 'green',
                },
                {
                  key: '17',
                  label: 'blue',
                },
                {
                  key: '18',
                  label: 'purple',
                },
                {
                  key: '19',
                  label: 'pink',
                },
                {
                  key: '20',
                  label: 'red',
                },
              ],
            },
          ],
        },
        {
          label: "Insert above",
        },
        {
          label: "Insert below",
        },
        {
          label: "Duplicate",
        },
        {
          label: "Clear contents",
        },
        {
          label: "Delete",
        },
      ]}
    />
  );

  return (
    <Dropdown overlay={menu} placement={"bottom"} trigger={"click"}>
      <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-6 h-4 cursor-pointer grid place-items-center bg-[#373737] opacity-0 transition-all duration-300 ease-linear hover:opacity-100">
        <svg
          viewBox="0 0 10 10"
          className="w-4 h-[26px] px-[2px] py-1 block shrink-0 fill-white"
        >
          <path d="M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z"></path>
        </svg>
      </div>
    </Dropdown>
  );
}

export default RowHandle;
