import React from "react";
import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <div className="flex-1 flex flex-col">
        <textarea
          className="aipicker-textarea"
          placeholder="Ask AI..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={5}
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        {generatingImg ? <CustomButton
          type="outline"
          title="Ask AI..."
          customStyles="text-xs"
        /> : <>
        <CustomButton
          type="outline"
          title="AI Logo"
          handleClick={() => handleSubmit('logo')}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="AI Full"
          handleClick={() => handleSubmit('full')}
          customStyles="text-xs"
        />
        
        </>}
      </div>
    </div>
  );
};

export default AIPicker;
