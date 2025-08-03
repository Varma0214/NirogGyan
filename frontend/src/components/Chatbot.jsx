import {useEffect, useRef, useState} from "react";
import ChatbotIcon from "./ChatbotIcon";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import { healthcareInfo } from "./healthcareInfo";
import './Chatbot.css';

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat:true,
      role: "model",
      text: healthcareInfo,
    }
  ]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef=useRef(); 

  const generteBotResponse=async (history)=>{
    const updateHistory=(text,isError=false)=>{
      setChatHistory(prev=>[...prev.filter(msg=>msg.text!=="Thinking.."),{role:"model",text,isError}]);
     
    }
    history=history.map(({role,text})=>({role,parts:[{text}]}));

    // Get API URL and key from environment variables
    const apiUrl = process.env.REACT_APP_GEMINI_API_URL || "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";
    const apiKey = process.env.REACT_APP_GEMINI_API_KEY || "AIzaSyDEAANuzUrAFLKiymdNpIab5YPY1__JTwk";

    const requestOptions={
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        contents:[
          {
            role: "user",
            parts: [{
              text: `You are a healthcare assistant for NirogGyan platform. Provide SHORT and CONCISE responses (2-3 sentences max). When users describe health problems, suggest the appropriate doctor by NAME and SPECIALIZATION. Keep responses brief but helpful.

Available doctors:
- Dr. Mark Rodriguez (Cardiologist) - heart problems
- Dr. Emily Carter (Dermatologist) - skin problems  
- Dr. Jessica Hayes (Orthopedic) - bone/joint problems
- Dr. Sarah Chen (Pediatrician) - children's health
- Dr. David Lee (Neurologist) - brain/nervous system
- Dr. Laura Thompson (Psychiatrist) - mental health
- Dr. Michael Davies (Ophthalmologist) - eye problems
- Dr. Anya Sharma (Gastroenterologist) - digestive issues
- Dr. Ben Miller (Oncologist) - cancer issues
- Dr. Robert Garcia (Endocrinologist) - diabetes/thyroid
- Dr. Jane Wilson (Rheumatologist) - arthritis/autoimmune
- Dr. Kenji Tanaka (Allergist) - allergies/asthma
- Dr. Priya Patel (Nephrologist) - kidney problems
- Dr. Alex Green (Urologist) - urinary problems
- Dr. Sophia Lee (Dentist) - dental issues

Respond to: ${history[history.length - 1].parts[0].text}`
            }]
          }
        ]
      })
    }
    try {
      
      const response=await fetch(`${apiUrl}?key=${apiKey}`,requestOptions)
      const data=await response.json();
      if(!response.ok) throw new Error(data.error || "Something went wrong");
      
      const apiResponseText=data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim();
      updateHistory(apiResponseText)
      
    } catch (error) {
      updateHistory(error.message,true)
      
    }
    

  };
  useEffect(()=>{
    chatBodyRef.current?.scrollTo({top:chatBodyRef.current.scrollHeight,behavior:"smooth"});
  },[chatHistory]);
  
  return (
    <div className={`chatbot-container ${showChatbot?"show-chatbot":""}`}>
      <button onClick={()=>setShowChatbot(prev=>!prev)} id="chatbot-toggler">
       <span className="material-symbols-rounded">mode_comment</span>
       <span className="material-symbols-rounded">close</span>
       </button>

      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">NirogGyan Assistant</h2>
          </div>
          <button onClick={()=>setShowChatbot(prev=>!prev)} className="material-symbols-rounded">
            keyboard_arrow_down
          </button>
        </div>
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hi! 👋 I can help you find the right doctor. Describe your symptoms and I'll suggest a specialist.
            </p>
          </div>

          {chatHistory.map((chat,index)=>(
            <ChatMessage key={index} chat={chat}/>
          ))}
        </div>
        <div className="chat-footer">
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generteBotResponse={generteBotResponse}/>
        </div>
      </div>
    </div>
  );
};

export default Chatbot; 