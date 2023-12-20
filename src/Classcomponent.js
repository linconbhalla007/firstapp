import React ,{Component} from 'react'
import MyFunctionComponent from './FunctionComponent';


class Classcomponent extends Component{
    
      
    render(){
        console.log('inside render')
        return(
            <div>
                <h1>This is Class component </h1>
            
            </div>
        );
    }

}

export default Classcomponent;

