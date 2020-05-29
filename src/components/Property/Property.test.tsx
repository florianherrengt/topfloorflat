import React from 'react';
import { Property, PropertyProps } from './Property';
import { render, fireEvent } from '@testing-library/react';

describe('Components/Property', () => {
    it('renders', async () => {
        const property: PropertyProps['property'] = {
            id: 'f',
            summary: 'df',
        };
        const { getByText, findByText, queryByText } = render(
            <Property property={property} />,
        );

        fireEvent.click(getByText('Show price'));

        expect((await findByText(/\£2/)).outerHTML).toBe('<div>£2</div>');

        fireEvent.click(getByText('Show price'));

        expect(queryByText(/\£2/)).toBeNull();
    });
});
