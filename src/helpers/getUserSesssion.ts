import { getServerSession } from 'next-auth';
import { authOptions } from './authOptions';

const getUserSesssion = async() => await getServerSession(authOptions)

export default getUserSesssion;