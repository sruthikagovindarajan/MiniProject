export const selection ={};

function calculateScore(){
    let values = Object.values(selection);
    console.log("Values: "+values);
    const sum = values.reduce(add, 0);
    function add(accumulator, a) {
        return accumulator + a;
      }
    return (["Calculated Score: "+sum+"/50",sum]);
}

export function getResult(){
    var score = calculateScore()[1];

    if (score < 8){
        return "Result: You are doing perfectly fine. You do not have depression ";
    }
    else if(score<15)
 {
    return "Result: You have mild depression. You should consider taking help";
 }  
    else
{
        return "Result: You have severe depression. Kindly reach out to a professional!";
    }
    
}


function handleClick(name,id){

    

    selection[id] = name;
    console.log(selection);
    document.getElementById('hamiltonScore').textContent = calculateScore()[0];
    console.log(calculateScore());
    document.getElementById('hamiltonResult').textContent = getResult();
}

function MakeButton(name,val,score){
    return (<button type="button" onClick={()=>handleClick(score,val)} className='btn btn-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <h5>{name}</h5>
</button>);
}
function isInteger(value) {
    if(parseInt(value,10).toString()===value) {
      return true
    }
    return false;
  }
function MakeButtons(props){
    var buttons =[];
    var values = [props.o1,props.o2,props.o3,props.o4,props.o5];
    var counter = 0;
    values.forEach((value) => {
        console.log(value)
        if (value!==undefined){
            
            if(isInteger(props.qn[1])){
                buttons.push(MakeButton(value,props.qn.slice(0,2),counter++))
            }
            else{
                buttons.push(MakeButton(value,props.qn[0],counter++))
            }
       
            
        }
    })
    console.log("buttons:"+buttons)
    return (buttons);
}

export function EX(props) {
    return (

        <div className='container'>
            <div className='col content'>
                <div className='row'>
                    <h3>{props.qn}</h3>
                </div>
                <div className='row options'>
                    <div className='col'>
                    {MakeButtons(props)}
                    </div>
                </div>
            </div>
        </div>
    );
}

