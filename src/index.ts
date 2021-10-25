import { Container } from '@owja/ioc';

import UI from './UI/index';
import Controllers from './app/Controllers';
import { containerize } from './app/task/repositories';

const container = new Container();
const resolve = containerize(container);
const ControllersFactory = new Controllers(resolve);
const ui = new UI();

ui.provide('controllers', ControllersFactory);
ui.render(document.querySelector('#app'));
