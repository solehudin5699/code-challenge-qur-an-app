import Button from '@/components/base/Button';
import { TextField } from '@/components/base/Field';
import clsx from 'clsx';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Form } from '@/components/base/FormBase';
import Field from '@/components/base/FormBase/Field';

const initialValues = {
  username: '',
  password: '',
};

function Login() {
  const handleSubmit = ({ username, password }: typeof initialValues) => {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('login', 'true');
      window.location.replace('/surah/1');
    }
  };
  return (
    <Form
      className={clsx(
        'w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#5e67e6] to-[#c5c8f2]',
        'bg-gradient'
      )}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validation={yupResolver(
        Yup.object().shape({
          username: Yup.string().required('Username harus diisi'),
          password: Yup.string().required('Password harus diisi'),
        })
      )}
    >
      <div className="w-full sm:w-[450px] bg-white rounded-xl shadow-lg flex flex-col py-7 px-3 sm:px-10 gap-3">
        <h1 className="text-center font-sembold text-primary-200 text-2xl mb-10">LOGIN</h1>
        <Field component={TextField} name="username" placeholder="Masukkan username Anda" />
        <Field component={TextField} name="password" placeholder="Masukkan password Anda" type="password" />
        <Button className="mt-7">Login</Button>
      </div>
    </Form>
  );
}

export default Login;
