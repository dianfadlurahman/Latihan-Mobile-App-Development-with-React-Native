import React, {useState, useEffect} from 'react'

const Counter = ({finishGame}) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress)
        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    }, [count])

    const handleClick = () => {
        setCount(count + 1)
    }

    const handleKeyPress = (event) => {
        const {key} = event
        if (key === 'Enter') {
            setCount(count + 1)
        }
    }

    return (
        <div>
            <h1 style={styles.number}>{count}</h1>
            <button style={styles.button} onClick={() => {handleClick()}}>+</button>
            <div>
                <button style={styles.button} onClick={() => {finishGame()}}>Finish Game</button>
            </div>
        </div>
    )
}

const styles = {
    number: {
        fontSize: '64px'
    },
    button: {
        fontSize: '32px',
        width: '200px',
        height: '48px',
        borderRadius: '4px',
        marginRight: '24px',
        marginLeft: '24px',
        marginTop: '30px',
        color: '#fff',
        backgroundColor: '#66ccff'
    }
}

export default Counter