import Image from "next/image";

type FolderItemProps = {
    folder: {
        id: number;
        name: string;
    };
};

export default function FolderItem({ folder }: FolderItemProps) {
    return (
        <div className="w-full h-[130px] flex flex-col justify-center items-center border-[1px] rounded-lg p-5 hover:scale-105 hover:shadow-md">
            <Image src="/folder.png" alt="folder" height={40} width={40} />
            <h2 className="line-clamp-2 text-[12px] text-center">
                {folder?.name}
            </h2>
        </div>
    );
}
