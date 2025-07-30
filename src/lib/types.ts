export type TagsInfo = {
    tags:string[],
    title:Title,
    className:string
}

export type SearchTypes = {
  initialValue: string;
  onSearch: (search: string) => void;
}

export type Title = string
export type Index = number