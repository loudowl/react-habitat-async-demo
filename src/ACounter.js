import ReactHabitat         from 'react-habitat';
import { createStore }		from 'redux';
import reducer 				from './reducers';
import ReduxDomFactory		from './ReduxDomFactory';

class ACounter extends ReactHabitat.Bootstrapper {
	constructor() {
		super();
        if(window.containerBuilder) {
            containerBuilder.registerAsync(() => System.import('./containers/AlbumCounter')).as('RAddAlbumCounter');
        }
	}
}

// Export single instance
export default new ACounter();
