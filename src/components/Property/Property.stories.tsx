import '../../styles/index.scss';
import React from 'react';
import { PropertyCard, PropertyProps } from '.';

export default {
    component: PropertyCard,
    title: 'Property',
};

const property: PropertyProps['property'] = {
    id: 'f',
    summary: 'df',
    imageUrl: '',
    description: '',
    websiteUrl: '',
    region: ''
};

export const Default = () => (
    <div style={{ padding: 20 }}>
        <PropertyCard property={property} />
    </div>
);

export const ShowingPrice = () => (
    <div style={{ padding: 20 }}>
        <PropertyCard property={property} showPrice />
    </div>
);
