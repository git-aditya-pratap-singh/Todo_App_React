import Recat from "react";

import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const ListData = (props) =>{
    return(
        <>
        <div className="w-full flex flex-col gap-y-2">
            <div className="bg-gray-800 px-2 py-2 items-center flex flex-row justify-between rounded-md">
                <h3 className="text-white md:text-[15px] pl-2">{props.text}</h3>
                <DeleteForeverRoundedIcon className="text-white text-red-400 active:text-red-600"
                onClick={()=>{props.onSelect(props.id)}}/>
            </div>
        </div>
        </>
    )
}  
export default ListData;