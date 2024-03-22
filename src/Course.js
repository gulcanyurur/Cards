import React from 'react'

function Course({image,title,descripton}) {
    
    return (
        <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={image}alt="Kurslarım"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      
      </div>
      <div className="media-content">
        <p className="title is-4">{title}</p>
        
      </div>
    </div>

    <div className="content">
   {descripton}
    </div>
  </div>

        
    ) };

export default Course ;

