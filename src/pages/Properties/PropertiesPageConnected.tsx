import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect, useDispatch, useSelector } from 'react-redux';
import { PropertyProps, PropertyCard } from '../../components/Property';
import { RootState } from '../../redux';
import { ThunkDispatch } from 'redux-thunk';
import {
    GetPropertyAction,
    getProperties,
} from '../../redux/properties/actions';
import { PropertiesPage } from '../../components/PropertiesPage';

interface PropertiesPageProps {}

export const PropertiesPageConnected: React.SFC<PropertiesPageProps> = props => {
    const dispatch = useDispatch();
    const [terms, setTerms] = useState('');
    // useEffect(() => {
    //     dispatch(getProperties({ terms }));
    // }, []);
    const properties = useSelector((state: RootState) => state.properties);

    const SearchBar = () => (
        <input
            key={Math.random()}
            type='text'
            value={terms}
            autoFocus
            placeholder='search properties'
            onChange={event => {
                setTerms(event.target.value);
                dispatch(getProperties({ terms: event.target.value }));
            }}
        ></input>
    );

    const Header = () => (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-2 font-weight-normal">Top Floor Property Finder: </h5>
            <div className="mr-md-auto">
                <SearchBar />
            </div>
            <div className="my-2 my-md-0 mr-md-3">
                Powered by <a href="https://www.specian.co.uk" target="_blank">
                <img className="logo" src="https://www.specian.co.uk/images/logo.png" />
                </a>
            </div>
        </div>
    );

    const LoadingAnimation = () => (
        <div>Loading, Please wait...</div> 
    );

    return (
       
            <div>
                <Header />
                <div className="container">
                    {properties.loading? <LoadingAnimation />
                    : <PropertiesPage properties={properties.properties} />}
                </div>
            </div>
    );
};