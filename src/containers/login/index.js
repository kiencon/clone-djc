import { useHistory } from 'react-router-dom';
import Login from '../../components/login/Login';

const LoginPage = () => {
  const history = useHistory();
  
  const onFinish = ({ username }) => {
    localStorage.setItem('user', username);
    history.push('/dashboard');
  };

  const onFinishFailed = (errorInfo) => {
    // todo toast notify
    alert('Failed:', JSON.stringify(errorInfo, null, 2));
  };

  return (
    <Login 
      asdsd={1234}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    />
  );
};

export default LoginPage;
