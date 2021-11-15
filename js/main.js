import { generateRandObj } from './data.js';
import {createCardFromData} from './randElements.js';
import {disableForm,activateForm} from './forms.js';

const randomData = generateRandObj(3);
disableForm();
activateForm();
randomData.forEach((randomDataItem) =>{
  createCardFromData(randomDataItem);
});


