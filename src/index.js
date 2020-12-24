import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { store } from "./stores"
import './index.scss';
    import * as serviceWorker from './serviceWorker';
import Spinner from "./components/@vuexy/spinner/Fallback-spinner"
const LazyApp = lazy(() => import("./App"))
ReactDOM.render(
        <Provider store={store}>
            <Suspense fallback={<Spinner />}>
                        <LazyApp />
            </Suspense>
        </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
