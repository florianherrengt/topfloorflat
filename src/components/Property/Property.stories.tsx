import '../../styles/index.scss';
import React from 'react';
import { Property, PropertyProps } from '.';

export default {
    component: Property,
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
        <Property property={property} />
    </div>
);

export const ShowingPrice = () => (
    <div style={{ padding: 20 }}>
        <Property property={property} showPrice />
    </div>
);
