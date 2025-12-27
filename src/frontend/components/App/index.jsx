"use strict";

const React = require("react");

function App(props) {
	const { output, runCommand } = props;
	const outputChildren = output.map((o) => (
		<li key={o.id} className="output__item">
			<pre>{o.value}</pre>
		</li>
	));

	return (
		<div className="terminal">
			<div className="terminal__wrapper">
				<ul className="terminal__output">{outputChildren}</ul>

				<div className="terminal__input-container">
					<input
						className="terminal__input"
						type="text"
						placeholder="Type a command and press Enter..."
						onKeyUp={runCommand}
						autoFocus
					/>
				</div>
			</div>
		</div>
	);
}

module.exports = App;
