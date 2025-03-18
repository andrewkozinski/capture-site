const Gallery = ({images}) => {

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    maxWidth: '100%',
    overflow: 'hidden',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'cover',
  };

    return (
      <div>
        {images && images.length > 0 ? 
        (
            <div style={containerStyle}>{images.map((image, index) => <img key={index} src={image} alt={`Screenshot ${index}`} style={imageStyle}/>)}</div>
        ) 
        : 
        ( <div> <h3>You haven't made a screenshot yet!</h3> </div> )}
      </div>
    )
  }

  export default Gallery;