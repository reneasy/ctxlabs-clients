import React from 'react';
import Clients from './Clients.js';

const clients = require('../../data/clients.json');

describe('Clients Component', () => {
	beforeEach(() => {
		const mockResponse = {
			status: () => {},
			json: () => {
				return clients;
			}
		};

		let stub = sinon.stub(global, 'fetch')
		stub.returns(Promise.resolve(mockResponse));
	});

	afterEach(() => {
		global.fetch.restore();
	});

	it('Renders the header section', () => {
		const wrapper = shallow(<Clients />);

		expect(wrapper.find("header.Clients-header").length).to.equal(1);
	});

	it('Renders the clients search form', () => {
		const wrapper = shallow(<Clients />);

		expect(wrapper.find("form.Clients-search").length).to.equal(1);
	});

	it('Renders the clients count section', () => {
		const wrapper = shallow(<Clients />);

		expect(wrapper.find(".Clients-count").length).to.equal(1);
	});

	it('Renders the clients list section', () => {
		const wrapper = shallow(<Clients />);

		expect(wrapper.find(".Clients-list").length).to.equal(1);
	});

	it('Renders the footer section', () => {
		const wrapper = shallow(<Clients />);

		expect(wrapper.find("footer.Clients-footer").length).to.equal(1);
	});

	describe('componentDidMount', () => {
		it('should call componentDidMount', () => {
			sinon.spy(Clients.prototype, 'componentDidMount');

			// eslint-disable-next-line no-unused-vars
			const wrapper = mount(<Clients />);
			expect(Clients.prototype.componentDidMount.calledOnce).to.equal(true);			
		});

		it('should call fetch on componentDidMount', () => {
			// eslint-disable-next-line no-unused-vars
			const wrapper = mount(<Clients />);

			expect(global.fetch.calledOnce).to.equal(true);			
		});
	});

	describe('handleChange', () => {
		it('should fetch client data onChange', () => {
			sinon.spy(Clients.prototype, 'handleChange');
			const wrapper = mount(<Clients />);

			wrapper.find('input').simulate('change', {target: {value: 'Your new Value'}});

			expect(Clients.prototype.handleChange.calledOnce).to.equal(true);			
			expect(global.fetch.calledTwice).to.equal(true);			
		});
	});

	describe('getClients', () => {
		it('should call getClients on render', () => {
			sinon.spy(Clients.prototype, 'getClients');

			// eslint-disable-next-line no-unused-vars
			const wrapper = mount(<Clients />);

			expect(Clients.prototype.getClients.calledOnce).to.equal(true);			
		});
	});

	describe('getClientsLength', () => {
		xit('should return the total number of clients', () => {
			sinon.spy(Clients.prototype, 'getClientsLength');

			const wrapper = mount(<Clients />);
			// Todo: state won't persist
			wrapper.forceUpdate();

			expect(Clients.prototype.getClientsLength.calledOnce).to.equal(true);			
			expect(wrapper.instance().getClientsLength()).to.equal(5);			
		});
	});
});
