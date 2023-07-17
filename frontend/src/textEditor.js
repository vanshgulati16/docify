import React from 'react'
import { useEffect, useRef } from 'react';
import Quill from 'quill';
import "quill/dist/quill.snow.css";


export default function TextEditor() {
    // to make the textedior inside the div with id = "Container-editor"
    const wrapperRef = useRef();
    // making a texteditor which would have different features like bold, italic, underline, etc.
    useEffect(() => {
      const editor = document.createElement('div');
      wrapperRef.current.append(editor);
      new Quill(editor, {theme: 'snow'});

    // to not make the texteditor again and again, we use this return function
      return () => {
        wrapperRef.current.innerHTML = "";
    }
    }, []); 

    return (
      <div id= "Container-editor" ref = {wrapperRef}></div>
    )
}

