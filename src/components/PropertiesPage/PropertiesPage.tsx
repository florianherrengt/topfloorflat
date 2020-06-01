import React from 'react';
import { PropertyCard } from '../Property';
import { Property } from '../../redux/properties/actions';

interface PropertiesPage {
    properties: Array<Property>;
}

export const PropertiesPage: React.FunctionComponent<PropertiesPage> = props => {
    return (
        <div>
            {props.properties.map(property => (
                <PropertyCard key={Math.random().toString()} property={property} />
            ))}
        </div>
    );
};
