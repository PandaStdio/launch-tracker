import React from 'react'
import Auth from '@aws-amplify/auth';
import { Link } from "react-router-dom";
import Banner from './common/Banner';

const Admin = () => {
  let signOut = async() => {
    await Auth.signOut();
    console.log("Sign out succesfully")
  }
  return (
    <div>
      <Banner
        subHeading="Admin"
        heading="Admin Dashboard"
        description="This is the admin dashboard"
        />
      <h2 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-lg text-gray-900">
        Admin
      </h2>
      <div className="ml-3 text-base">
        <Link
          to={{
            pathname: '/home',
          }}
          onClick={signOut}
          className="pt-2 text-sm text-gray-500 hover:text-gray-600"
        >
          Log out
        </Link>
      </div>
    </div>
  )
}

export default Admin
