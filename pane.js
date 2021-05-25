let flag=1;
if(localStorage.hasOwnProperty("flag")){
flag=Number(localStorage.getItem("flag"));
}else{
localStorage.setItem("flag",String(1))
}
let array=["Слайд #1","Слайд #2","Слайд #3","Слайд #4","Слайд #5"];
counter=1;
flag=Number(localStorage.getItem("flag"));
if (flag){
    init();
}
function createPane(){
    let divPane=document.createElement("div");
    divPane.className="pane";

    let divSlider=document.createElement("div");
    divSlider.className="slider";

    let divSliderDots=document.createElement("div");
    divSliderDots.className="slider-dots";

    let divCheckBox=document.createElement("div");
    divCheckBox.className="checkbox";
    divCheckBox.innerHTML="<input   type=\"checkbox\">\n" +
        "          Disable Tips"

    let buttonRemove=document.createElement("button");
    buttonRemove.className="remove-button";
    buttonRemove.innerHTML="[x]";

    let divPanel=document.createElement("div");
    divPanel.className="panel";

    divPane.appendChild(buttonRemove)
    divPane.appendChild(divSlider)
    divPane.appendChild(divSliderDots);

    divSliderDots.appendChild(divCheckBox);
    divSliderDots.appendChild(divPanel);

    addContent(divSlider,divPanel);

    document.body.prepend(divPane)

}
function addContent(divSlider,divPanel){

    let aLeftArrow=document.createElement("a");
    aLeftArrow.className="prev";
    let str="minusSlide()";
    aLeftArrow.setAttribute("onclick",str);
    aLeftArrow.innerHTML="&#10094;";
    divPanel.appendChild(aLeftArrow);

    for (let i=0;i<array.length;i++){
        addSlide(array[i],divSlider,divPanel);
    }

    let aRightArrow=document.createElement("a");
    aRightArrow.className="next";
    let str2="plusSlide()";
    aRightArrow.setAttribute("onclick",str2);
    aRightArrow.innerHTML="&#10095;";
    divPanel.appendChild(aRightArrow)
}

function addSlide(sliderText,divSlider,divPanel){
    let newDiv=document.createElement("div");
    newDiv.className="item";

    let newDivText=document.createElement("div");
    newDivText.className="slideText";
    newDivText.innerHTML=sliderText;

    divSlider.appendChild(newDiv);
    newDiv.appendChild(newDivText);

    addButton(divPanel)
}

function addButton(divPanel){
    let spanButton=document.createElement("span");
    spanButton.className="slider-dots_item";
    let str="currentSlide("+String(counter)+")"
    spanButton.setAttribute("onclick",str)
    divPanel.appendChild(spanButton)
    counter++;
}

function init(){
    setTimeout(function (){

        createPane();

        let removeButton=document.querySelector("button");
        removeButton.addEventListener("click",()=>{
            let pane=document.querySelector(".pane");
            pane.remove();
        })

        let checkBox=document.querySelector("input")
        checkBox.addEventListener("change",()=>{
            if(checkBox.checked){
                localStorage.setItem("flag",String(0))
            }else{
                localStorage.setItem("flag",String(1))
            }
        })

        include("script.js")

    },5);
}

function include(path){
    let script=document.createElement("script");
    script.src=path;
    document.getElementsByTagName('head')[0].appendChild(script);
}


