// import React from 'react';


import React from 'react';
import ServiceData from './ServiceData';

const Card = (props) => {
  return (
    <>

<div className="col-lg-4 col-md-4 col-sm-12">

<div className="card">

<div class="card-body">
    <h5 class="card-title">{props.title}</h5>
        <p class="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>

     <div className="button-holder">
        <a href="#cf" class="btn btn-primary">MORE</a>
    </div>
 </div>
</div>
</div>
    </>
  )
}

export default Card;
