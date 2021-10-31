import React, {useState, useEffect, useRef} from 'react'
import serviceData from '../data/serviceData'

function ServiceSliderMobile() {
    const [serviceList, setserviceList] = useState(serviceData)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const lastIndex = serviceList.length - 1
        
        if (index < 0){
            setIndex(lastIndex)
        }
        if (index > lastIndex){
            setIndex(0) 
        }

    },[index, serviceList])

    useEffect(() => {
        
        let slider = setInterval( () => {
            setIndex(index+1)
        }, 500)   
        
        return () => clearInterval(slider)
        
    }, [index]);
    

    return (
        <section className="section">
            <div className="section-center">
            {           
                serviceList.map( (s, sId) => {
                    let position = 'nextSlide'
                    
                    if (sId === index){
                        position = 'activeSlide'
                    }
        
                    if (sId === index - 1 || (index === 0 && sId === serviceList.length - 1) ){
                        position = 'lastSlide'
                    }
                    
                    return (
                        <article className={position} key={s.id}>
                            <h1 className="slide-header">{s.service}</h1>
                        </article>  
                    )   
                }) 
                
            }
            
            </div>
        </section>
        
    )
}

export default ServiceSliderMobile
