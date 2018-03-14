import addHeaderToDom from './helpers';

import def, {add, multiplication, division, subtraction} from './math';
addHeaderToDom('add with number: 3, 4: '+ add(3,4));
addHeaderToDom(`subt with number: 3, 4: ${subtraction(3,4)}`);
addHeaderToDom('div with number: 3, 4: '+ division(3,4));
addHeaderToDom('mult with number: 3, 4: '+ multiplication(3,4));
addHeaderToDom('mult with number: 3, 4: '+ def());

