import React, { useState } from 'react';
import './Quiz.css'
import Robot from '../../images/robot.png'
import BookImg from '../../images/img.png'

const Quiz = () => {

    const [playQuiz, setPlayQuiz] = useState(true)

    return (
        <div></div>
        // <div className='container'>
        //     {
        //                     playQuiz ? (
        //                         <div className="lesson">
        //                             <div className="video-block">
        //                                 <div className="lesson-block">
        //                                     <div className="lesson-name">
        //                                         <h2 className="course-name">O’tishingiz kerak bo’lgan oraliq nazorat test:</h2>
        //                                     </div>
        //                                     <div className="complaint">
        //                                         <button className="complaint-btn">
        //                                             <span className="attention">!</span>
        //                                             Shikoyat qilish
        //                                         </button>
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                             <div className="write-block">
        //                                 <div className="written-material">
        //                                     <div>
        //                                         <h2 className="course-name">Mavzu: Audit</h2>
        //                                         <p className="materials">{}</p>
        //                                     </div>
        //                                 </div>

        //                                 <div className="chat-container">
        //                                     <h2 className='chat-title'>Darsga oid savollarga:</h2>
        //                                     <div className="chat-header">
        //                                         <img src={Robot} alt="robot" />
        //                                         <div className="chat-name-block">
        //                                             <h3 className="chat-name"><span className="blue-text">Suniiy intelekt</span> javob beradi</h3>
        //                                             <p className="online-text">Online</p>
        //                                         </div>
        //                                     </div>
        //                                     <div className="chat-body" ref={chatBodyRef}>
        //                                         <p className="date">{formatDate()}</p>
        //                                         {messages.map((msg, index) => (
        //                                             <div key={index} className="message">
        //                                                 <p className='message-bot'>{msg.text}</p>
        //                                                 <p className="time">{msg.time}</p>
        //                                             </div>
        //                                         ))}

        //                                         {inputMessage.map((mesEl, index) => (
        //                                             <div key={index} className="input-mes-block">
        //                                                 <div className='mes-block'>
        //                                                     <p className="input-mes">{mesEl.text}</p>
        //                                                     <p className="time time-user">{mesEl.time}</p>
        //                                                 </div>
        //                                             </div>
        //                                         ))}

        //                                     </div>
        //                                     <div className="chat-input">
        //                                         <input
        //                                             type="text"
        //                                             placeholder="Your message"
        //                                             value={input}
        //                                             onChange={(e) => setInput(e.target.value)}
        //                                             onKeyDown={(e) => e.key === 'Enter' && handleSend()} />
        //                                         <button onClick={handleSend}>submit <i className="ri-telegram-2-fill"></i></button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     ) : (
        //                         <div className="play">
        //                             <img src={BookImg} alt="img" className="play-img" />
        //                             <div className="play-block">
        //                                 <div className="play-left">
        //                                     <h2 className="course-name">Audit</h2>
        //                                     <p className="course-author">Azizov Aziz</p>
        //                                 </div>
        //                                 <div className="play-right">
        //                                     <p className="course-number lesson-number">1-dars</p>
        //                                     <button onClick={playLessonHandle} className="button play-btn">Play</button>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     )
        //                 }
        // </div>
    );
}

export default Quiz;
