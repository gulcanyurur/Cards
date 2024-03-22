import 'bulma/css/bulma.css';
import './App.css';
import  Course from './Course';
import Angular  from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import  Csharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.jpg';


function App() {
  return (
    <div className="App">
      <section className="hero is-link">
  <div className="hero-body">
    <p className="title">
     Kurslarım
    </p>
    
  </div>

</section>
      
      <div className ='container'>
        <section className='section'>
        <div className='columns'>
          <div className='column'>
     <Course 
      image ={Angular}
     title ="Angular Kursu" descripton =" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia velit dolores nihil expedita voluptas nesciunt maxime delectus sequi nostrum modi sunt, quisquam laboriosam! Neque tempore repellat ad assumenda ex?"/>

          </div>
          <div className='column'>
          <Course  
     image ={Bootstrap}
     title ="Bootstrap 5 Kursu" descripton =" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia velit dolores nihil expedita voluptas nesciunt maxime delectus sequi nostrum modi sunt, quisquam laboriosam! Neque tempore repellat ad assumenda ex?"/>

          </div>
          <div className='column'>
          <Course 
      image ={Csharp}
     title ="kompleWeb Kursu" descripton =" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia velit dolores nihil expedita voluptas nesciunt maxime delectus sequi nostrum modi sunt, quisquam laboriosam! Neque tempore repellat ad assumenda ex?"/>
     

          </div>
          <div className='column'>
          <Course
       image ={KompleWeb}
     title ="Frontend Kursu" descripton =" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia velit dolores nihil expedita voluptas nesciunt maxime delectus sequi nostrum modi sunt, quisquam laboriosam! Neque tempore repellat ad assumenda ex?"/>


          </div>
          </div> 

        </section>
        
      </div>
    </div>
  );
  
}

export default App;
