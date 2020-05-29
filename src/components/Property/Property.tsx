import React from 'react';

interface PropertyState {
    showPrice: boolean;
}

export interface PropertyProps extends Partial<PropertyState> {
    property: {
        id: string;
        summary: string;
    };
}

export class Property extends React.Component<PropertyProps, PropertyState> {
    constructor(props: PropertyProps) {
        super(props);
        this.state = { showPrice: this.props.showPrice || false };
    }
    toggleShowPrice = () => {
        this.setState({ showPrice: !this.state.showPrice });
    };
    render() {
        return (
            <div className='Property'>
                My Property<div>{this.props.property.summary}</div>
                <button
                    onClick={this.toggleShowPrice.bind(this)}
                    className='Property_Button'
                >
                    Show price
                </button>
            </div>
        );
    }
}
