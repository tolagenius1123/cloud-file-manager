import Searchbar from "@/components/Searchbar";
import FileList from "@/components/file/FileList";
import FolderList from "@/components/folder/FolderList";

export default function HomePage() {
    return (
        <div className="p-4">
            <Searchbar />
            <FolderList />
            <FileList />
        </div>
    );
}
