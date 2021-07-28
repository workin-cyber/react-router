import './app.css'

import Menu from '../Menu'
import Content from '../Content'
import { useHistory } from 'react-router-dom'

function App() {
    const history = useHistory()

    function goHome() {
        console.log('home')
        history.push('/')
    }

    function back() {
        console.log('back')
        history.goBack()
        //history.goForward()
    }

    return <div className='App'>
        <header>
            <span onClick={goHome}>Header</span>
            <button onClick={back}>back</button>
        </header>
        <main>
            <Menu />
            <Content />
        </main>
        <footer>Footer</footer>
    </div>
}

export default App