"use server";

import { writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

export const saveUserMessage = async (values: any) => {
  try {
    let data = '';
    values.time = (new Date()).toISOString();

    if (existsSync('./client-data/user-messages.json')) {
      data =  ',\n' + JSON.stringify(values) 
    } else {
      data = '[' + JSON.stringify(values);
    }

    await writeFile('./client-data/user-messages.json', data, { flag: 'a' })
  } catch (err) {
    console.error(err);
  }
};
