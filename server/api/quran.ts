import { H3Event } from "h3";
import quran from "~/server/db/static/quran.json";

export default defineEventHandler((event: H3Event) => {
  const query = getQuery(event);
  const index = query && query.index ? +query.index : 0;
  const Size = quran.length;
  const legitIndex = index && index <= Size
  const Data = legitIndex ? quran[index-1] : quran
  return {
    data: Data
  }
})