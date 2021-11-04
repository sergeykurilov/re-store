import React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app/app";
import BookstoreService from "./services/bookstore-service";
import {Provider} from "react-redux";
import store from "./store";
import ErrorBoundry from "./components/error-boundry";
import {BrowserRouter as Router} from "react-router-dom";
import {BookstoreServiceProvider} from "./components/bookstore-service-context";


const bookstoreService = new BookstoreService()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App/>
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>, document.getElementById('root'))
