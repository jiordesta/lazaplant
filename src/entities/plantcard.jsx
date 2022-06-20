import React from 'react';
import { useDispatch } from 'react-redux';
import { updatePlant } from '../store/firebase-actions';

const PlantCard = ({id,title,description,price,owner,current}) => {
    const dispatch = useDispatch()
    
    const buyHandle = () => {
        if (current !== null){
            dispatch(updatePlant(id,{title:title,description:description,price:price,userid:current.id}))
        }
    }

    return (
        <div className="card" style={{width: "25rem",maxWidth:'100%',maxHeight:'100%', borderRadius:'10px',margin:'5px'}}>
            <input type="text" className="form-control" id="title" style={{borderStyle:'none',fontSize:'30px',fontWeight:'bold'}} disabled value={title}/>
            <textarea style={{borderStyle:'none',fontSize:'20px',margin:'5px',height:'300px'}} cols={25} rows={2} value={description} disabled></textarea>
            <div className='row' style={{fontSize:'26px',color:'green',padding:'10px'}}>
                <div className="col-9">{'$'+price}</div>
                <div className="col">
                    {current === null || owner !== current.id?
                    <button type='button' style={{fontSize:'25px', borderStyle:'none', width:'100%',textAlign:'center',backgroundColor:'transparent',color:'green'}} onClick={buyHandle}>Buy</button>
                    :
                    <button type='button' style={{fontSize:'19px', borderStyle:'none', width:'100%',textAlign:'center',backgroundColor:'transparent',color:'brown'}} disabled>Owned</button>
                    }
                </div>
            </div>
        </div>
    );
}
 
export default PlantCard;