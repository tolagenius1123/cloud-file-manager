import { app } from "@/config/FirebaseConfig";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import Image from "next/image";
import { useState } from "react";

export default function CreateFolderModal() {
    const [folderName, setFolderName] = useState("");

    const db = getFirestore(app);

    const handleSubmit = async () => {
        if (!folderName) {
            console.error("Folder name is empty");
            return;
        }

        try {
            console.log("Folder name:", folderName);
            await setDoc(doc(db, "Folders", "RandomId"), {
                name: folderName,
            });
            console.log("Document successfully written!");
            setFolderName("");
        } catch (error) {
            console.error("Error writing document: ", error);
        }
    };
    // const handleSubmit = async () => {
    //     console.log(folderName);
    //     await setDoc(doc(db, "Folders", "RandomId"), {
    //         name: folderName,
    //     });
    //     setFolderName("");
    // };

    return (
        <div className="modal-box">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                </button>
                <div className="w-full items-center flex flex-col justify-center gap-3">
                    <Image
                        src="/folder.png"
                        alt="folder"
                        width={50}
                        height={50}
                    />
                    <input
                        type="text"
                        placeholder="Folder Name"
                        className=" w-full p-2 border-[1px] outline-none rounded-md"
                        value={folderName}
                        onChange={(e) => setFolderName(e.target.value)}
                    />
                    <button
                        className="bg-blue-500 text-white rounded-md p-2 px-3 w-full"
                        // type="submit"
                        onClick={handleSubmit}
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}
