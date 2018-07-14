'use strict';
const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Visit my personal website',
		url: 'https://andrete.eu'
	},
	{
		label: 'Find me on GitHub',
		url: 'https://github.com/antekai'
	},
	{
		label: 'Connect with me at LinkedIn',
		url: 'https://linkedin.com/in/andreasten'
	},
	{
		label: 'Say Hello',
		url: 'https://andrete.eu/contact'
	},
	{
		label: 'Quit',
		action() {
			process.exit();
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>Hi, I am Andreas. A web developer based in Berlin.</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);