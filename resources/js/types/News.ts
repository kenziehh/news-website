import { Links } from "./PaginationLinks";
import { NewsData } from "./NewsData";
import { Meta } from "./Meta";

export interface News {
    data: NewsData[];
    links: Links;
    meta: Meta;
}
