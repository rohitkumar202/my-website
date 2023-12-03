import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown'

export function Home() {
    const [markdown, setMarkdown] = useState("");

    const getData = async () => {
            try {
            console.log('fetching file')
            const res = await fetch('/md-files/threading.md');
            const result = await res.text();
            setMarkdown(result);
          } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
        getData();
      }, []); // Empty dependency array ensures the effect runs only once on mount
    

    return (
        <ReactMarkdown children = {markdown} />
    )
}