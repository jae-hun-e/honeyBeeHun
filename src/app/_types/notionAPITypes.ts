import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export type AnnotationResponse = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color:
    | "default"
    | "gray"
    | "brown"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "red"
    | "gray_background"
    | "brown_background"
    | "orange_background"
    | "yellow_background"
    | "green_background"
    | "blue_background"
    | "purple_background"
    | "pink_background"
    | "red_background";
};

export type multi_select = {
  type: "multi_select";
  multi_select: Array<{ id: string; name: string; color: string }>;
};

export type title = {
  type: "title";
  title: Array<RichTextItemResponse>;
  id: string;
};
