const Gallery = ({images}) => {
    return (
      <div>
        {images && images.length > 0 ? 
        (
            <div>{images.map((image, index) => <img key={index} src={image} alt={`Screenshot ${index}`} />)}</div>
        ) 
        : 
        ( <div> <h3>You haven't made a screenshot yet!</h3> </div> )}
      </div>
    )
  }

  export default Gallery;