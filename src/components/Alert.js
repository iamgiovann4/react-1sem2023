import { FaInfo as Info } from 'react-icons/fa';
import { IoMdWarning as Warning } from 'react-icons/io';
import { 
    MdDisabledByDefault as Error,
    MdOutlineDoneOutline as Success } from 'react-icons/md';

const typeColor = {
    success: "#cdefd6" ,
    error: '#efcdcd',
    info: '#cddeef',
    warning: '#ebe5b7'
}

const typeIcon = {
    success: <Success/>,
    error: <Error/>,
    info: <Info/>,
    warning: <Warning/>
}

const Alert = ({type, children}) => {
    const bg = {
        background: typeColor[type],
        padding: '20px',
        borderRadius: '10px'
    }    

    return (
        <div style={bg}>
            {typeIcon[type]}
            {children}
        </div>
    )
}

export default Alert