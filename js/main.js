import { generateRandObj } from './data.js';
import {createCardFromData} from './randElements.js';
import {disableForm} from './forms.js';

const randomData = generateRandObj(3);
//disableForm();
randomData.forEach((randomDataItem) =>{
  createCardFromData(randomDataItem);
});


