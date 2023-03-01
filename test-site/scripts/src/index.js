
import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    //Lodash, now imported by this script
    element.innerHTML = _.join(['hello', 'webpack'], '');

    return element;
}

document.body.appendChild(component());