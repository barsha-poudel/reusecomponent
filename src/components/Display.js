const Display = (props) => {
  console.log(props, props.key);
  return (
    <div>
      
        <p>{props.student.firstname}</p>
        <p>{props.student.lastname}</p>
     
    </div>
  );
};
export default Display;
