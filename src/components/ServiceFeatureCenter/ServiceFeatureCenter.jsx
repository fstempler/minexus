import './serviceFeatureCenter.css'

const ServiceFeatureCenter = ({ Badge, Title, Subtitle }) => {
    return (
        <section className="container-fluid d-flex flex-column justify-content-center serviceFeatureCenter__Container p-5 align-items-center">
            <div className='container row-gap-3'>
                <div className='row d-flex justify-content-center'>
                    <h3 className='serviceFeature__Badge'>{Badge}</h3>
                </div>                
                <div className='row d-flex justify-content-center row-gap-3'>                    
                    <h1 className='serviceFeature__Title'>{Title}</h1>
                    <h3 className='serviceFeature__Subtitle'>{Subtitle}</h3>                    
                </div>                
                
            </div>
            
        </section>
    )
}
export default ServiceFeatureCenter