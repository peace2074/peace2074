import quran from "~/server/db/static/quran.json";
import { H3Event } from "h3";
import { _reParseString } from "waelio-utils";


export default defineEventHandler((event: H3Event) => {
  // const decoder = new TextDecoder('utf-8')
  const query = getQuery(event);
  const index = query && query.index ? +query.index : 0;
  const Size = quran.length;
  const legitIndex = index && index <= Size
  const response = legitIndex ? quran[index - 1] : quran
  return {
    // @ts-ignore    
    data: _reParseString(response)
  }
})