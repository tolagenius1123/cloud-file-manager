"use client";
import { menuList } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CreateFolderModal from "./folder/CreateFolderModal";

export default function Sidebar() {
    const pathname = usePathname();

    const openModal = () => {
        const modal = document.getElementById(
            "my_modal_3"
        ) as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    };

    return (
        <div className="hidden md:block w-[250px] bg-white h-screen sticky top-0 shadow-md p-5 ">
            <div className="flex justify-center">
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={150}
                    height={60}
                    priority
                />
            </div>
            <button className="flex items-center justify-center gap-2 bg-blue-500 w-full p-2 text-white rounded-md hover:scale-105 transition-all mt-5 text-sm">
                Add New File
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                </svg>
            </button>
            <button
                className="flex items-center justify-center gap-2 bg-sky-400 w-full p-2 text-white rounded-md hover:scale-105 transition-all mt-1 text-sm"
                onClick={openModal}
            >
                Create Folder
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                </svg>
            </button>
            {menuList.map((menu) => (
                <Link
                    key={menu.id}
                    className={`flex gap-2 items-center p-2 mt-3 text-sm text-gray-500 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white ${
                        menu.path === pathname && "text-white bg-blue-500"
                    }`}
                    href={menu.path}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={menu.logo}
                        />
                    </svg>
                    <h2 className="">{menu.name}</h2>
                </Link>
            ))}
            <dialog id="my_modal_3" className="modal">
                <CreateFolderModal />
            </dialog>
        </div>
    );
}
