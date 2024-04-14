import { useState } from "react";

const Favourite = (props) => {
  const students = props.students;

  var [favStudents,setFavStudents] = useState([]);

  var temparr = students.filter((items, index) => {
    if (items.favourite === true) {
      return true;
    } else {
      return false;
    }
  });

  favStudents = temparr


  function handleRemove(fav) {
    
    students.filter((items, index) => {
      if (items.id === fav) {
        students[index].favourite = false;
      }
    });

    favStudents = temparr
  }

  return (
    <div>
      <div className="flex flex-col justify-center gap-1">
        {favStudents.map(function (items, ie) {
          return (
            <p key={items.id}>
              {ie + 1}.{items.name}
              <button
                className="text-white bg-red-600 px-5 rounded-md mx-16 py-1 mt-2"
                onClick={() => {
                  handleRemove(items.id);
                }}
              >
                Remove
              </button>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Favourite;
export {};
