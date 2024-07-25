import React from 'react'

export const ImageGallery = ({images}) => {
    // let imagesData = []
    // const active_image = ({images}) => {
    //     let j= 0;
    //     while(images) {
    //         imagesData.push(
    //             <div className="carousel-item active">
    //                 <img src={images[j]} className="d-block w-100" alt="im" />
    //             </div>
    //         )
    //         break
    //     }
    // }

    const active_image = ({images}) => {
        for(let i=0; i<images.length; i++) {
            if(i===0) {
                carousal(images[i])
                break;  
            }
        }
        function carousal(image) {
            return (
                <div className="carousel-item active">
                    <img src={image} className="d-block w-100" alt="im" />
                </div>
            )      
        }
    }

    const image_gallery = ({images}) => {
        let imagesData = []        
        for(let i=1; i<=images.length; i++) {
            imagesData.push(
                <div className="carousel-item">
                    <img src={images[i]} className="d-block w-100" alt="im" />
                </div>
            )
        }
        return imagesData    
    }

    return (
        <div className="modal fade" id="image-gallery">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <div className="carousel slide" id="carousel-gallery" data-bs-ride="carousel">
                           
                            <div className="carousel-inner">
                                {images && active_image({images})}
                                {images && 
                                    image_gallery({images})
                                }
                            </div>
                            <button className="carousel-control-prev" data-bs-target="#carousel-gallery" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" data-bs-target="#carousel-gallery" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
