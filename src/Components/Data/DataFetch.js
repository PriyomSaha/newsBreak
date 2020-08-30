import React from 'react'
/*import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Cards from './Cards'*/

function DataFetch() {
   /* const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
		axios({
			"method": "GET",
			"url": 'https://news18-api.herokuapp.com/api/headlines',
		})
			.then((res) => {
                setPosts(res.data)
                setLoading(false);
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])
    /*if(loading)
    {*/
        return(<div className="row" style={{textAlign:'center'}}><h1>Loading...</h1></div>)
    //}

    /*else{
        return (
            <div className="row">
                {posts.map((news) =>
                    <Cards Title={news.Title} Image={news.ImageLink} />
                )}
            </div>
        )
    }*/
}

export default DataFetch
