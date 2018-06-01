import ReactHabitat         from 'react-habitat';
import { createStore }		from 'redux';
import reducer 				from './reducers';
import ReduxDomFactory		from './ReduxDomFactory';

class AForm extends ReactHabitat.Bootstrapper {
	constructor() {
		super();
        // Set the container to use our redux factory
        if(window.containerBuilder) {
            containerBuilder.registerAsync(() => System.import('./containers/AddAlbumForm')).as('RAddAlbumForm');
        }
	}
}

// Export single instance
export default new AForm();
