import { GetPropertyAction } from './actions';

export interface PropertyState {
    properties: Array<{ id: string; summary: string }>;
    loading: boolean;
    error: string | null;
}

export const defaultState: PropertyState = {
    properties: [],
    loading: false,
    error: null,
};

export const properties = (
    state: PropertyState = defaultState,
    action: GetPropertyAction,
): PropertyState => {
    switch (action.type) {
        case 'GET_PROPERTY_REQUEST':
            return { ...state, loading: true, error: null };
        case 'GET_PROPERTY_SUCCESS':
            return {
                ...state,
                properties: action.payload,
                loading: false,
                error: null,
            };
        case 'GET_PROPERTY_FAILURE':
            return { ...state, loading: false, error: action.payload.error };
        default:
            return state;
    }
};
