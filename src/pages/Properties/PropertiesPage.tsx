import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect, useDispatch, useSelector } from 'react-redux';
import { PropertyProps, Property } from '../../components/Property';
import { RootState } from '../../redux';
import { ThunkDispatch } from 'redux-thunk';
import {
    GetPropertyAction,
    getProperties,
} from '../../redux/properties/actions';
import { PropertiesPage } from '../../components/ProtertiesPage';

interface PropertiesPageProps {}

export const PropertiesPageConnected: React.SFC<PropertiesPageProps> = props => {
    const dispatch = useDispatch();
    const [terms, setTerms] = useState('');
    // useEffect(() => {
    //     dispatch(getProperties({ terms }));
    // }, []);
    const properties = useSelector((state: RootState) => state.properties);

    if (properties.loading) {
        return <div>Loading...</div>;
    }
    const Input = () => (
        <input
            key={Math.random()}
            type='text'
            value={terms}
            autoFocus
            onChange={event => {
                setTerms(event.target.value);
                dispatch(getProperties({ terms: event.target.value }));
            }}
        ></input>
    );

    return (
        <div>
            <Input />
            <PropertiesPage properties={properties.properties} />
        </div>
    );
};

// export class PropertiesPage extends React.Component<
//     PropertiesPageProps,
//     PropertiesPageState
// > {
//     constructor(props: PropertiesPageProps) {
//         super(props);
//         this.state = {
//             data: [],
//             loading: true,
//             terms: '',
//         };
//     }
//     async componentDidMount() {
//         this.props.getProperties && this.props.getProperties(this.state.terms!);
//     }
//     render() {
//         // read property from the store
//         if (this.props.properties.loading) {
//             return <div>Loading...</div>;
//         }

//         return (
//             <div>
//                 <input
//                     type='text'
//                     value={this.state.terms}
//                     onChange={event => {
//                         const terms = event.target.value;
//                         this.setState({ terms });
//                         this.props.getProperties &&
//                             this.props.getProperties(terms);
//                     }}
//                 ></input>
//                 {this.props.properties.properties.map(property => (
//                     <Property
//                         key={Math.random().toString()}
//                         property={property}
//                     />
//                 ))}
//             </div>
//         );
//     }
// }

// const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
//     return {
//         getProperties: (terms: string) => dispatch(getProperties({ terms })),
//     };
// };

// function mapStateToProps(state: RootState) {
//     return { properties: state.properties };
// }

// export const ConnectedPropertiesPage = connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(PropertiesPage);
