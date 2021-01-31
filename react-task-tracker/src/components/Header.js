import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'


const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1> {title} </h1>            
            {location.pathname === '/' && ( <Button onClick={onAdd} className='btn' 
            text={showAdd ? 'Close' : 'Add'}
            color = {showAdd ? 'red' : 'blue'}/>)}
            
        </header>
    )
}
Header.defaultProps = {
    title: "Task Tracker",

}

Header.propTypes = {
    title: PropTypes.string.isRequired,

}
//css in javasrcipt
// const headingStyle={
//     color: 'red';
//     background: 'black';

// }

export default Header
