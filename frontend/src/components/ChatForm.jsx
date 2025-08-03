import { useRef, useState } from "react";

const ChatForm = ({chatHistory,setChatHistory,generteBotResponse}) => {
    const inputRef=useRef();
    const [inputValue, setInputValue] = useState('');
    
    const handleFormSubmit =(e)=>{
        e.preventDefault();
        const userMessage=inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value="";
        setInputValue('');
        setChatHistory((history)=>[...history,{role:"user",text:userMessage}]);
        setTimeout(()=>{
        setChatHistory((history)=>[...history,{role:"model",text:"Thinking.."}]);
        generteBotResponse([...chatHistory,{role:"user",text:`Using the details provided above, please address this query:${userMessage}`}]);
      },600)
        
    }
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        value={inputValue}
        onChange={handleInputChange}
        required
      />

      <button 
        type="submit" 
        className="send-button"
        style={{display: 'flex'}}
      >
        ➤
      </button>
    </form>
  );
};

export default ChatForm; 