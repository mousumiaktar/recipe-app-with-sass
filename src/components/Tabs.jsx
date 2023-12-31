import { useEffect, useState } from 'react'
import { CiPizza } from 'react-icons/ci'
import { GiFruitBowl, GiNoodles, GiCheckMark } from 'react-icons/gi'
import { MdOutlineIcecream } from 'react-icons/md'
import { fetchTabData } from '../service'
import PropTypes from 'prop-types';

function Tabs(props) {

    Tabs.propTypes = {
        setLoader: PropTypes.func.isRequired,
      };
    const [active, setActive] = useState('Pizza');
    const [tabData, setTabData] = useState('')
    const [tabLabel, setTablabel] = useState([

        {
            name: 'pizza',
            icons: <CiPizza />,
            id: '687b61a316de39be04b86911cff4dfe6'
        },
        {
            name: 'Noodles',
            icons: <GiNoodles />,
            id: '77c41731c83b90e9800fc7189595494d'
        },
        {
            name: 'Desert',
            icons: <GiFruitBowl />,
            id: '3e7100af0c44d5af24bb27e247c49f22'
        },
        {
            name: 'Icecream',
            icons: <MdOutlineIcecream />,
            id: 'fcdefc1ab687dcd2e88b2fe92a370b78'
        }

    ]);

    const handleClick = (name, id) => {
        setActive(name)
        fetchTabData(id).then((response) => {
            setTabData(response);
            props.setLoader(false)
        })
    }

    useEffect(() => {
        fetchTabData(tabLabel[0].id).then((response) => {
            setTabData(response);
            props.setLoader(false)
        })
    }, []);

    return (
        <div className="container">
            <h1 className='recipeHeading'>What would you like to have!</h1>
            <div className="tabs">
                {tabLabel.map((item, index) => (
                    <div onClick={() => (handleClick(item.name, item.id,props.setLoader(true)))} key={index} className={`tablist ${active === item.name ? 'active' : ""}`}>
                        {item.icons}
                        <span>{item.name}</span>
                    </div>
                ))}

            </div>
            <div className='recipe_banner'>
                {tabData !== '' && tabData.recipe && <>
                <div className="left-col">
                    <span className='badge'>{tabData.recipe?.cuisineType[0].toUpperCase()}</span>
                    <h1>{tabData.recipe.label}</h1>
                    <p><strong>Recipe by:</strong><small style={{color:"red"}}>{tabData.recipe.source}</small></p>
                    <h3>Ingredients</h3>
                    <div className='ingredients'>
                        <ul>
                            {tabData.recipe.ingredientLines.map((list,index)=> 
                                (<li key={index}><GiCheckMark size="18px" color="#008000" />&nbsp;<span>{list}</span></li>)
                            )}
                            
                        </ul>
                    </div>
                </div>
                <div className="right-col">
                    <div className="image-wrapper">
                    <img src={tabData.recipe.image} alt={tabData.recipe.label} />
                    </div>
                </div>
                </>}
            </div>
        </div>
    )
}

export default Tabs