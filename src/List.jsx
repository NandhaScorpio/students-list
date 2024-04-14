const List = (props) => {
  const students = props.students;

  function handleAdd(id)
  {
    console.log(students)
    console.log(id)

    students.filter(
      (item,index) => {
        if(item.id === id)
        {
          students[index].favourite = true
        }
      }
    )
  }

  return (
    <div className="flex flex-col justify-center gap-1">
      {students.map(function (items) {
        return (
          <p key={items.id}>
            {items.id}.{items.name}{" "}
            <button
              className="text-white px-5 bg-black rounded-md mx-16 py-1 mt-2" disabled={items.favourite}
             onClick={()=>{handleAdd(items.id)}} style={{backgroundColor:items.favourite?"#BBBBBB":"black"}}>
              Add to favourite
            </button>
          </p>
        );
      })}
    </div>
  );
};

export default List;
