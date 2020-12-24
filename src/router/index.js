import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "../history"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import Spinner from "../components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "../utility/context/Layout"
import shop2 from '../views/apps/ecommerce/shop/Shop'
const shop = lazy(() => import("../views/apps/ecommerce/shop/Shop"))
const wishlist = lazy(() => import("../views/apps/ecommerce/wishlist/Wishlist"))
const checkout = lazy(() => import("../views/apps/ecommerce/cart/Cart"))
const productDetail = lazy(() => import("../views/apps/ecommerce/detail/Detail"))

// Set Layout and Component Using App Route
const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            return (
                // <ContextLayout.Consumer>
                //     {context => {
                //         let LayoutTag = true
                //             // fullLayout === true
                //                 // ? context.fullLayout
                //                 // : context.state.activeLayout === "horizontal"
                //                 // ? context.horizontalLayout
                //                 // : context.VerticalLayout
                //         return (
                //             <LayoutTag {...props} permission={props.user}>
                //                 <Suspense fallback={<Spinner />}>
                //                     <Component {...props} />
                //                 </Suspense>
                //             </LayoutTag>
                //         )
                //     }}
                // </ContextLayout.Consumer>
                <Component {...props} />
            )
        }}
    />
)
const mapStateToProps = state => {
    return {

    }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
    render() {
        return (
            // Set the directory path if you are deploying in sub-folder
            <Router history={history}>
                <Switch>
                    <AppRoute path="/" component={shop2} />
                    <AppRoute path="/ecommerce/shop" component={shop} />
                    <AppRoute path="/ecommerce/wishlist" component={wishlist} />
                    <AppRoute
                        path="/ecommerce/product-detail"
                        component={productDetail}
                    />
                    <AppRoute
                        path="/ecommerce/checkout"
                        component={checkout}
                        permission="admin"
                    />
                </Switch>
            </Router>
        )
    }
}

export default AppRouter
