
import React,{Component} from 'react';
class SetPassword extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
    };
  }
  render() {
    return (
      <div>
       <span>Set Password</span>
      </div>
    );
  }
}

export default SetPassword;