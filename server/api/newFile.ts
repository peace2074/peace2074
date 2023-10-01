import type { H3Event } from 'h3';
import { defineEventHandler } from 'h3';
import hollynames from '~/server/db/static/gnames';
import { nameI } from './holynames.get';

export default defineEventHandler((event: H3Event) => {
const query = getQuery(event);
const index = query && query.index ? +query.index : 0;
const Size = hollynames.length;
const legitIndex = index && index <= Size;
const names = legitIndex ? hollynames[index - 1] : hollynames as nameI[];

return {
names,
};
});
