

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mh-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src} style={{height:"200px, width:360px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News API is great as a data source for news tickers and other applications where you want to show your users live headlines. We track headlines in 7 categories across over 50 countries, and at over a hundred top publications and blogs, in near real time."}</p>
    <a href={url} class="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem
