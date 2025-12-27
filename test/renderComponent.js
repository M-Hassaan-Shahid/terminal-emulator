'use strict';

const { JSDOM } = require('jsdom');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

global.renderComponent = function renderComponent(Component, props) {
	return new Promise((resolve, reject) => {
		try {
			const reactElement = React.createElement(Component, props);
			const markup = ReactDOMServer.renderToStaticMarkup(reactElement);

			const dom = new JSDOM(`<!DOCTYPE html><body>${markup}</body>`);
			resolve(dom.window.document.body.firstChild);
		} catch (err) {
			reject(err);
		}
	});
};