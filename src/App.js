import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import './Style/App.sass';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import CardRotate from './Logics/CardRotate/CardRotate';
class App extends React.Component {
    componentDidMount() {
        CardRotate();
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Provider, { store: store },
                React.createElement(BrowserRouter, null,
                    React.createElement(Header, null),
                    React.createElement(Switch, null,
                        React.createElement(Route, { path: '/(|home|main)', component: MainPage })),
                    React.createElement(Footer, null)))));
    }
}
export default App;
//# sourceMappingURL=App.js.map