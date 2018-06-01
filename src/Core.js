import 'babel-polyfill';    // React Habitat requires Object.assign pollyfill for old IE support
import ReactHabitat         from 'react-habitat';
import { createStore }		from 'redux';
import reducer 				from './reducers';
import ReduxDomFactory		from './ReduxDomFactory';

class App extends ReactHabitat.Bootstrapper {

	constructor() {

		super();

		// Create a new container
        const containerBuilder = new ReactHabitat.ContainerBuilder();
        
        window.containerBuilder = containerBuilder;

		// Create a redux store
		const store = createStore(
			reducer,
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // So we can debug redux in browser extension (optional)
        );
        
        window.store = store;

		// Set the container to use our redux factory
		containerBuilder.factory = new ReduxDomFactory(store);

	}
}

// Export single instance
export default new App();
