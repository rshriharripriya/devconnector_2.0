import {ProSidebar, SidebarContent, SidebarFooter, SidebarHeader} from "react-pro-sidebar";
import {Link} from "react-router-dom";
import React from "react";

<ProSidebar
 // image={ sidebarBg}
 //      rtl="false"
 //      collapsed="false"
 //      toggled="false"
 //      breakPoint="md"
 // width="7cm"
      >
  <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',

          }}
        >
          <h1>dev</h1>
        </div>
      </SidebarHeader>
  <SidebarContent>
      {
          <Link to='/profile/profile' className='btn-dash btn-light'>
              <i className='fas fa-user-circle text-primary'/>
          </Link>
      }
       </SidebarContent>
      <SidebarContent>
      {
           <Link to='/edit-profile' className='btn-dash btn-light'>
        <i className='fas fa-edit text-primary' />
      </Link>
      }
       </SidebarContent>
      <SidebarContent>
      {
          <Link to='/add-experience' className='btn-dash btn-light'>
        <i className='fab fa-black-tie text-primary' />
      </Link>
      }
       </SidebarContent>
            <SidebarContent>
      {
          <Link to='/add-education' className='btn-dash btn-light'>
        <i className='fas fa-graduation-cap text-primary' />
      </Link>
      }
       </SidebarContent>





  <SidebarFooter>
    {/**
     *  You can add a footer for the sidebar ex: copyright
     */}
  </SidebarFooter>
</ProSidebar>



    // <div className=" cols w3-sidebar w3-bar-block  " >
    //
    //
    //       {profile !== null ? (
    //     <Fragment>*/}
    //
    //         <Link to='/profile/profile' className='btn-dash btn-light'>
    //     <i className='fas fa-user-circle text-primary' />*/}
    //   </Link>*/}
    //
    //         <Link to='/edit-profile' className='btn-dash btn-light'>*/}
    //     <i className='fas fa-edit text-primary' />*/}
    //   </Link>*/}
    //   <Link to='/add-experience' className='btn-dash btn-light'>*/}
//         <i className='fab fa-black-tie text-primary' />*/}
//       </Link>*/}
// {/*      <Link to='/add-education' className='btn-dash btn-light'>*/}
// {/*        <i className='fas fa-graduation-cap text-primary' />*/}
// {/*      </Link>*/}
//
//
// {/*          /!*<li><Experience experience={profile.experience} /></li>*!/*/}
// {/*          /!*<li><Education education={profile.education} /></li>*!/*/}
//
//
// {/*        </Fragment>*/}
// {/*      ) : (*/}
// {/*        <Fragment>*/}
// {/*          <p>You have not yet setup a profile, please add some info</p>*/}
// {/*          <Link to="/create-profile" className="btn btn-primary my-1">*/}
// {/*            Create Profile*/}
// {/*          </Link>*/}
// {/*        </Fragment>*/}
// {/*      )}*/}
