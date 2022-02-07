import type { NextApiRequest, NextApiResponse } from 'next';

import { executeQuery } from '@/infrastructure/database/mysql';

export interface DummyData {
  name: string;
  result: string;
}

export default async function dammyApiHandler(
  req: NextApiRequest,
  res: NextApiResponse<DummyData>,
) {
  try {
    const query = 'define sql statemants and ? is replaced values';
    const values = ['value1'];
    const result = await executeQuery(query, values);
    const dummyData: DummyData = {
      name: 'dummy',
      result,
    };
    res.status(200).json(dummyData);
  } catch (e) {
    res.status(500);
  }
}
