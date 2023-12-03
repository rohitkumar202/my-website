import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown'

export function About() {
    const [markdown, setMarkdown] = useState("");

    const getData = async () => {
        try {
            const res = await fetch('/md-files/about.md');
            const result = await res.text();
            console.log(result);
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