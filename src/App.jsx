import React,{useState,useEffect} from "react";
import ListData from './list';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';


const getLocalItems = () =>{
  let list = localStorage.getItem('lists');

  if (list){
    return JSON.parse(localStorage.getItem('lists'));
  }
  else{
      return []
  }
}

const App = () =>{

  const [dataList, setdata] = useState("");
  const [Items, setItems] = useState(getLocalItems());

  const itemEvent = (event) =>{
    setdata(event.target.value);
  }

  const listOfItems = (event) =>{
    event.preventDefault();
    setItems((oldItems)=>{
        return [...oldItems, dataList];
    })
    setdata("");
    }

    const deleteItems = (id) =>{
      setItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
          return index !== id;
         })
      }) 
   }

   useEffect(() => {
      localStorage.setItem('lists',JSON.stringify(Items))
   },[Items])


  return(
    <>
        <div className="w-full mx-auto p-5 items-center mt-5 sm:mt-[5rem]">
          <div className="max-w-[500px] p-5 mx-auto bg-gray-800 rounded-md shadow-md flex flex-col items-center">
                <h1 className="text-2xl font-bold text-white">ToDo App</h1>

                <h1 className="mt-6 w-full bg-gray-500 h-[0.1rem] rouneded-full"></h1>
                
                <form onSubmit={listOfItems} className="w-full">
                <div className="w-full flex flex-row px-2 py-5 items-center justify-between">
                    <input type="text" placeholder="Add Items ..." className="w-full px-4 py-2 bg-gray-800 text-white rounded-md
                    text-[19px] md:text-[17px] outline-0 caret-indigo-500" value={dataList} 
                    onChange={itemEvent} required />
                    <button><AddCircleRoundedIcon className="text-white text-green-400 active:text-green-600"/></button>
                </div>
                </form>

                {
                  Items.map((elem,index)=>{
                      return(
                        <ListData key={index} 
                        id={index}
                        text={elem} 
                        onSelect={deleteItems}
                        />
                          
                      )
                  })
                }

          </div>
      </div>
    </>
  )
}
export default App;