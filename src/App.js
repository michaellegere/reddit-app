import './App.css';
import Nav from './components/Nav';
import Card from './components/Card';
import Featured from './components/Featured';
import Post from './components/Post';

function App() {
  return (
    <div className="App">

      <Nav />

      <section id='cards' className='float-left h-100'>
        <Card 
          title='Highlight 1'
          text='lorem ipsum'
          btn='Read More'
        />
        <Card 
          title='Highlight 2'
          text='lorem ipsum'
          btn='Read More'
        />
        <Card 
          title='Highlight 3'
          text='lorem ipsum'
          btn='Read More'
        />
      </section>

      <section id='profile' className='float-right h-100'>
        <Card 
          title='@user'
          text='your name'
          btn='#'
        />
        <Featured />
      </section>

      <div className='container w-75 d-flex align-items-center m-4'>
        <div className='list-unstyled'>
          <Post />
          <Post />
          <Post />  
        </div>
      </div>

    </div>
  );
}

export default App;
