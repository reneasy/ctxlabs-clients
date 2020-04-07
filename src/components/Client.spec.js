import React from 'react';
import Client from './Client.js';

describe('Client Component', () => {
	it('Renders the client list item', () => {
		const wrapper = shallow(<Client />);

		expect(wrapper.find(".Client-item").length).to.equal(1);
	});

	it('Renders the clients avatar image', () => {
		const wrapper = shallow(<Client />);

		expect(wrapper.find("img.Client-avatar").length).to.equal(1);
	});

	it('Renders the client basic info section', () => {
		const wrapper = shallow(<Client />);

		expect(wrapper.find(".Client-basic-info").length).to.equal(1);
	});

	describe('handleClick', () => {
		it('should not render the client details section', () => {
			const wrapper = mount(<Client />);

			expect(wrapper.find(".Client-details").length).to.equal(0);
		});

		it('should toggle client details on click', () => {
			sinon.spy(Client.prototype, 'toggleDetails');
			const wrapper = mount(<Client />);

			wrapper.find('button').simulate('click');

			expect(Client.prototype.toggleDetails.calledOnce).to.equal(true);
			expect(wrapper.find(".Client-details").length).to.equal(1);
		});
	});
});
