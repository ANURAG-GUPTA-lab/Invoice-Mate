import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const OAuthCallback = () => {
    const history = useHistory();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        if (code) {
            axios.post('http://localhost:3000/auth/google/callback', { code })
                .then(response => {
                    localStorage.setItem('accessToken', response.data.accessToken);
                    localStorage.setItem('refreshToken', response.data.refreshToken);
                    history.push('/invoices'); // Redirect to invoices page after successful login
                })
                .catch(error => {
                    console.error('Error during OAuth callback:', error);
                });
        } else {
            console.error('No code found in the URL');
        }
    }, [history]);

    return (
        <div>
            <h2>Processing OAuth callback...</h2>
        </div>
    );
};

export default OAuthCallback;
