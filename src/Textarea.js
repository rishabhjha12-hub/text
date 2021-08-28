import React , {useState }from 'react'

const Textarea = () => {
    
    const toUpperCase=()=>{
        console.log("button clicked")
        let newTxt=text.toUpperCase()
        settext(newTxt)

    }
    const toLowerCase=()=>{
        console.log("button clicked")
        let newTxt=text.toLowerCase()
        settext(newTxt)

    }
    const toClear=()=>{
        console.log("button clicked")
        let newTxt=""
        settext(newTxt)

    }
    const handleOnChange=(event)=>{
        settext(event.target.value);
    }
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        alert("your text is copied")


    }
    const handleReverseText = () => {
        alert("Warning your data can be revesed .But don't worry because you can again reverse it to get the correct data.Thank you for using this function.");
        Text = text.split("");
        let reverseText = Text.reverse().toString().replaceAll(",", "");


        console.log(Text.reverse().toString().replaceAll(",", ""));
        settext(reverseText)
    }
    const download=(filename, text)=>{
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none'; document.body.appendChild(element);
        element.click(); document.body.removeChild(element);
      }
    const [text, settext] = useState("");
    return (
        <div className="container">
            
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <div className="container ">
                <button className="btn btn-primary mx-2" onClick={toUpperCase}>convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={toLowerCase}>convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={toClear}>clear</button>
                <button className="btn btn-primary mx-2" onClick={download}>download text file</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>copy to clip board</button>
                <button className="btn btn-primary mx-2" onClick={handleReverseText}>reverse text</button>

            </div>
            <div className="container">
                <h2>    Summary         </h2>
                <p>{text.length} characters {text.length===0?0:text.split(" ").length} words</p>
                <p>on an average it takes {text.length===0?0:text.split(" ").length*1.5} seconds to read</p>   
           </div>
            <div className="container my-3">
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            

        </div>
    )
}

export default Textarea
