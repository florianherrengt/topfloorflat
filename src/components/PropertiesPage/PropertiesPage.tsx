import React from 'react';
import { Property } from '../Property';

interface PropertiesPage {
    properties: Array<{ id: string; summary: string; imageUrl: string; description:string, websiteUrl: string, region:string }>;
}

export const PropertiesPage: React.FunctionComponent<PropertiesPage> = props => {
    return (
        <div>
            {props.properties.map(property => (
                <Property key={Math.random().toString()} property={property} />
            ))}
        </div>
    );
};
