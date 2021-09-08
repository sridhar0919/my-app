import React from 'react';
import './App.css';
import Card from './components/Card';

export default function App(){

  let free = {
    pack : "FREE",
    amount : "$0",
    userCount : 'Single User',
    storage : '5GB Storage',
    domain : 'Free Subdomain'
  }

  let plus = {
    pack : "PLUS",
    amount : "$9",
    userCount : '5 Users',
    storage : '50GB Storage',
    domain : 'Free Subdomain'
  }

  let pro = {
    pack : "PRO",
    amount : "$49",
    userCount : 'Unlimited Users',
    storage : '150GB Storage',
    domain : 'Unlimited Free Subdomains'
  }
  return (
    <>
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <Card props={free}/>
            </div>
            <div class="col-lg-4">
              <Card props={plus}/>
            </div>
            <div class="col-lg-4">
              <Card props={pro}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}