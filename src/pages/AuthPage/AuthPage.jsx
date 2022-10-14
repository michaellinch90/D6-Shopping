import { useState } from "react";
import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../components/Logo/Logo';

export default function AuthPage({ setUser, user }) {
    const [showSignUp, setShowSignUp] = useState(false);
    return (
        <main className="AuthPage">
            <div>
                <Logo />
                <h3 onClick={() => setShowSignUp(!showSignUp)}>
                    {showSignUp ? 'Log In' : 'Sign Up'}
                </h3>
            </div>
            {showSignUp ?
                <SignUpForm setUser={setUser} />
                :
                <LoginForm setUser={setUser} />
            }
        </main>
    );
}