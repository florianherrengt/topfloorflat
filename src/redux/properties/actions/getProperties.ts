import { ThunkAction } from 'redux-thunk';
import { RootState } from '../..';

export interface Property {
    id: string;
    summary: string;
    description: string;
    imageUrl: string;
    websiteUrl: string;
    region: string;
}

interface GetPropertyRequest {
    type: 'GET_PROPERTY_REQUEST';
}

interface GetPropertySuccess {
    type: 'GET_PROPERTY_SUCCESS';
    payload: Property[];
}

interface GetPropertyFailure {
    type: 'GET_PROPERTY_FAILURE';
    payload: { error: string };
}

export type GetPropertyAction =
    | GetPropertyRequest
    | GetPropertySuccess
    | GetPropertyFailure;

interface Options {
    terms: string;
}

export const getProperties = (
    options: Options,
): ThunkAction<Promise<void>, RootState, Options, GetPropertyAction> => async (
    dispatch,
    getState,
) => {
    dispatch({
        type: 'GET_PROPERTY_REQUEST',
    });
    try {
        const request = await fetch(
            'https://topfloorflat.herokuapp.com/search/' + options.terms,
        );
        const data = await request.json();
        dispatch({
            type: 'GET_PROPERTY_SUCCESS',
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'GET_PROPERTY_FAILURE',
            payload: { error: 'Cannot fetch data' },
        });
    }
};
