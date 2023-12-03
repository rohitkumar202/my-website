import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown'
import {files} from "../../config"

export function Blog() {
    const [markdown, setMarkdown] = useState("");
    const [article, setArticle] = useState(files[0].path);

    const getData = async () => {
            try {
            console.log('fetching file')
            const res = await fetch(article);
            const result = await res.text();
            setMarkdown(result);
          } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
        getData();
      }, [article]); // Empty dependency array ensures the effect runs only once on mount
    

    return (
        <>
            <div className='row'>
              <div className='col-md-2'>
              <ul class="list-group">
                {files.map(item =>{
                    // return (<li class="list-group-item" onClick={() => setArticle(item.path)}>{item.name}</li>)
                    return (
                        <li class="list-group-item" onClick={() => setArticle(item.path)}>
                            <a href="#" class="link-primary">{item.name}</a>
                        </li>
                        
                    )
                })}
              </ul>
              </div>
              <div className='col-md-10'>
                <ReactMarkdown children = {markdown} />
              </div>
            </div>                            
        </>
        
    )
}