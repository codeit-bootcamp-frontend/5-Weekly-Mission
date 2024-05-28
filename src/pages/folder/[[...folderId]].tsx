import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Main from "@/Components/FolderMain/FolderMain";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

function Folder() {
    const router = useRouter();

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            router.push("/signin");
        }
    }, []);

    const { folderId } = router.query;

    return (
        <>
            <Header />
            <Main folderId={typeof folderId === "string" ? folderId : null} />
            <Footer />
        </>
    );
}

export default Folder;
