import LinksData from "./Links.json"

export function GetLinkByName(name) {
    const link = LinksData.find(link => link.name === name);
    return link ? link.url : null;
}