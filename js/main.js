import { generateRandObj } from './data.js';
import {createCardFromData} from './randElements.js';

const randomData = generateRandObj(3);

randomData.forEach((randomDataItem) =>{
  createCardFromData(randomDataItem);
});
