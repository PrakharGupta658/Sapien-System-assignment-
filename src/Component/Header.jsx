import React from 'react';
import { BsBell } from 'react-icons/bs';
import { CgMenuGridR, CgProfile } from 'react-icons/cg';

function Header() {
  return (
    <div style={{
        backgroundColor: '#262323',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px',
        padding: '0 16px',
    
      }}>
      <div style={{display:"flex", alignItems:"center"}}>
        <img src="https://sapien.systems/SapienLogo.svg" alt="Company Logo" style={{width:"50px", marginRight:"10px"}} />
        <div style={{color:"white" , fontSize:"18px"}}>Sapien System</div>
      </div>
      <div style={{color: 'white', fontSize: '18px', fontWeight: 'bold', textAlign:"center"}}>
        #beAChangemaker
      </div>
      <div style={{display: 'flex', alignItems: 'center', fontSize:"24px"  , color:"white"}}>
         <BsBell style={{marginRight:"10px"}} />
          <CgMenuGridR style={{marginRight:"10px"}}/>
          <CgProfile/>
      </div>
    </div>
  );
}

export default Header;
