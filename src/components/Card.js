import React from 'react';

export default function Card({props}) {
  const domain = (domain) => {
    if (domain === "FREE") {
      return <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Domain</li> 
    }
    else if (domain === "PLUS") {
      return <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Subdomain</li> 
    }
    return ( <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free
      Subdomains</li> )
  };
  return (
    <div class="card mb-5 mb-lg-0">
      <div class="card-body">
        <h5 class="card-title text-muted text-uppercase text-center">{props.pack}</h5>
        <h6 class="card-price text-center">{props.amount}<span class="period">/month</span></h6>
        <hr />
        <ul class="fa-ul">
          {
            props.pack === "FREE"
            ? <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.userCount}</li> 
            : <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>{props.userCount}</strong></li>
          }
          <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.storage}</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
          {
            props.pack === "FREE" 
            ? <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited Private Projects</li> 
            : <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li> 
          }
          {
            props.pack === "FREE" 
            ? <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated Phone Support</li> 
            : <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li> 
          }

          {domain(props.pack)}

          {
            props.pack === "PRO"
            ? <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
            : <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
            Reports</li>
          }
          
        </ul>
        <div class="d-grid">
          <a class="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  );
}
