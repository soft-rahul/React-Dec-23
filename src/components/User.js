const User = ({ name, location }) => {
  return (
    <div>
      <h2> Name : {name} </h2>
      <h2> Address : {location}</h2>
    </div>
  );
};

export default User;
