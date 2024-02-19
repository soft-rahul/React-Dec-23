import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h2> About Page</h2>
      <h3> This is a about Page.</h3>
      <User/>
      <UserClass name='Rahul Kumar Keshri (class)' />
    </div>
  );
};

export default About;
