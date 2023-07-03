import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { fetchData } from '../service';
import PropTypes from 'prop-types';

function RecipeLists(props) {

    RecipeLists.propTypes = {
        setLoader: PropTypes.func.isRequired,
      };

    const [searchedTearm, setSearchedTearm] = useState('')
    const [query, setQuery] = useState('pizza')
    const [data, setData] = useState(null);

    const searchrecipe = (searchQuery) => {
        fetchData(searchQuery)
        .then((response) => {
            setData(response);
            props.setLoader(false)
        })
    }

    useEffect(() => {
        fetchData(query).then((response) => {
            setData(response)
            props.setLoader(false)
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
                    <button onClick={() => (searchrecipe(searchedTearm),props.setLoader(true) )} ><BsSearch /></button>
                </div>
            </div>
            <div className='flexbox'>
                {
                    data && data.hits.map((item, index) => (
                        <div key={index} className='flexItem'>
                            <div className='img-wrapper'>
                                <img src={item.recipe.image} alt={item.recipe.label} />
                            </div>
                            <p style={{color:"green"}}>{item.recipe.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecipeLists