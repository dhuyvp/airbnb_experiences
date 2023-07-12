import image01 from './for_sell/image 12.png'
import image02 from './for_sell/wedding-photography 1.png'
import image03 from './for_sell/mountain-bike 1.png'

// import ellipse from './icons/Ellipse 6.svg'
import starIcon from './icons/Star 1.png'

const Lessons = (props) => {
    const { lesson } = props;
    return (
        <div style={{
            position:'relative',

        }}>
            <img src={lesson.image} alt ='image01' className='Image' />
            
            {lesson.status?
                <div style={{
                    position:'absolute',
                    top:'6px',
                    left:'15px',
                }} className='Absolute-div'>
                    {lesson.status}
                </div>
            :null
            }

            <div className='Lesson-description'> 
                <div className='Rate-lesson'>
                    <img src={starIcon} alt='starIcon' /> &nbsp;
                    
                    <div style={{
                        color:'#222',
                        fontFamily:'Poppins',
                        fontSize:'12px',
                        lineHeight:'110%',
                    }}> {lesson.rateStar} </div> 

                    <div style={{
                        color:'#918E9B',
                        fontFamily:'Poppins',
                        fontSize:'12px',
                        lineHeight:'110%',
                    }}> ({lesson.rateNumber}) </div>
                    
                    &nbsp; &bull; &nbsp;
                    
                    <div style={{
                        color:'#918E9B',
                        fontFamily:'Poppins',
                        fontSize:'12px',
                        lineHeight:'110%',
                    }}> {lesson.place} </div> 
                </div>

                <div className='Detail-lesson'> {lesson.detailLesson} </div>
            
                <div className='Price-lesson'>
                    <b>From ${lesson.price}</b>/person
                </div>
            </div>
        </div>
    );
}


const lessons = [
    {
        status:'SOLD OUT',
        image:image01,
        detailLesson:'Life lessons with Katie Zaferes',
        rateStar:'5.0',
        rateNumber:'6',
        place:'USA',
        price:'136',
    },
    {
        status:'ONLINE',
        image:image02,
        detailLesson:'Learn wedding photography',
        rateStar:'5.0',
        rateNumber:'30',
        place:'USA',
        price:'125',
    },
    {
        image:image03,
        detailLesson:'Group Mountain Biking',
        rateStar:'4.8',
        rateNumber:'2',
        place:'USA',
        price:'50',
    },
]

export default function ForSell() {
    return (
        <div className='Image' style={{
            paddingLeft:'20px',
        }}>
            <Lessons lesson={lessons[0]}/>
            <Lessons lesson={lessons[1]}/>
            <Lessons lesson={lessons[2]}/>
        </div>
    );
}