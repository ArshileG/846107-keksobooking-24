import { generateRandObj } from './data.js';
import {createCardFromData} from './randElements.js';
import {activateForm, disableForm} from './forms.js';

const randomData = generateRandObj(3);
disableForm();
//activateForm();
randomData.forEach((randomDataItem) =>{
  createCardFromData(randomDataItem);
});


