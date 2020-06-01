import React from 'react';
import { PropertyCard, PropertyProps } from './PropertyCard';
import { render, fireEvent } from '@testing-library/react';

describe('Components/Property', () => {
    it('renders', async () => {
        const property: PropertyProps['property'] = {
            id: 'f',
            summary: 'df',
            imageUrl: '',
            websiteUrl: '',
            description: 'dsfs',
            region: ''
        };
        const { getByText, findByText, queryByText } = render(
            <PropertyCard property={property} />,
        );

        fireEvent.click(getByText('Show price'));

        expect((await findByText(/\£2/)).outerHTML).toBe('<div>£2</div>');

        fireEvent.click(getByText('Show price'));

        expect(queryByText(/\£2/)).toBeNull();
    });
});
