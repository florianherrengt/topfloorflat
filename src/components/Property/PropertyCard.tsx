import React from 'react';
import { Property } from '../../redux/properties/actions';

interface PropertyState {
    showPrice: boolean;
}

export interface PropertyProps extends Partial<PropertyState> {
    property: Property;
}

export class PropertyCard extends React.Component<
    PropertyProps,
    PropertyState
> {
    constructor(props: PropertyProps) {
        super(props);
        this.state = { showPrice: this.props.showPrice || false };
    }
    toggleShowPrice = () => {
        this.setState({ showPrice: !this.state.showPrice });
    };
    render() {
        return (
            <div className='row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
                <div className='col-auto d-none d-lg-block align-items-center'>
                    <img
                        className='thumbnail'
                        src={this.props.property.imageUrl}
                    />
                </div>
                <div className='col p-4 d-flex flex-column position-static'>
                    <h4 className='mb-0'>{this.props.property.title}</h4>
                    <div className='card-text mb-auto'>
                        {this.props.property.summary}
                    </div>
                    <div className='d-flex'>
                        <a
                            href={this.props.property.websiteUrl}
                            className='mr-auto'
                        >
                            Learn more
                        </a>
                        <div className='my-2 my-md-0 mr-md-3'>
                            {this.props.property.price}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
