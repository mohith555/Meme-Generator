import React from "react";
// import D from "./Dataimg";
export default function Method(){
    let [poster,func]=React.useState({
        toptext:"",
        bottomtext:"",
        img:"/images/meme1.jpeg"
    });
    // let [poster2,func2]=React.useState(D);
    // let temp=poster2.memes;
    function random(){
        return Math.floor(Math.random()*apimg.length);
    }
    function Meth1(event){
            const {name,value}=event.target
            func((oldone)=>{
                return{
                    ...oldone,
                    [name]:value
                }
            })
    }
    function Meth(){
        let num=random();
        func((oldone)=>{
            return{
            ...oldone,
            img:apimg[num].url
            }
        })
    }
    const [apimg,func3]=React.useState([]);
    React.useEffect(()=>{
        async function temp(){
        const res=await fetch(`https://api.imgflip.com/get_memes`)
        const dataa=await res.json()
        func3(dataa.data.memes)
        }
        temp();
    },[])
    return(
        <div className="m">
            <div className="main">
            <input type="text" className="ione i" placeholder="Shut up" onChange={Meth1} name="toptext" />
            <input type="text" className="itwo i" placeholder="And take my money" onChange={Meth1} name="bottomtext" />
            <button className="b" onClick={Meth}>Get a new meme image</button>
            </div>
            <div className="dimg">
                <img src={poster.img} alt="pic" />
                
                <h3 className="t1">{poster.toptext}</h3>
                <h3 className="t2">{poster.bottomtext}</h3>
            
            </div>
        </div>
    )
}