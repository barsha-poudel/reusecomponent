const Display = (props) => {
  console.log(props);
  return (
    <div>
      
        <p>{props.student.firstname}</p>
        <p>{props.student.lastname}</p>
     
    </div>
  );
};
export default Display;
