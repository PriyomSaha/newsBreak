import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Cards from './Cards'

function DataFetch() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
		axios({
			"method": "GET",
			"url": 'https://newsapi.org/v2/top-headlines?country=in&apiKey=6a03890e573d45889d2ec25ce7e42b66',
		})
			.then((res) => {
                setPosts(res.data.articles)
                setLoading(false);
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])
    if(loading)
    {
        return(<div className="row" style={{textAlign:'center'}}><h1>Loading...</h1></div>)
    }

    else{
        return (
            <div className="row">
                {posts.map((news) =>
                    <Cards Title={news.title} Image={news.urlToImage} />
                )}
            </div>
        )
    }
}

export default DataFetch
