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
            <div className='card mb-3 shadow'>
                <div className='row no-gutters'>
                    <div className='col-md-4'>
                        <img
                            src={this.props.property.imageUrl}
                            className='card-img'
                        />
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h4 className='mb-0'>
                                {this.props.property.title}
                            </h4>
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
                </div>
            </div>
        );
    }
}
