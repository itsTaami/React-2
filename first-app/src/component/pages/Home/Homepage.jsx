// import logo from './logo.svg';
// import './App.css';

import Content from "../../Content";
import Footer from "../../Footer";
import Header from "../../Header";

// import UserCard form './component/UserCard';

const Home = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );

  // const users = [

  //   { name: "John", age: 35, imageURL: `https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.jpg?b=1&s=170667a&w=0&k=20&c=N-Uwgbn8qhGypoXFB6keEEC3mW0qhNynAqBqd8oNJw0=` },
  //   { name: "Boldo", age: 15, imageURL: "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.jpg?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=" },
  //   { name: "Dorj", age: 20, imageURL: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=" },
  //   { name: "Bat", age: 25, imageURL: "https://media.istockphoto.com/id/1365997131/photo/portrait-of-mid-20s-african-american-man-outdoors-at-dusk.jpg?b=1&s=170667a&w=0&k=20&c=_XMq-GZm_VV-N_kS8KCHp1nNjhdKkaLz0JgRdl3OlAk=" },
  //   { name: "Naraa", age: 40, imageURL: "https://media.istockphoto.com/id/1375264815/photo/beautiful-afro-woman.jpg?b=1&s=170667a&w=0&k=20&c=V052sAKDF76elxBGk2ozB0hxafANXLjVmBNKFfPTdTY=" },

  // ];
  // let total = 0;
  // for (let i = 0; i < users.length; i++) {

  //   total += users[i].age;

  // }
  // let average = total / users.length;
  // console.log(average);

  // return (

  //   <div className='App'>
  //     <h1>Average: {average}</h1>
  //     {
  //       users.map((user) => (

  //         <UserCard name={user.name} age={user.age} imageURL={user.imageURL} />
  //       ))
  //     }
  //   </div>

  // );
};

export default Home;
