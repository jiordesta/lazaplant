import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useDispatch, useSelector } from 'react-redux';

import { createPlant, getPlants, deletePlant } from '../store/firebase-actions';
import PlantCard from '../entities/plantcard';
import { plantActions } from '../store/plantSlice';

const Myplants = () => {
    const allPlants = useSelector((state) => state.plant.allPlants)
    const userPlants = useSelector((state) => state.plant.userPlants)
    const user = useSelector((state) => state.auth.user)

    const dispatch = useDispatch()
    const [name,setName] = useState('')
    const [desc,setDesc] = useState('')
    const [price,setPrice] = useState(0)

    const handleSell = () =>{
        dispatch(createPlant(user.id,{title:name,description:desc,price:price}))
    }

    const handleDelete = (id) => {
        dispatch(deletePlant(id))
    } 

    const plantContainer = (plant) => {
        return(
            <div className="card" key={'key'+plant.id} style={{color:'green',fontSize:'25px',textAlign:'left',minWidth:'300px'}}>
                <div className="card-body">
                    <div className="row">
                        <div className="col" style={{fontWeight:'bold',overflow:'hidden',maxWidth:'250px',maxHeight:'40px'}}>{plant.title}</div>
                        <div className="col" style={{overflow:'hidden',maxWidth:'250px',maxHeight:'40px'}}>{'$' + plant.price}</div>
                        <div className="col-3"><button type='button' style={{borderStyle:'none',backgroundColor:'transparent',color:'red',maxWidth:'100%'}} onClick={() => handleDelete(plant.id)}>DEL</button></div>
                    </div>
                </div>
            </div>
        )
    }

    useEffect(() => {
        if (user !== null){
            dispatch(getPlants())
            dispatch(plantActions.getUserPlants({user:user,plants:allPlants}))
        }
    },[dispatch,allPlants,user])

    return (
        <div className="container-fluid pagebody">
            <div className="row pagecontent">
                {user !== null?
                <>
                    <div className="col" style={{margin:'20px', maxWidth:'100%',minWidth:"350px"}}>
                        Details
                        <div style={{padding:'5px'}}>
                            <input type="text" className="form-control" id="plant name" placeholder='Plant name here..' onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div style={{padding:'5px'}}>
                            <textarea type="text" className="form-control" id="plant description" rows={10} placeholder='Plant descripption here..' onChange={(e) => setDesc(e.target.value)}/>
                        </div>
                        <div style={{padding:'5px'}}>
                            <CurrencyInput
                                className="form-control"
                                prefix='$'
                                id="price"
                                placeholder="Enter price"
                                decimalsLimit={2}
                                onValueChange={(value) => setPrice(value)}
                            />
                        </div>
                        <button type='button' style={{fontSize:'30px',borderColor:'white', borderStyle:'solid', borderWidth:'1px',borderRadius:'10px', width:'100%',textAlign:'center',backgroundColor:'transparent',color:'white'}} onClick={handleSell}>Sell Plant</button>
                    </div>
                    <div className="col" style={{margin:'20px'}}>
                        Preview
                        <PlantCard description={desc} title={name} price={price} owner={null} current={null}/>
                    </div>
                    <div className="col" style={{margin:'20px', textAlign:'center'}}>
                        Products
                        <div style={{maxHeight:'430px',overflow:'auto',paddingLeft:'10px',paddingRight:'10px'}}>
                            {userPlants.length === 0?<h1>You dont have plant listed</h1>:
                                userPlants.map((plant) => plantContainer(plant))
                            }
                        </div>
                    </div>
                </>
                :null}
            </div>
        </div>
    );
}
 
export default Myplants;