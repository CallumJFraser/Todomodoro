import setupObserver from './setupObserver';

const dispatcher = {};
const publish = setupObserver(dispatcher)

dispatcher.publish = publish;

module.exports = dispatcher;
