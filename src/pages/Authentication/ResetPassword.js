
import React,{Component} from 'react';
class ResetPassword extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
    };
  }
  render() {
    return (
      <div>
       <span>Reset Password</span>
      </div>
    );
  }
}

export default ResetPassword;