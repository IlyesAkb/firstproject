import './styles/index.scss'
import {App} from '@core/App/App'
import {createStore} from '@core/Store/createStore';
import {rootReducer} from '@/js/redux/rootReducer';
import {defaultState} from '@/js/redux/initialState';


const store = createStore(rootReducer, defaultState)
const app = new App('#app', {store})
app.init()
