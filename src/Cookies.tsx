"use server"

import { cookies } from 'next/headers';
import React, { useEffect } from 'react'

const Cookies = () => {

    useEffect(() => {
        const accessToken = sessionStorage.getItem('access_token');
    
        if (accessToken) {
          cookies().set({
            name: 'access_token',
            value: accessToken,
            httpOnly: true,
            sameSite: 'strict',
            secure: true,
          });
        }
      }, []);

  return (
    <></>
  )
}

export default Cookies