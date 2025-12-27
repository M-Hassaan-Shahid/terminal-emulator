'use strict';

const commandsActions = require('../commandsActions');
const commandClient = require('../../clients/commandClient');

describe('the command actions', function () {
	describe('the runCommand method', function () {
		let requestCommandStub;
		let beginStub;

		beforeEach(function () {
			requestCommandStub = sinon.stub(commandsActions, '_requestCommand');
			beginStub = sinon.stub(commandClient, 'begin');
		});

		afterEach(function () {
			sinon.restore();
		});

		it('should dispatch the requestCommand action creator and run the command', function () {
			const command = 'ls';
			const dispatch = sinon.spy();

			const thunk = commandsActions.runCommand(command);
			thunk(dispatch);

			expect(requestCommandStub.calledOnce).to.be.true;
			expect(requestCommandStub.calledWith(command)).to.be.true;
			expect(beginStub.calledOnce).to.be.true;
			expect(beginStub.calledWith(command)).to.be.true;
		});
	});
});
