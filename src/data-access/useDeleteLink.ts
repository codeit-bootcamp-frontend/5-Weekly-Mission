import { instance, queryClient } from "../util"
import { useMutation } from "@tanstack/react-query";
import { useGetLinks, useGetFolders } from ".";
import { LinkRawData, SelectedFolderId } from "../type";

type Params = { linkId: number };

export const useDeleteLink = (folderId?: SelectedFolderId) => {
  const { refetch: getLinks } = useGetLinks(folderId);
  const { refetch: getFolders } = useGetFolders();
  const deleteLink = ({ linkId }: Params) =>
    instance.delete<LinkRawData[]>(`/links/${linkId}`);

  const { mutate } = useMutation({
    mutationKey: ["deleteLink"],
    mutationFn: deleteLink,
    onSuccess: () => {
      getLinks();
      getFolders();
      queryClient.invalidateQueries({ queryKey: ["getLinks", folderId] });
    },
    retry: false,
  });

  return { mutate };
};