import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import img from "../../../assets/img/Welcome-message-MBurger.png"
const Wellcome = () => {
    const [user]=useAuthState(auth)
    return (
        <div>
            <div className='w-96'>
            <img src={img} alt="" />
            </div>
            <div className='text-3xl text-primary'>
            <h1>Wellcome To Your Dashboard {user?.displayName}</h1>
            </div>
        </div>
    );
};

export default Wellcome;