import LoginPage from '../../pages/login/loginPage';
import { authOptions } from "../../lib/auth";

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';


export default async function Login() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect('/');
  }
  return <LoginPage/>;
};
