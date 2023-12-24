
import { defineEventHandler, getQuery } from 'h3';
import matrix from '../db/static/matrix';

export default defineEventHandler((event) => {
  const query = getQuery(event);
  let { index } = query
  const res = !!index && +index || 0
  const matrixSize = matrix.length;
  return {
    body: matrix[res > 0 && res <= matrixSize ? res : 0] || []
  };


})