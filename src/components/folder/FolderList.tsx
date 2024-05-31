import FolderItem from "./FolderItem";

export default function FolderList() {
    const folderList = [
        {
            id: 1,
            name: "Folder 1 to Test Big Text",
        },
        {
            id: 2,
            name: "Folder 2",
        },
        {
            id: 3,
            name: "Folder 3",
        },
        {
            id: 4,
            name: "Folder 4",
        },
    ];

    return (
        <div className="p-5 mt-5 bg-white rounded-lg">
            <h2 className="text-[16px] font-bold items-center">
                Recent Folders
                <span className="float-right text-blue-400 font-normal text-[14px]">
                    View All
                </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3 gap-2">
                {folderList?.map((item) => (
                    <FolderItem key={item.id} folder={item} />
                ))}
            </div>
        </div>
    );
}
