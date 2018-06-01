import ReactHabitat         from 'react-habitat';
import { createStore }		from 'redux';
import reducer 				from './reducers';
import ReduxDomFactory		from './ReduxDomFactory';

class ACollection extends ReactHabitat.Bootstrapper {
	constructor() {
        super();
        if(window.containerBuilder) {
            containerBuilder.registerAsync(() => System.import('./containers/AlbumCollection')).as('RAlbumCollection');
            // Set the DOM container
		    this.setContainer(containerBuilder.build());
        }
		
	}
}

// Export single instance
export default new ACollection();
