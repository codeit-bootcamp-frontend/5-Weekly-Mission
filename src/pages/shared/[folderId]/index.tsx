import React from "react";
import Main from "@/Components/SharedMain/SharedMain";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { useRouter } from "next/router";

function Shared() {
    const router = useRouter();
    const { folderId } = router.query;

    // folderId가 문자열 | undefined일 경우 첫번째 문자열을 선택
    const folderIdString =
        typeof folderId === "string" ? folderId : Array.isArray(folderId) ? folderId[0] : undefined;

    return (
        <>
            <Header />
            <Main folderId={folderIdString} />
            <Footer />
        </>
    );
}

export default Shared;
