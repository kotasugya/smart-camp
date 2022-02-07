// import mysql from 'serverless-mysql';

// export const db = mysql({
//   config: {
//     host: process.env.MYSQL_HOST,
//     database: process.env.MYSQL_DATABASE,
//     user: process.env.MYSQL_USERNAME,
//     password: process.env.MYSQL_PASSWORD,
//     port: parseInt(process.env.MYSQL_PORT),
//   },
// })

export const executeQuery = async (
  q: string,
  values: (string | number)[] | string | number = [],
) => {
  try {
    // const results = await db.query(q, values);
    const results = `${q} ${values.toString()}`;
    // await db.end();
    return results;
  } catch (e) {
    throw Error(e.message);
  }
};
