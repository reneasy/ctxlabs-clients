import React from 'react';
import Clients from './Clients.js';

describe('Clients Component', () => {

	it('renders the header tag', () => {
		const wrapper = shallow(<Clients />);

		expect(wrapper.find("header").length).to.equal(1);
	});
});
