"use client";
import { useEffect } from 'react';

export default function Chatbot() {
  useEffect(() => {
    // Add the Dialogflow Messenger script
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;
    document.body.appendChild(script);

    // Add the df-messenger element with inline CSS
    const dfMessenger = document.createElement('df-messenger');
    dfMessenger.setAttribute('chat-icon', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOKqCz4xX7cjtTIOMAYQ2kaB4jywmyr-20Q&s');
    dfMessenger.setAttribute('intent', 'WELCOME');
    dfMessenger.setAttribute('chat-title', 'Bushra-collection');
    dfMessenger.setAttribute('agent-id', 'a08a9a30-2460-491a-a81b-562b1145456f');
    dfMessenger.setAttribute('language-code', 'en');
    dfMessenger.setAttribute('expand', 'false'); // Start minimized (chat bubble mode)
    // Inline CSS to position the widget and prevent overlap
    dfMessenger.setAttribute('style', 'z-index: 1000; bottom: 20px; right: 20px;');
    document.body.appendChild(dfMessenger);

    // Add inline CSS to body to prevent overlap at the bottom
    const originalBodyStyle = document.body.getAttribute('style') || '';
    document.body.setAttribute('style', `${originalBodyStyle} padding-bottom: 80px;`);

    // Cleanup on component unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.body.contains(dfMessenger)) {
        document.body.removeChild(dfMessenger);
      }
      // Revert body style
      document.body.setAttribute('style', originalBodyStyle);
    };
  }, []);

  return null;
}