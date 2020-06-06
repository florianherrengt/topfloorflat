import React, { useEffect, useState, useRef } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect, useDispatch, useSelector } from 'react-redux';
import { PropertyProps, PropertyCard } from '../../components/Property';
import { RootState } from '../../redux';
import { ThunkDispatch } from 'redux-thunk';
import { throttle } from 'throttle-debounce';
import {
    GetPropertyAction,
    getProperties,
} from '../../redux/properties/actions';
import { PropertiesPage } from '../../components/PropertiesPage';
import { routerUri } from '../../AppRouter';

interface PropertiesPageProps extends RouteComponentProps {}

export const PropertiesPageConnected: React.SFC<PropertiesPageProps> = props => {
    const searchParams = new URLSearchParams(props.location.search);
    const urlSearchParam: string = decodeURIComponent(
        searchParams.get('search') || '',
    );
    useEffect(() => {
        dispatch(getProperties({ terms: urlSearchParam }));
    }, []);
    const dispatch = useDispatch();
    const [terms, setTerms] = useState(urlSearchParam);
    const properties = useSelector((state: RootState) => state.properties);

    const fetchData = useRef(
        throttle(500, (value: string) => {
            dispatch(getProperties({ terms: value }));
        }),
    ).current;

    const SearchBar = () => (
        <input
            key={Math.random()}
            type='text'
            value={terms}
            autoFocus
            placeholder='e.g top floor london'
            onChange={event => {
                const { value } = event.target;
                setTerms(value);
                props.history.replace(
                    props.location.pathname +
                        '?search=' +
                        encodeURIComponent(value).replace(/%20/gi, '+'),
                );
                fetchData(value);
            }}
        ></input>
    );

    const Header = () => (
        <div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm'>
            <h5 className='my-0 mr-2 font-weight-normal'>Search terms: </h5>
            <div className='mr-md-auto'>
                <SearchBar />
            </div>
            <div className='my-2 my-md-0 mr-md-3'>
                Powered by{' '}
                <a href='https://www.specian.co.uk' target='_blank'>
                    <img
                        className='logo'
                        src='https://www.specian.co.uk/images/logo.png'
                    />
                </a>
            </div>
        </div>
    );

    const LoadingAnimation = () => <div>Loading, Please wait...</div>;

    return (
        <div>
            <Header />
            <div className='container'>
                {properties.loading ? (
                    <LoadingAnimation />
                ) : (
                    <PropertiesPage properties={properties.properties} />
                )}
                {!properties.properties.length && terms ? (
                    <div>No results</div>
                ) : (
                    <div>
                        Search for terms. Example:
                        <ul>
                            <li>
                                <a
                                    href={
                                        routerUri.properties +
                                        '?search=Swimming+Pool'
                                    }
                                >
                                    Swimming pool
                                </a>
                            </li>
                            <li>
                                <a
                                    href={
                                        routerUri.properties +
                                        '?search=High+Ceilings'
                                    }
                                >
                                    High ceilings
                                </a>
                            </li>
                            <li>
                                <a href={routerUri.properties + '?search=Gym'}>
                                    Gym
                                </a>
                            </li>
                            <li>
                                <a
                                    href={
                                        routerUri.properties + '?search=Parking'
                                    }
                                >
                                    Parking
                                </a>
                            </li>
                            <li>
                                <a
                                    href={
                                        routerUri.properties +
                                        '?search=Private+Garden'
                                    }
                                >
                                    Private garden
                                </a>
                            </li>
                            <li>
                                <a
                                    href={
                                        routerUri.properties + '?search=Balcony'
                                    }
                                >
                                    Balcony
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};
