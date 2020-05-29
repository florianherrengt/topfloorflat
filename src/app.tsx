import './styles/index.scss';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { AppRouter } from './AppRouter';
import { configureStore } from './redux/configureStore';

const store = configureStore();

export class App extends React.Component {
    render() {
        return (
            <ReduxProvider store={store}>
                <AppRouter />
            </ReduxProvider>
        );
    }
}
