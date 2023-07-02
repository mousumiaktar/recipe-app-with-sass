import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { fetchData } from '../service';

function RecipeLists() {

    const [searchedTearm, setSearchedTearm] = useState('')
    const [query, setQuery] = useState('pizza')
    const [data, setData] = useState(null);

    const searchrecipe = (searchQuery) => {
        fetchData(searchQuery)
        .then((response) => {
            setData(response);
            console.log(response)
        })
    }

    useEffect(() => {
        fetchData(query).then((response) => {
            setData(response)
            console.log(response)
        })
    }, [])


    


    return (
        <div className='container'>
            <div className='heading-line'>
                <strong>Search Recipes</strong>
                <div className='input-wrapper' >
                    <input
                        onChange={(e) => setSearchedTearm(e.target.value)}
                        value={searchedTearm}
                        type="text" 
                        placeholder='Search your recipe...' />
                    <button onClick={() => (searchrecipe(searchedTearm) )} ><BsSearch /></button>
                </div>
            </div>
            <div className='flexbox'>
                {
                    data && data.hits.map((item, index) => (
                        <div key={index} className='flexItem'>
                            <div className='img-wrapper'>
                                <img src={item.recipe.image} alt={item.recipe.label} />
                            </div>
                            <p>{item.recipe.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecipeLists