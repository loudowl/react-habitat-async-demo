import ReactHabitat         from 'react-habitat';
import { createStore }		from 'redux';
import reducer 				from './reducers';
import ReduxDomFactory		from './ReduxDomFactory';

class SetContainer extends ReactHabitat.Bootstrapper {
	constructor() {
        super();
          if(window.containerBuilder) {
             // Set the DOM container
             this.setContainer(containerBuilder.build());
          }
                        
	}
}

// Export single instance
export default new SetContainer();
