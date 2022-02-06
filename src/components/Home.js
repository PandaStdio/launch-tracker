import React from 'react'
import Auth from '@aws-amplify/auth';
import { Link } from "react-router-dom";
import { styles } from './utils';
import style from './styles.css'

const Home = () => {
  let signOut = async() => {
    await Auth.signOut();
    console.log("Sign out succesfully")
  }
  return (
    <div>
      <h2 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-lg text-gray-900">
        Home page
      </h2>
      <div className="ml-3 text-base">
        <Link
          to={{
            pathname: '/log-in',
          }}
          onClick={signOut}
          className="pt-2 text-sm text-gray-500 hover:text-gray-600"
        >
          Log out
        </Link>
      </div>
      <div classname={styles.container}>
        {/* <ul className="flex flex-col">
        <li className={styles.li}>test1</li>
        <li className={styles.li}>test2</li>
        <li className={styles.li}>test3</li>
        </ul> */}

      <div class="flex flex-col ..." style={{border:'1px solid black'}}>
        <div class="flex flex-col ..." style={{border:'1px solid pink'}}>
          title   
          <div class="flex flex-row ..." style={{border:'1px solid yellow'}}>
            <div  class="flex flex-col flex2 ..." style={{border:'1px solid blue'}}>
              <div class="flex flex-col flex1 ..." style={{border:'1px solid green'}}>
                <h2>launch tit </h2>
              </div>
              <div class="flex flex1 ..." style={{border:'1px solid black'}}>
                <p>
                  launch.
                </p>
              </div>
              <div class="flex flex-auto ..." style={{border:'1px solid black'}}>
                company 
              </div>
            </div> 
            <div class="flex flex-col flex1..." style={{border:'1px solid orange'}}>
              <img src="images/BarryBBenson.jpg" alt="Barry"></img> 
            </div>
          </div>

        </div>
          <div class="flex flex-auto ..." style={{border:'1px solid black'}}>
            <div class="flex-col flex2 ... " style={{border:'1px solid green'}}>
              <div class="flex flex1" style={{border:'1px solid black'}}>
                date 
              </div>

              <div class="flex flex-col  ..." style={{border:'1px solid black'}}>
                location 
              </div>
            </div>
            
            <div class="flex flex-col flex1 ..." style={{border:'1px solid orange'}}>
              more info
            </div>
          </div>
        </div>


      </div>
    </div>

  )
}
// ixycfqdzwgtuomvfzm@wqcefp.com
export default Home
