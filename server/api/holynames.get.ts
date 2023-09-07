import { defineEventHandler, H3Event } from "h3";
import hollynames from '~/server/db/static/gnames' ;


export default defineEventHandler((event: H3Event) => {
  const query = getQuery(event);
  const index = query && query.index ? +query.index : 0;
  const Size = hollynames.length;
  const legitIndex = index && index <= Size
  const Data  = legitIndex ? hollynames[index - 1] : hollynames


  return {
    data: Data || 'Data'

  };
})