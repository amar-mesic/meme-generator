import '../styles/main.css'
import { useEffect, useState } from 'react';
import Form from './Form';

function Main() {
    // const topRef = useRef()
    // const bottomRef = useRef()
    // const [top, setTop] = useState('');
    // const [bottom, setBottom] = useState('');

    const [pressCount, setPressCount] = useState(1)
    //This code is confirmed to only run after pressCount has changed
    useEffect(() => {
        document.title = `You have clicked ${pressCount} times.`
    }, [pressCount])

    const [formData, setFormData] = useState({
        top: '',
        bottom: ''
    })
    const [fetchedMeme, setMeme] = useState([])
    // fetchedMemes should be a list of top 100 memes
    let fetchedMemes

    useEffect(() => {
        console.log('meme rendering')

        fetch(`https://api.imgflip.com/get_memes`)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            }
            else throw new Error()
        })
        .then(data => {
            fetchedMemes = data.data.memes
            const randIndex = Math.floor(Math.random() * fetchedMemes.length)
            setMeme(fetchedMemes[randIndex].url)
        })
    }, [])

    const handleOnSubmit = (event) => {
        event.preventDefault()

        setPressCount(prevPressCount => prevPressCount + 1)
        // setTop(topRef.current.value)
        // setBottom(bottomRef.current.value)
        
        const randIndex = Math.floor(Math.random() * fetchedMemes.length)
        setMeme(fetchedMemes[randIndex].url)
    }

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }


    return(
        <section className='main'>
            <Form functionality={{
                handleOnSubmit,
                handleChange
            }}/>
            <div className='meme'>
                <img src={fetchedMeme} alt='meme'/>
                <div className='meme-text top-text'>{formData.top}</div>
                <div className='meme-text bottom-text'>{formData.bottom}</div>
            </div>
        </section>
    )
}

export default Main;
