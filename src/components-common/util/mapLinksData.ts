import { format } from "date-fns";
import { getElapsedTime } from "@/src/components-common/util";
import { EditedSampleLink, SampleLink } from "../../../types/data-access-types";

interface mapLinksDataType {
  (link: SampleLink): EditedSampleLink;
}

export const mapLinksData: mapLinksDataType = (link) => {
  const { id, createdAt, url, imageSource, title, description } = link;

  return {
    id,
    createdAt: format(new Date(createdAt), "yyyy. MM. dd"),
    url,
    description,
    imageSource,
    alt: `${title ?? url}의 대표 이미지`,
    elapsedTime: getElapsedTime(createdAt),
  };
};
