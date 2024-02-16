const RestaurantCard=(props)=>{
  const {resData} = props;
  const { resName, cuisine, rating, deliveryTime, img}=resData;
  return(
    <div className='res-card'>
      <img 
      className='res-img' src={img}/>
      <h3>{resName}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  )
}
export default RestaurantCard;