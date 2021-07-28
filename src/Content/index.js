import { Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Users from '../Pages/Users'
import NotFound from '../Pages/NotFound'

export default function Content() {
    return <div className='content'>
        <Switch>
            <Route path='/' component={Home} exact /> {/*http://localhost:3000  */}
            <Route path='/about' component={About} /> {/*http://localhost:3000/about  */}
            <Route path='/users/:userid' component={Users} />{/* http://localhost:3000/users */}
            <Route path='*' component={NotFound} />
        </Switch>
    </div>
}