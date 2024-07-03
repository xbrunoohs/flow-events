import React from 'react';
import "./style.css"; // Certifique-se de importar seu estilo

export default function Textarea({ label, ...textareaProps }){
  return (
    <div className="textareaContainer">
      <div className="textareaElement">
        <textarea id={textareaProps.name} {...textareaProps}></textarea>
        <label className="textareaFloatingLabel" htmlFor={textareaProps.name}>
          {label}
        </label>
      </div>
    </div>
  );
};