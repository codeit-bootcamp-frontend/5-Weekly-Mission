// import { useState, useEffect } from "react";

// export const BaseUrl = "https://bootcamp-api.codeit.kr/api";

// export async function getProfileData() {
//   const response = await fetch(`${BaseUrl}/sample/user`);

//   if (!response.ok) throw new Error("에러");
//   const { name, id, email, profileImageSource } = await response.json();
//   return { name, id, email, profileImageSource };
// }
// export async function getFolderData() {
//   const response = await fetch(`${BaseUrl}/sample/folder`);
//   if (!response.ok) throw new Error("에러");
//   const result = await response.json();

//   return result;
// }

// export function FolderDataLoader({ children }) {
//   const [folderData, setFolderData] = useState(null);

//   useEffect(() => {
//     async function folderFetchData() {
//       try {
//         const folder = await getFolderData();
//         setFolderData(folder);
//       } catch (error) {
//         console.log("Error", error);
//       }
//     }
//     folderFetchData();
//   }, []);

//   return children(folderData);
// }
