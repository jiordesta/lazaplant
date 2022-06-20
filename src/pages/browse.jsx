import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PlantCard from '../entities/plantcard';
import { getPlants } from '../store/firebase-actions';

const Browse = () => {
    const user = useSelector((state) => state.auth.user)
    const allPlants = useSelector((state) => state.plant.allPlants)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlants())
    },[allPlants,dispatch])

    return (
        <div className="container-fluid pagebody">
            <div className="row pagecontent" style={{padding:'130px'}}>
                {allPlants.map((plant) => <PlantCard key={'key' + plant.id} id={plant.id} title={plant.title} description={plant.description} price={plant.price} owner={plant.userid} current={user}/>)}
            </div>
        </div>
    );
}
 
export default Browse;