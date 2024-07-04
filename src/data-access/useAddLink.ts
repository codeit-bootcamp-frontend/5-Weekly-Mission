import { instance } from "../util";
import { useMutation } from "@tanstack/react-query";
import { useGetLinks, useGetFolders } from ".";
import { LinkRawData, SelectedFolderId } from "../type";

type Params = { url: string; folderId: number };

export const useAddLink = (folderId?: SelectedFolderId) => {
  const { refetch: getLinks } = useGetLinks(folderId);
  const { refetch: getFolders } = useGetFolders();
  const addLink = ({ url, folderId }: Params) =>
    instance.post<LinkRawData[]>("/links", {
      url,
      folderId,
    });

  const { mutate } = useMutation({
    mutationKey: ["addLink"],
    mutationFn: addLink,
    onSuccess: () => {
      getLinks();
      getFolders();
    },
    retry: false,
  });

  return { mutate };
};
