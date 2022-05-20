import Display from "./Object";

const Object = () => {
  const Arrayofobjects = [
    { firstname: "joe", lastname: "biden", age: "53" },
    { firstname: "barak ", lastname: "obama", age: "53" },
  ];
  return (
    <div>
   
      {Arrayofobjects.map((student, index)=> (
        <Display key={Math.random()*index} student={student} />
        ))}
      
    </div>
  );
};
export default Object;
