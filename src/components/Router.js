import {Route, Switch} from 'react-router-dom'
import {Home} from "./views/index"
import {About} from "./views/about"
import {Blog} from "./views/blog"

export function Router(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Blog} />
                <Route exact path="/about" component={About} />
            </Switch>
        </div>
    )
}